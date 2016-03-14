describe('LifeBoard', function() {
  var lifeBoard;

  beforeEach(function() {
    lifeBoard = new LifeBoard();
  });

  describe('#set', function() {
    var board;
    beforeEach(function() {
      board = lifeBoard.setBoard();
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

  describe('#makeRandom', function() {
    it('populate the board (matrix) randomly', function() {
      spyOn(Math, 'random').and.returnValue(0.4);
      lifeBoard.makeRandom();
      expect(lifeBoard.board[0]).toContain(true);
      expect(lifeBoard.board[0]).not.toContain(false);
    });
  });

  describe('#step', function() {
    describe('cell with fewer than two live neighbours', function() {
        it('dies by under-population', function() {
        lifeBoard.board[0][0] = true;
        lifeBoard.board[0][1] = true;
        lifeBoard.step();
        expect(lifeBoard.board[0][0]).toEqual(false);
      });
    });
    describe('cell with two or three live neighbours', function() {
        it('lives on the next generation', function() {
        lifeBoard.board[0][0] = true;
        lifeBoard.board[0][1] = true;
        lifeBoard.board[1][0] = true;
        lifeBoard.step();
        expect(lifeBoard.board[0][0]).toEqual(true);
      });
    });
    describe('cell with more than three live neighbours', function() {
        it('dies by over-population', function() {
        lifeBoard.board[0][0] = true;
        lifeBoard.board[0][1] = true;
        lifeBoard.board[0][2] = true;
        lifeBoard.board[1][0] = true;
        lifeBoard.board[1][1] = true;
        lifeBoard.step();
        expect(lifeBoard.board[1][1]).toEqual(false);
      });
    });
    describe('dead cell with exactly three live neighbours', function() {
        it('becomes a live cell by reproduction', function() {
        lifeBoard.board[0][0] = true;
        lifeBoard.board[1][0] = true;
        lifeBoard.board[0][1] = true;
        lifeBoard.step();
        expect(lifeBoard.board[1][1]).toEqual(true);
      });
    });
  });
});
