function Cell() {
  this.status = 'dead';
}

Cell.prototype.isAlive = function() {
  return this.status === 'alive';
}

Cell.prototype.setCoords = function(x, y) {
  this.x = x;
  this.y = y;
}

Cell.prototype.setAlive = function(x, y) {
  this.status = 'alive';
}

Cell.prototype.setDead = function(x, y) {
  this.status = 'dead';
}
