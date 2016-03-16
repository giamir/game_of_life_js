function Neighbourhood(cells, centerCell) {
  this.cells = cells;
  this.centerCell = centerCell;
}

Neighbourhood.prototype.around = function() {
  return this.cells.filter(this._findNeighboursFilter, this);
}

Neighbourhood.prototype._findNeighboursFilter = function(cell) {
  return cell !== this.centerCell &&
         cell.x >= this.centerCell.x - 1 &&
         cell.x <= this.centerCell.x + 1 &&
         cell.y >= this.centerCell.y - 1 &&
         cell.y <= this.centerCell.y + 1;
}
