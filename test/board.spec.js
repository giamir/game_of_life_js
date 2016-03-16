describe('Board', function() {
  var board;
  var cellMock;
  var cellKlassMock;

  beforeEach(function() {
    cellMock = jasmine.createSpyObj('cell', ['setNeighbourhood']);
    cellKlassMock = function(){ return cellMock; }
    board = new Board();
    board.cellKlass = cellKlassMock;
  });

  describe('#set', function() {
    it('generates a board (matrix) with a default number of cells', function() {
      board.set();
      expect(board.cells.length)
      .toBe(board.defaults.x * board.defaults.y);
    });
    it('generates the neighbourhood for every cells in the board', function() {
      board.set();
      expect(cellMock.setNeighbourhood.calls.count())
      .toBe(board.defaults.x * board.defaults.y);
    });
  });

});
