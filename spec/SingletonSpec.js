var singletonFile = require('../src/singletonPattern.js');

describe("Singleton Pattern", function() {

    it('should get the instance', function() {
        var singleton = singletonFile.singleton;
        expect(singleton.getMyOnlyIdealLove().myLove).toBe("High Rich Handsome!");
    });

    it('should be the same instance', function() {
        var singletonLoveOne = singletonFile.singleton;
        var singletonLoveTwo = singletonFile.singleton;
        var isSame = (singletonLoveOne.getMyOnlyIdealLove() == singletonLoveTwo.getMyOnlyIdealLove());
        expect(isSame).toBe(true);
    })

});