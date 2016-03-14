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

LifeBoard.prototype.makeRandom = function() {
  for(var i=0; i<this.board.length; i++) {
    for(var j=0; j<this.board[i].length; j++) {
      this.board[i][j] = Math.random() < 0.5;
    }
  }
}

LifeBoard.prototype.defaults = {
  xsize: 10,
  ysize: 5
}
