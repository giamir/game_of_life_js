function LifeBoard() {
  this.board = this.set();
}

LifeBoard.prototype.set = function() {
  var board = [];
  for(var i=0; i<this.defaults.xsize; i++) {
      board[i] = Array.apply(null, { length: this.defaults.ysize })
      .map(function() { return  false; });
  }
  return board;
}

LifeBoard.prototype.defaults = {
  xsize: 10,
  ysize: 5
}
