function Cell(x, y) {
  this.neighbourhoodKlass = Neighbourhood;
  this.status = 'dead';
  this.x = x;
  this.y = y;
}

Cell.prototype.isAlive = function() {
  return this.status === 'alive';
}

Cell.prototype.setAlive = function() {
  this.status = 'alive';
}

Cell.prototype.setDead = function() {
  this.status = 'dead';
}

Cell.prototype.setNeighbourhood = function(cells) {
  this.neighbourhood = new this.neighbourhoodKlass(cells, this);
}
