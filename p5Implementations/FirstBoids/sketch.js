const flock = [] // a flock array --maybe make into a class later

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(900, 800);

  alignSlider = createSlider(0,5, 1, 0.1);
  cohesionSlider = createSlider(0,3, 1, 0.01);
  separationSlider = createSlider(0,5, 1, 0.1);

  for (let i =0; i < 200; i++) // make 100 boids
  flock.push(new Boid());
}

function draw() {
  background(110);

  for (let boid of flock) { //for every boid in the flock
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}
