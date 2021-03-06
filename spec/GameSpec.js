describe("Game of life", function() {
  var cell, board;

  beforeEach(function() {
    cell = new Cell();
    board = new Board();
    timer = new Timer();
    
  });

  it("should be able to generate a board", function() {
    expect(typeof board == 'undefined').toBe(false);
  });
 
  it("should be able to generate a timer", function() {
    expect(typeof timer == 'undefined').toBe(false);
  });

  describe("A game board", function(){
    it("should have a height property", function(){
      expect(board.hasOwnProperty("height")).toBe(true);
    })
    describe("the height property", function(){
    it("should be an integer", function(){
      expect(typeof board.height).toBe("number");
      expect(typeof board.height).not.toBe("string");
    })
  });
  });

  describe("A cell", function(){
    it("should have an x coordinate", function(){
      expect(cell.hasOwnProperty("x")).toBe(true);
    })
    it("should have an y coordinate", function(){
      expect(cell.hasOwnProperty("y")).toBe(true);
    })
    it("should have an alive or dead state", function(){
      expect(cell.hasOwnProperty("alive")).toBe(true);
      expect(cell.state).not.toBe(null);
    })
  });

  describe("A timer", function(){
    it("should have counter", function(){
      expect(timer.hasOwnProperty("counter")).toBe(true);
      })
    it("should have a method to increment the timer", function(){
      expect(timer.incrementTimer).not.toBeUndefined();
    })
    describe("method to increment the timer", function(){
      it("should add one to the timerCounter every execution", function(){
        timer.incrementTimer();
        expect(timer.counter).toBe(1);
        timer.incrementTimer();
        expect(timer.counter).toBe(2);
        timer.incrementTimer();
        expect(timer.counter).not.toBe(4);
      })

    });
    
  });
});
