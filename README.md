# THREEJS GAME: Space Shooter

## STEP-4 : Controlling our Spaceship

**Goal:** Handling input to move spaceship through the space.

**Procedure:**  

- Inside `main.js`, we'll add _event listeners_ for `window.onkeydown` & `window.onkeyup` and call the `handleInput` method of SceneManager.

- Inside `SceneManager.js`, we'll maintain a keyMap that stores status of each key(_true_ if pressed else _false_) which would be sent to  our spaceship's `handleInput` method in update. We'll be  updating the keyMap in SceneManager's `handleInput` method.

- Finally, we'll map the keys _W,S,A,D_ to translate the spaceship in the corresponding direction while making sure that it doesn't go out of bounds. 

**Testing:**  

In order to test the application, run `python3 -m http.server` and head over to [localhost:8000](http://localhost:8000) in the  browser.

**Output:**

![Step-4 image](https://cdn-images-1.medium.com/max/800/1*xuwsdxkCp1yxTix1uronfQ.gif)
