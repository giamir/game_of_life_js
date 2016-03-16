function Board() {
  this.cellKlass = Cell;
  this.cells = [];
}

Board.prototype.set = function() {
  for(var i=0; i<this.defaults.x; i++) {
    for(var j=0; j<this.defaults.y; j++) {
      var cell = new this.cellKlass(i, j);
      this.cells.push(cell);
    }
  }
  this.cells.map(function(cell) { cell.setNeighbourhood(this.cells); }, this);
}

Board.prototype.defaults = {
  x: 3,
  y: 3
}
