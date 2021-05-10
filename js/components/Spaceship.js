
function Spaceship(scene) {
	
	var modelLoader = new THREE.OBJLoader();

	const textureLoader = new THREE.TextureLoader();
	var texMap = textureLoader.load("../../assets/textures/spaceship.png");
	var modelMaterial = new THREE.MeshBasicMaterial({ map: texMap});


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
				);

				this.model.rotation.x = -Math.PI / 2;
				
				scene.add(this.model);

				var planeBndBox = new THREE.Box3().setFromObject(this.model);
				this.height = planeBndBox.getSize().y;
				this.width = planeBndBox.getSize().x;

			}).bind(this)
		);

	
	this.update = function() {

	}

}

