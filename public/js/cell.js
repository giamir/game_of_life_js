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

Cell.prototype.determineNextLevelStatus = function() {
  if (this._isGoingToDie()) { this.nextLevelStatus = 'dead'; }
  if (this._isGoingToReproduce()) { this.nextLevelStatus = 'alive'; }
}

Cell.prototype.levelUp = function() {
  this.status = this.nextLevelStatus;
}

Cell.prototype._isGoingToDie = function() {
  return this.neighbourhood.isOverpopulated() ||
         this.neighbourhood.isUnderpopulated();
}

Cell.prototype._isGoingToReproduce = function() {
  return this.neighbourhood.isFittedForReproduction();
}
