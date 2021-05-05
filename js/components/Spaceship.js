
function Spaceship(scene) {
	
	var modelLoader = new THREE.OBJLoader()

	const textureLoader = new THREE.TextureLoader()
	var texMap = textureLoader.load("../../assets/textures/spaceship.png")
	var modelMaterial = new THREE.MeshBasicMaterial({ map: texMap})


	this.model;
	this.height;
	this.width;

	modelLoader.load
		( 
			"../../assets/models/spaceship.obj", 
			( function(obj) {

				this.model = obj;
				this.model.traverse( function (child) {
						if ( child.isMesh ) {
							child.material = modelMaterial;
						}
					}
				)

				this.model.rotation.x = -Math.PI / 2;
				
				scene.add(this.model);

				var planeBndBox = new THREE.Box3().setFromObject(this.model);
				this.height = planeBndBox.getSize().y;
				this.width = planeBndBox.getSize().x;

			}).bind(this)
		);

	
	this.update = function() {
		if (this.model)
			this.model.position.y += 1;	
	}

	this.handleInput = function(keyMap, camera) {
		
		if (keyMap[87] && (this.model.position.y + this.height/2 < camera.position.y + camera.top)) {
			this.model.position.y += 5;
		}
		if (keyMap[83] && (this.model.position.y - this.height/2 > camera.position.y + camera.bottom)) {
			this.model.position.y -= 5;
		}
		if (keyMap[68] && (this.model.position.x + this.width/2 < camera.right)) {
			this.model.position.x += 5;			
		}
		if (keyMap[65] && (this.model.position.x - this.width/2 > camera.left)) {
			this.model.position.x -= 5;
		}
	}

}

