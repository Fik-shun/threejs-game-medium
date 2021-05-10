// Create a plane, add texture to it, position it and then add to the scene

function Background(scene, height) {
	
	var geometry = new THREE.PlaneGeometry(3000, 3000);
	
	const textureLoader = new THREE.TextureLoader();
	var material = new THREE.MeshBasicMaterial({ map: textureLoader.load("../../assets/textures/bg.png")});
	var bg = new THREE.Mesh(geometry, material);

	bg.rotation.z = -Math.PI / 2;
	bg.position.z = -900;
	bg.position.y = 1000;

	scene.add(bg)
	
	this.update = function() {
	
	}

}

