var singletonFile = require('../src/singletonPattern.js');

describe("Singleton Pattern", function() {

    it('should get the instance', function() {
        var singleton = new singletonFile.singleton;
        expect(singleton.getMyOnlyIdealLove()).toBe("High Rich Handsome!");
    });

    it('should be the same instance', function() {
        var singletonLoveOne = new singletonFile.singleton;
        var singletonLoveTwo = new singletonFile.singleton;
        var isSame = (singletonLoveOne.getMyOnlyIdealLove() == singletonLoveTwo.getMyOnlyIdealLove());
        expect(isSame).toBe(true);
    })

});