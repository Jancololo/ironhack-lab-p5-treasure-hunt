const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
  game.treasure.drawTreasure();
}

function preload() {
  game.preload();
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if (keyCode === 39) {
    game.player.moveRight();
  }
}

function reGame() {
  if (game.player.row === game.treasure.row && game.player.col === game.treasure.col) {
    const game = new Game();
    score++
  }
}