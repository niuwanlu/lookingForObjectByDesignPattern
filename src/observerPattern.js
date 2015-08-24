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
};

var friend = function() {

};

module.exports = {
    "girl" : girl,
    "friend" : friend
};

