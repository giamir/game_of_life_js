describe('Cell', function() {
  var cell;
  var neighbourhoodMock;

  beforeEach(function() {
    neighbourhoodMock = jasmine.createSpyObj('neighbourhoodMock',
      ['isOverpopulated', 'isUnderpopulated', 'isFittedForReproduction']);
    var neighbourhoodKlassMock = function() { return neighbourhoodMock; }
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
    describe('when the cell is alive', function() {
      it('returns true', function() {
        cell.setAlive();
        expect(cell.isAlive()).toBe(true);
      });
    });
    describe('otherwise', function() {
      it('returns false', function() {
        cell.setDead();
        expect(cell.isAlive()).toBe(false);
      });
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
      expect(cell.neighbourhood).toEqual(neighbourhoodMock);
    });
  });

  describe('#determineNextLevelStatus', function() {
    beforeEach(function() {
      cell.setNeighbourhood();
    });
    describe('when the neighbourhood is fitted for reproduction', function() {
      it('set the nextLevelStatus property of the cell to alive', function() {
        neighbourhoodMock.isFittedForReproduction.and.returnValue(true);
        cell.determineNextLevelStatus();
        expect(cell.nextLevelStatus).toEqual('alive');
      });
    });
    describe('when the neighbourhood is overpopulated', function() {
      it('set the nextLevelStatus property of the cell to dead', function() {
        neighbourhoodMock.isOverpopulated.and.returnValue(true);
        cell.determineNextLevelStatus();
        expect(cell.nextLevelStatus).toEqual('dead');
      });
    });
    describe('when the neighbourhood is underpopulated', function() {
      it('set the nextLevelStatus property of the cell to dead', function() {
        neighbourhoodMock.isUnderpopulated.and.returnValue(true);
        cell.determineNextLevelStatus();
        expect(cell.nextLevelStatus).toEqual('dead');
      });
    });
  });

  describe('#levelUp', function() {
    it('sets the cell status to the next level cell status', function() {
      cell.setNeighbourhood();
      neighbourhoodMock.isFittedForReproduction.and.returnValue(true);
      cell.determineNextLevelStatus();
      cell.levelUp();
      expect(cell.isAlive()).toBe(true);
    });
  });

});
