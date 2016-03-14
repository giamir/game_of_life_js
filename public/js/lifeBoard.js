function LifeBoard() {
  this.board = this.setBoard();
}

LifeBoard.prototype.setBoard = function() {
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

LifeBoard.prototype.step = function() {
  var nextLevelBoard = this.setBoard();
  for(var i=0; i<this.board.length; i++) {
    for(var j=0; j<this.board[i].length; j++) {
      nextLevelBoard[i][j] = this._nextLevelCellStatus(i, j);
    }
  }
  this.board = nextLevelBoard;
}

LifeBoard.prototype._nextLevelCellStatus = function(x, y) {
  var neighboursAlive = this._neighboursAliveCounter(x, y);
  if(neighboursAlive < 2 || neighboursAlive > 3) { return false; }
  if(neighboursAlive === 3) { return true; }
  return this.board[x][y];
}

LifeBoard.prototype._neighboursAliveCounter = function(x, y) {
  var neighboursAlive = 0;
  for(var i=x-1; i<=x+1; i++) {
    if(this.board[i] === undefined) { continue; }
    for(var j=y-1; j<=y+1; j++) {
      if(i === x && j === y) { continue; }
      if(this.board[i][j] !== undefined && this.board[i][j] === true) {
        neighboursAlive += 1;
      }
    }
  }
  return neighboursAlive;
}

LifeBoard.prototype.defaults = {
  xsize: 5,
  ysize: 3
}
