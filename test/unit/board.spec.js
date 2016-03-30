describe('Board', function() {
  var board;
  var cellMock;

  beforeEach(function() {
    cellMock = jasmine.createSpyObj('cell',
      ['setNeighbourhood', 'determineNextLevelStatus', 'levelUp']);
    var cellKlassMock = function(){ return cellMock; }
    board = new Board();
    board.cellKlass = cellKlassMock;
    board.set();
  });

  describe('#set', function() {
    it('generates a board (matrix) with a default number of cells', function() {
      expect(board.cells.length)
        .toBe(board.defaults.x * board.defaults.y);
    });
    it('generates the neighbourhood for every cells in the board', function() {
      expect(cellMock.setNeighbourhood.calls.count())
        .toBe(board.defaults.x * board.defaults.y);
    });
  });

  describe('#tick', function() {
    beforeEach(function() {
      board.tick();
    });
    it('determines the next level status for every cell in the board',
    function() {
      expect(cellMock.determineNextLevelStatus.calls.count())
        .toBe(board.cells.length);
    });
    it('levels up every cell in the board', function() {
      expect(cellMock.levelUp.calls.count())
        .toBe(board.cells.length);
    });
  });

});
