function Board() {
  this.cellKlass = Cell;
  this.cells = [];
}

Board.prototype.set = function() {
  this._generateCells();
  this._generateCellsNeigbourhoods();
}

Board.prototype.tick = function() {
  this.cells.map(function(cell) { cell.determineNextLevelStatus(); });
  this.cells.map(function(cell) { cell.levelUp(); });
}

Board.prototype._addCell = function(x, y) {
  this.cells.push(new this.cellKlass(x, y));
}

Board.prototype._generateCells = function() {
  for(var x=0; x<this.defaults.x; x++) {
    for(var y=0; y<this.defaults.y; y++) { this._addCell(x, y); }
  }
}

Board.prototype._generateCellsNeigbourhoods = function() {
  this.cells.map(function(cell) {
    cell.setNeighbourhood(this.cells);
  }, this);
}

Board.prototype.defaults = {
  x: 3,
  y: 3
}
