var girl = function() {
    this.myFriends = [];

    this.friendsAmount = function() {
        return this.myFriends.length;
    };

    this.addFriend = function(friend) {
        this.myFriends.push(friend);
    };
};

var friend = function() {

};

module.exports = {
    "girl" : girl,
    "friend" : friend
};

