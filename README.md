# THREEJS GAME: Space Shooter

## STEP-1 : Initialisation

**Goal:** Moving our scene, and therefore moving the camera and the spaceship upwards with a constant speed(till the background lasts).

**Procedure:**  

- Inside the update function of `Spaceship.js`, translate the spaceship along y-axis with constant speed.

- Similarly translate the camera along y-axis with the same constant speed. Also call the update method of the dynamicSubjects every frame. 

**Testing:**  

In order to test the application, run `python3 -m http.server` and head over to [localhost:8000](http://localhost:8000) in the  browser.

**Output:**

![Step-3 image](https://cdn-images-1.medium.com/max/800/1*z1v9p3vGhEYMvKoLOwsOsA.gif)