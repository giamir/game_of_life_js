describe('Neighbourhood', function() {
  var neighbourhood;
  var centerCellMock;
  var neighbourCellMock;
  var noNeighbourCellMock;

  beforeEach(function() {
    centerCellMock = jasmine.createSpy('centerCell');
    centerCellMock.x = 0; centerCellMock.y = 0;

    neighbourCellMock = jasmine.createSpy('cell');
    neighbourCellMock.x = 1; neighbourCellMock.y = 1;

    noNeighbourCellMock = jasmine.createSpy('cell');
    noNeighbourCellMock.x = 2; noNeighbourCellMock.y = 0;

    var cellsMock = [centerCellMock, neighbourCellMock, noNeighbourCellMock];
    neighbourhood = new Neighbourhood(cellsMock, centerCellMock);
  });

  describe('#around', function() {
    describe('returns an array', function() {
      it('does not include the center cell', function() {
        var neighbours = neighbourhood.around();
        expect(neighbours).not.toContain(centerCellMock);
      });
      it('includes neighbour cells', function() {
        var neighbours = neighbourhood.around();
        expect(neighbours).toContain(neighbourCellMock);
      });
      it('does not include no neighbour cells', function() {
        var neighbours = neighbourhood.around();
        expect(neighbours).not.toContain(noNeighbourCellMock);
      });
    });
  });

});
