function Neighbourhood(cells, centerCell) {
  this.cells = cells;
  this.centerCell = centerCell;
}

Neighbourhood.prototype.countLivingNeighbours = function() {
  return this.getNeighbours().reduce(function(acc, cell){
    return cell.isAlive() ? acc + 1 : acc;
  }, 0);
}

Neighbourhood.prototype.getNeighbours = function() {
  return this.cells.filter(this._findNeighboursFilter, this);
}

Neighbourhood.prototype.isOverpopulated = function() {
  return this.countLivingNeighbours() > 3;
}

Neighbourhood.prototype.isUnderpopulated = function() {
  return this.countLivingNeighbours() < 2;
}

Neighbourhood.prototype.isFittedForReproduction = function() {
  return this.countLivingNeighbours() === 3;
}

Neighbourhood.prototype._findNeighboursFilter = function(cell) {
  return cell !== this.centerCell &&
         cell.x >= this.centerCell.x - 1 &&
         cell.x <= this.centerCell.x + 1 &&
         cell.y >= this.centerCell.y - 1 &&
         cell.y <= this.centerCell.y + 1;
}
