describe('LifeBoard', function() {
  var lifeBoard;

  beforeEach(function() {
    lifeBoard = new LifeBoard();
  });

  describe('#set', function() {
    var board;
    beforeEach(function() {
      board = lifeBoard.set();
    });
    it('returns a board (matrix) with a default x and y size', function() {
      expect(board.length).toEqual(lifeBoard.defaults.xsize);
      expect(board[0].length).toEqual(lifeBoard.defaults.ysize);
    });
    it('set the value of every cell on the board to false (dead)', function() {
      expect(board[0]).toContain(false);
      expect(board[0]).not.toContain(true);
    });
  });
});
