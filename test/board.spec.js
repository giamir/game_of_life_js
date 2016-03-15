describe('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  describe('#set', function() {
    it('generate a board (matrix) with a default number of cells', function() {
      board.set();
      expect(board.cells.length).toEqual(board.defaults.x * board.defaults.y);
    });
  });

});
