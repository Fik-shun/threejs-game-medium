# THREEJS GAME: Space Shooter

## STEP-5 : Adding Coins and Enemies

**Goal:** Making our game more fun by randomly placing coins and enemies.   

**Procedure:**  

- Create a new component in `Coin.js` where create a sphere, color it golden, position it and store its height/width.

- Now create a function `placeCoins` to **randomly** spread the coins all over the background plane and call this function inside `createSceneSubjects` method of SceneManager.

- Similarly, you may add the enemies and place them randomly. I've used `.gltf` model for enemy object and therefore linked GLTFLoader in `index.html`. Also _don't forget_ to link the new  js files :)

**Testing:**  

In order to test the application, run `python3 -m http.server` and head over to [localhost:8000](http://localhost:8000) in the  browser.

**Output:**

![Step-5 image](https://cdn-images-1.medium.com/max/800/1*8msbBtOvOOrHdyyd1QAEeA.png)