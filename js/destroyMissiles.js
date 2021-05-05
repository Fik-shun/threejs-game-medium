function destroyMissiles(scene, theMissiles) {

    var j = theMissiles.length;
    while (j--) {
        if (theMissiles[j].model && theMissiles[j].model.position.z < -2400) {
            scene.remove(theMissiles[j].model);
            theMissiles.splice(j, 1);
        }
    }

    return theMissiles;
}