# THREEJS GAME: Space Shooter

## STEP-2 : Adding Scene Subjects

**Goal:** Adding a decent background and the Spaceship to the game.

**Procedure:**  

- Create the file `Background.js` and create a Plane(that will act as background) and add texture(image) to it. Position the plane such that its lower-end touches the bottom of the browser window and therefore translate it along y-axis by `(3000-window.height)/2`.

- Next for Spaceship, download a free 3D model from the internet (sketchfab, cgtrader, etc.) and store it inside `assets/`. Inside `Spaceship.js`, load the model, add texture to it and store its dimensions. For loading models, link the loader for the model extension _separately_ in `index.html` (i've linked OBJLoader for my `.obj` model).

- Inside `SceneManager.js`, create a new method `createSceneSubjects` that initializes the objects (background and spaceship). Also maintain an array of dynamic subjects(those needed to be updated every frame).

**Testing:**  

In order to test the application, run `python3 -m http.server` and head over to [localhost:8000](http://localhost:8000) in the  browser.

**Output:**

![Step-2 image](https://cdn-images-1.medium.com/max/800/1*TfW9H84cWvTMv4jT8uLR0w.png)