describe('Cell', function() {
  var cell;

  beforeEach(function() {
    cell = new Cell();
  });

  describe('#isAlive', function() {
    it('returns the current status of the cell', function() {
      expect(cell.isAlive()).toBe(false);
    });
  });

  describe('#setCoords', function() {
    beforeEach(function() {
      cell.setCoords(0, 0);
    });
    it('sets x coord for the cell', function() {
      expect(cell.x).toEqual(0);
    });
    it('sets y coord for the cell', function() {
      expect(cell.y).toEqual(0);
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

});
