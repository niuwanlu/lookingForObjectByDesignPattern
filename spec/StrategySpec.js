var generator = require('../src/strategyPattern');

describe("Strategy Pattern", function() {

    it("returns the correct number of Hello Worlds", function() {
        var result = generator.generateHelloWorld(3);
        expect(result.length).toBe(3);
    });

});