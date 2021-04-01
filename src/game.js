class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  preload() {
    this.player.image = loadImage('assets/character-down.png')
    this.treasure.image = loadImage('assets/treasure.png')
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    for (let i = 0; i < 11; i++) {
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i)
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, WIDTH)
    }
  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
  }
  moveUp() {
    this.row -= SQUARE_SIDE
  }
  moveDown() {
    this.row += SQUARE_SIDE
  }
  moveLeft() {
    this.col -= SQUARE_SIDE
  }
  moveRight() {
    this.col += SQUARE_SIDE
  }
  draw() {

    this.col = constrain(this.col, 0, (WIDTH - SQUARE_SIDE))
    this.row = constrain(this.row, 0, (WIDTH - SQUARE_SIDE))
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    // if (keyIsDown(38)) {
    //   this.moveUp();
    // }
    // if (keyIsDown(40)) {
    //   this.moveDown();
    // }
    // if (keyIsDown(37)) {
    //   this.moveLeft();
    // }
    // if (keyIsDown(39)) {
    //   this.moveRight();
    // }
  }
}

class Treasure {
  constructor() {
    this.col = Math.floor(Math.random() * 10) * SQUARE_SIDE;
    this.row = Math.floor(Math.random() * 10) * SQUARE_SIDE;
    this.image;
  }

  drawTreasure() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)

    if (game.player.row === this.row && game.player.col === this.col) {
      this.col = Math.floor(Math.random() * 10) * SQUARE_SIDE;
      this.row = Math.floor(Math.random() * 10) * SQUARE_SIDE;
      score.innerText++
    }
  }
}