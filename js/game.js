var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  keys: {
    TOP_KEY: 38,
    SPACE: 32
  },

  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    //ScoreBoard.init(this.ctx);

    this.start();
  },

  start: function() {
    this.fps = 60;

    this.reset();

    this.interval = setInterval(() => {
      this.clear();

      this.framesCounter++;

      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      // controlamos la velocidad de generación de obstáculos
      if (this.framesCounter % 50 === 0) {
        this.generateObstacle();
      }

      //this.moveAll();
      this.drawAll();

    }, 1000 / this.fps);
  },

  stop: function() {
    clearInterval(this.interval);
  },

  reset: function() {
    this.background = new Background(this.canvas.width, this.canvas.height, this.ctx);
    // this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
    // this.scoreBoard = ScoreBoard;
    // this.framesCounter = 0;
    // this.obstacles = [];
    // this.score = 0;
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  
  drawAll: function() {
    this.background.draw();
  }
}