var singletonFile = require('../src/singletonPattern.js');

describe("Singleton Pattern", function() {

    it('should get the instance', function() {
        var singleton = new singletonFile.singleton();
        expect(singleton.getMyOnlyIdealLove()).toBe("High Rich Handsome!");
    });

});