function Cell(x, y) {
  this.status = 'dead';
  this.x = x;
  this.y = y;
}

Cell.prototype.isAlive = function() {
  return this.status === 'alive';
}

Cell.prototype.setAlive = function(x, y) {
  this.status = 'alive';
}

Cell.prototype.setDead = function(x, y) {
  this.status = 'dead';
}
