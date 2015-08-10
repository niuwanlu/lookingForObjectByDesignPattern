var abstractFactory = require('../src/abstractFactoryPattern.js');

describe('Abstract Factory Pattern', function() {

    it('baiheBoyFriend and shijiBoyFriend should be instances of BoyFriend', function() {
        var boyFriend = abstractFactory.boyFriend;
        var baiheBoyFriend = abstractFactory.baiheBoyFriend;
        var shijiBoyFriend = abstractFactory.shijiBoyFriend;
        expect(baiheBoyFriend instanceof boyFriend).toBe(true);
    })
});