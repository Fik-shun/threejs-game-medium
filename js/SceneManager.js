function SceneManager(canvas) {

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    };
    
    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);

    var theSpaceship, theBackground, theCoins, theEnemies;

    var ambientLight = new THREE.AmbientLight('#ffffff', 1.5);
    scene.add(ambientLight);

    const dynamicSubjects = [];
    createSceneSubjects();
    var theMissiles = [];

    var keyMap = [];

    var score = 0;
    var health = 3;
    var gameEnded = false;



    function buildScene() {
        const scene = new THREE.Scene();

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 

        renderer.setClearColor("#222222");
        renderer.setSize(width, height);

        return renderer;
    }

    function buildCamera({ width, height }) {

        const nearPlane = 1;
        const farPlane = 1000; 
        const camera = new THREE.OrthographicCamera(-width/2, width/2, height/2, -height/2, nearPlane, farPlane);
                
        camera.position.z = 10;

        return camera;
    }

    function createSceneSubjects() {
        theBackground = new Background(scene);
        theSpaceship  = new Spaceship(scene);
        theCoins = placeCoins(scene);
        theEnemies = placeEnemies(scene);

        dynamicSubjects.push(theSpaceship);
    }


    this.update = function() {
        if (camera.position.y < 2000 && health > 0) {
            camera.position.y += 1;

            for(let i=0; i<dynamicSubjects.length; i++)
                dynamicSubjects[i].update();            

            [theCoins, theEnemies, theMissiles, score, health] = checkCollisions(scene, theSpaceship, theCoins, theEnemies, theMissiles, score, health);

            theMissiles = destroyMissiles(scene, theMissiles);

            // Handling Inputs
            // ========================================
            theSpaceship.handleInput(keyMap, camera);
            if (keyMap[32]) {

                var x = theSpaceship.model.position.x;
                var y = theSpaceship.model.position.y + theSpaceship.height/2;

                const m = new Missile(scene, x, y);

                dynamicSubjects.push(m);
                theMissiles.push(m);
                keyMap[32] = false;
            }

            renderer.render(scene, camera);
        
        }
        else if (!gameEnded) {
            gameEnded = true;
            if (health > 0)
                document.getElementById("gameover").innerHTML = "GAME OVER"; 
            else
                document.getElementById("gameover").innerHTML = "YOU LOST"; 
        }

    }


    this.onWindowResize = function() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        renderer.setSize(width, height);

        camera.left = -width / 2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = -height / 2;
        camera.updateProjectionMatrix();      
    }

    this.handleInput = function(keyCode, isDown) {
        keyMap[keyCode] = isDown;
    }
}