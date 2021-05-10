# THREEJS GAME: Space Shooter

## STEP-7 : Collision Detection

**Goal:** Adding Collision detection to our game, so that the spaceship collects coins, missiles kill the opps and spaceship's health decreases on colliding with the enemies. 

**Procedure:**  

- We need to check for collision in _every frame_, and so  let's create a function `checkCollsions` and call it in the update method. The `isCollision` function below would determine intersection between two models using their positions and dimensions.

**Testing:**  

In order to test the application, run `python3 -m http.server` and head over to [localhost:8000](http://localhost:8000) in the  browser.

**Output:**

![Step-7 image](https://cdn-images-1.medium.com/max/800/1*UDamEx44vbmac7WlmEMcDA.gif)