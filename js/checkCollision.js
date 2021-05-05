function checkCollisions(scene, theSpaceship, theCoins, theEnemies, theMissiles, score, health) {

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

    return [theCoins, theEnemies, theMissiles, score, health];
    
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