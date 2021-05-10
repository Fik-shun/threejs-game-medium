# THREEJS GAME: Space Shooter

## STEP-8 : Adding Scoreboard
 
**Goal:** Adding scoreboard at the top and a 'Game Over' / 'You Lost' message t the end.   

**Procedure:**  

- Simply add 2 _divs_ inside `index.html`: one for the scoreboard and other to display _'Game Over'_ or _'You Lost'_ and give them proper styling.

- After _**every collision**_, we  update our variables _score_ and _health_ and update the scoreboard _div_. When the _health_ of our spaceship falls to 0, we display - **You Lost** and when the camera reaches the end of our background, we'll display - **Game Over**.

**Testing:**  

In order to test the application, run `python3 -m http.server` and head over to [localhost:8000](http://localhost:8000) in the  browser.

**Output:**

![Step-8 image](https://cdn-images-1.medium.com/max/800/1*GFou7F2oM3e0PZ1lNEY6NA.png)