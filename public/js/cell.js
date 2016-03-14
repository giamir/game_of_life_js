function Cell() {
  this.status = false;
}

Cell.prototype.isAlive = function() {
  return this.status;
}

Cell.prototype.setCoords = function(x, y) {
  this.x = x;
  this.y = y;
}
