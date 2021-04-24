class Player {
  constructor(x, y, c) {
    this.r = 8;
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.c = c;
  }

  move(x, y) {
    this.vel.set(x, y);
    this.vel.mult(5);
    socket.emit("pos")
  }

  getData() {
    return {
      x: this.pos.x,
      y: this.pos.y
    };
  }

  setPos(x, y) {
    this.pos.set(x, y);
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    fill(this.c);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
