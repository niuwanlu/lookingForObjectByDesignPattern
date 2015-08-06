var strategy = require('../src/strategyPattern');

describe("Strategy Pattern", function() {

    it("my strategy is finding by myself", function() {
        var myStrategy = strategy.myStrategy;
        expect(myStrategy.lookingForObject()).toBe("I found a boy friend by myself.");
    });

    it("my mother strategy is helping me", function() {
        var myMotherStrategy = strategy.myMotherStrategy;
        expect(myMotherStrategy.lookingForObject()).toBe("Mother helped me found a boy friend.")
    });

});