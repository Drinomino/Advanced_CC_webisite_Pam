let my_capture;
let handPose;
let hands = []; // detected hands will be stored here
let handThreshold = 10; // how close can your mouse get to a shape

let enemies = []; // list of enemies
let spawnTimer = 1000;
let currentEnemies = 0;

let inc_value = 10;

let music

function preload(){
  handPose = ml5.handPose(); // loading hand pose model
  enemyImage = loadImage('toxicnew.png');
  soundFormats('mp3');
  music = loadSound('Suburban_Knight-The_Groove.mp3');

}

function setup() {
  createCanvas(635, 480);
  background("black");
  my_capture = createCapture(VIDEO);
  my_capture.hide();
  pixelDensity(1); // this turns off auto pixel scaling

  music.play();
  music.loop();//background music

  handPose.detectStart(my_capture, gotHands); // start models to look for hands
  
  // Create some enemies for testing
  // for (let i = 0; i < 6; i++) {
  //   enemies.push({
  //     x: random(0, 700),  // random X position
  //     y: random(-800, 500), // random Y position
  //     size: 50                    // enemy size
  //   });
  // }
}

function draw() {
  background("white");
  my_capture.loadPixels();

  // Camera filter effect
  for (let y = 0; y < my_capture.height; y += inc_value) {
    for (let x = 0; x < my_capture.width; x += inc_value) {
      let index = (x + y * my_capture.width) * 4;
      let r = my_capture.pixels[index + 0];
      let g = my_capture.pixels[index + 1];
      let b = my_capture.pixels[index + 2];
      let brightness = (r + b + g) / 3;

      fill(brightness < 100 ? "black" : "green");
      rect(x, y, 10);
    }
  }

  my_capture.updatePixels();

  for (let i = 0; i < .5; i++) {
    enemies.push({
      x: random(0, 700),  // random X position
      y: random(-800, 0), // random Y position
      size: 50                    // enemy size
    });
  }
  // Draw and check collision for all enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    let enemy = enemies[i];
    enemy.y += 1
   //fill("blue");
    image(enemyImage,enemy.x - enemy.size / 2, enemy.y - enemy.size / 2, enemy.size, enemy.size)
   //ellipse(enemy.x, enemy.y, enemy.size);

    // Check if any hand keypoint collides with the enemy
    for (let j = 0; j < hands.length; j++) {
      let hand = hands[j];
      let current_keypoints = hand.keypoints;
      for (let k = 0; k < current_keypoints.length; k++) {
        let keypoint = current_keypoints[k];
        
        // Check distance from keypoint to enemy
        let distToEnemy = dist(keypoint.x, keypoint.y, enemy.x, enemy.y);
        
        // If the distance is smaller than enemy size, consider it a collision
        if (distToEnemy < enemy.size / 2) {
          // Remove the enemy when collision happens
          enemies.splice(i, 1);
          break;
        }
      }
    }
  }

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let current_keypoints = hand.keypoints;

    for (let j = 0; j < current_keypoints.length; j++) {
      fill('red');
      square(current_keypoints[j].x, current_keypoints[j].y, 10);
    }
  }
}

function gotHands(results) {
  hands = results;
  // stores detected hands inside the hands array
}


