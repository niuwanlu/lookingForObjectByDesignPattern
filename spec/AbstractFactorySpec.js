var abstractFactory = require('../src/abstractFactoryPattern.js');

describe('Abstract Factory Pattern', function() {

    it('baiheBoyFriend and shijiBoyFriend should be instances of BoyFriend', function() {
        var boyFriend = abstractFactory.boyFriend;
        var baiheBoyFriend = abstractFactory.baiheBoyFriend;
        var shijiBoyFriend = abstractFactory.shijiBoyFriend;
        expect(baiheBoyFriend instanceof boyFriend).toBe(true);
        expect(shijiBoyFriend instanceof boyFriend).toBe(true);
    });

    it('baiheWebSite and shijiWebSite should be instances of marriageWebSite', function () {
        var marriageWebSite = abstractFactory.marriageWebSite;
        var baiheWebSite = abstractFactory.baiheWebSite;
        var shijiWebSite = abstractFactory.shijiWebSite;
        expect(baiheWebSite instanceof marriageWebSite).toBe(true);
        expect(shijiWebSite instanceof marriageWebSite).toBe(true);
    });

    it('baiheWebSite should get baiheBoyFriend', function() {
        var baiheBoyFriend = abstractFactory.baiheBoyFriend;
        var baiheWebSite = abstractFactory.baiheWebSite;
        expect(baiheWebSite.createBoyFriend()).toBe(baiheBoyFriend);
    });

    it('shijiWebSite should get shijiBoyFriend', function() {
        var shijiBoyFriend = abstractFactory.shijiBoyFriend;
        var shijiWebSite = abstractFactory.shijiWebSite;
        expect(shijiWebSite.createBoyFriend()).toBe(shijiBoyFriend);
    });

});