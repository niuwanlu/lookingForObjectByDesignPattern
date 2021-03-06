var observer = require('../src/observerPattern.js');

describe('Observer Pattern', function() {

    it('girl could add friend', function() {
        var girl = new observer.girl();
        var friend = new observer.friend();
        girl.addFriend(friend);
        expect(girl.friendsAmount()).toBe(1);
    });

    it('girl could remove friend', function () {
        var girl = new observer.girl();
        var friend = new observer.friend();
        girl.addFriend(friend);
        girl.removeFriend(friend);
        expect(girl.friendsAmount()).toBe(0);
    });

    it('girl could notify firends there are boy friends resource', function() {
        var girl = new observer.girl();
        var friend = new observer.friend();
        girl.addFriend(friend);
        spyOn(friend, 'onNotify');
        girl.notifyFriendsThereAreBoys();
        expect(friend.onNotify).toHaveBeenCalled();
    });

    it('when find new boy friends resource notify friends', function () {
        var girl = new observer.girl();
        spyOn(girl, 'notifyFriendsThereAreBoys');
        girl.findNewBoyFriendsResource();
        expect(girl.notifyFriendsThereAreBoys).toHaveBeenCalled();
    });

});