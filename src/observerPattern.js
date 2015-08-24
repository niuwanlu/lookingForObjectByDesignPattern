var girl = function() {
    this.myFriends = [];

    this.friendsAmount = function() {
        return this.myFriends.length;
    };

    this.addFriend = function(friend) {
        this.myFriends.push(friend);
    };

    this.removeFriend = function(friend) {
        var index = this.myFriends.indexOf(friend);
        if(index > -1) {
            this.myFriends.splice(index, 1);
        }
    };

    this.notifyFriendsThereAreBoys = function() {
        console.log("There is a new boy.");
        for(var i=0; i<this.myFriends.length; i++) {
            this.myFriends[i].onNotify();
        }
    };
};

var friend = function() {
    this.onNotify = function() {
        console.log("I'm coming.");
    };
};

module.exports = {
    "girl" : girl,
    "friend" : friend
};

