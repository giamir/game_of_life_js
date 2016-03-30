describe('Neighbourhood', function() {
  var neighbourhood;
  var centerCellMock;
  var neighbourCellMock;
  var noNeighbourCellMock;

  beforeEach(function() {
    centerCellMock = jasmine.createSpyObj('centerCell', ['isAlive']);
    centerCellMock.x = 0; centerCellMock.y = 0;

    neighbourCellMock = jasmine.createSpyObj('cell', ['isAlive']);
    neighbourCellMock.x = 1; neighbourCellMock.y = 1;
    neighbourCellMock.isAlive.and.callFake(function() { return true; });

    noNeighbourCellMock = jasmine.createSpyObj('cell', ['isAlive']);
    noNeighbourCellMock.x = 2; noNeighbourCellMock.y = 0;
    noNeighbourCellMock.isAlive.and.callFake(function() { return false; });

    var cellsMock = [centerCellMock, neighbourCellMock, noNeighbourCellMock];
    neighbourhood = new Neighbourhood(cellsMock, centerCellMock);
  });

  describe('#getNeighbours', function() {
    describe('returns an array', function() {
      var neighbours;
      beforeEach(function() {
        neighbours = neighbourhood.getNeighbours();
      });
      it('does not include the center cell', function() {
        expect(neighbours).not.toContain(centerCellMock);
      });
      it('includes neighbour cells', function() {
        expect(neighbours).toContain(neighbourCellMock);
      });
      it('does not include no neighbour cells', function() {
        expect(neighbours).not.toContain(noNeighbourCellMock);
      });
    });
  });

  describe('#countLivingNeighbours', function() {
    it('counts the living cells in the neighbourhood', function() {
      expect(neighbourhood.countLivingNeighbours()).toEqual(1);
    });
  });

  describe('#isOverpopulated', function() {
    it('returns true if the living cells in the neighbourhood are more than 3',
    function() {
      expect(neighbourhood.isOverpopulated()).toBe(false);
    });
  });

  describe('#isUnderpopulated', function() {
    it('returns true if the living cells in the neighbourhood are less than 2',
    function() {
      expect(neighbourhood.isUnderpopulated()).toBe(true);
    });
  });

  describe('#isFittedForReproduction', function() {
    it('returns true if the living cells in the neighbourhood are exactly 3',
    function() {
      expect(neighbourhood.isFittedForReproduction()).toBe(false);
    });
  });

});
