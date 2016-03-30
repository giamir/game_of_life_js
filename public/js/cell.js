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

// LifeBoard.prototype._nextLevelCellStatus = function(x, y) {
//   var neighboursAlive = this._neighboursAliveCounter(x, y);
//   if(neighboursAlive < 2 || neighboursAlive > 3) { return false; }
//   if(neighboursAlive === 3) { return true; }
//   return this.board[x][y];
// }

// over-population
// under-population
// reproduction
