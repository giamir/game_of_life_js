describe('Cell', function() {
  var cell;
  var neighbourhoodKlassMock;

  beforeEach(function() {
    neighbourhoodKlassMock = jasmine.createSpy('neighbourhoodKlassMock');
    cell = new Cell();
    cell.neighbourhoodKlass = neighbourhoodKlassMock;
  });

  describe('#initialize', function() {
    beforeEach(function() {
      cell = new Cell(0, 0)
    });
    it('sets x coord for the cell', function() {
      expect(cell.x).toEqual(0);
    });
    it('sets y coord for the cell', function() {
      expect(cell.y).toEqual(0);
    });
  });

  describe('#isAlive', function() {
    it('returns the current status of the cell', function() {
      expect(cell.isAlive()).toBe(false);
    });
  });

  describe('#setAlive', function() {
    it('sets the cell status to alive', function() {
      cell.setAlive();
      expect(cell.isAlive()).toBe(true);
    });
  });

  describe('#setDead', function() {
    it('sets the cell status to dead', function() {
      cell.setDead();
      expect(cell.isAlive()).toBe(false);
    });
  });

  describe('#setNeighbourhood', function() {
    it('sets the neigbourhood for the cell', function() {
      cell.setNeighbourhood();
      expect(neighbourhoodKlassMock).toHaveBeenCalled();
    });
  });

});
