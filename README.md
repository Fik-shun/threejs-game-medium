# THREEJS GAME: Space Shooter

## STEP-1 : Initialisation

**Goal:** Organizing our directory structure and creating a boilerplate that would be helpful for your future Three.js projects.   

**Procedure:**  

- First of all, create an `index.html` file. This will be the _entry point of our webpage/game_. It is basically a blank HTML page with a canvas element, and links the Three.js library and other js files. Whenever we create a new js file, we'll come back to `index.html` and link it here.

- Next create `main.js`, which is the _entry point to the JavaScript side_ of the application and has access to the DOM and contains SceneManager.

- And finally create `SceneManager.js` which is _responsible for handling the Three.js side_ of the app, which is completely hidden from the main. It knows nothing about the DOM and creates the Scene, Renderer and Ortho-Camera. Since this is a 2D game, I've used an Ortho-Camera. 

**Testing:**  

In order to test the application, run `python3 -m http.server` and head over to [localhost:8000](http://localhost:8000) in the  browser.

**Output:**

![Step-1 image](https://cdn-images-1.medium.com/max/800/1*Wpr5KZdG0Mvl7OW5xAuXmA.png)