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

            checkCollisions();

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

    function checkCollisions() {

        var i = theCoins.length;
        while (i--) {
            if (isCollision(theSpaceship, theCoins[i])) {
                score += 1;
                scene.remove(theCoins[i].model);
                theCoins.splice(i, 1);
                document.getElementById("scoreboard").innerHTML = "HEALTH: " + health + " &emsp; SCORE: " + score; 
            } 
        }

        var i = theEnemies.length;
        while (i--) {
            if (isCollision(theSpaceship, theEnemies[i])) {
                health -= 1;
                scene.remove(theEnemies[i].model);
                theEnemies.splice(i, 1);
                document.getElementById("scoreboard").innerHTML = "HEALTH: " + health + " &emsp; SCORE: " + score; 
            }

            var j = theMissiles.length;
            while (j--) {
                if (isCollision(theMissiles[j], theEnemies[i])) {
                    score += 2;
                    scene.remove(theEnemies[i].model);
                    theEnemies.splice(i, 1);
                    scene.remove(theMissiles[j].model);
                    theMissiles.splice(j, 1);
                    document.getElementById("scoreboard").innerHTML = "HEALTH: " + health + " &emsp; SCORE: " + score; 
                } 
            }
        }
    }

    function isCollision(m1, m2) {

        if (m1.model && m2.model) {
            minX1 = m1.model.position.x - (m1.width/2);
            maxX1 = m1.model.position.x + (m1.width/2);
            minY1 = m1.model.position.y - (m1.height/2);
            maxY1 = m1.model.position.y + (m1.height/2);

            minX2 = m2.model.position.x - (m2.width/2);
            maxX2 = m2.model.position.x + (m2.width/2);
            minY2 = m2.model.position.y - (m2.height/2);
            maxY2 = m2.model.position.y + (m2.height/2);

            if (minX1 <= maxX2 && maxX1 >= minX2 && minY1 <= maxY2 && maxY1 >= minY2)
                return true;
            else
                return false;
        }
        else
            return false;

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