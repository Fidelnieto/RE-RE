function Vehicle(speed) {
  this.speed = speed;
  this.moveFoward = function () {
    return `Moving foward at ${this.speed}`;
  };
}
