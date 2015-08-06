var strategy = function() {
    this.lookingForObject = function() {
    };
};

var myStrategy = new strategy();
myStrategy.lookingForObject = function() {
    return "I found a boy friend by myself.";
};

var myMotherStrategy = new strategy();
myMotherStrategy.lookingForObject = function() {
    return "Mother helped me found a boy friend.";
};

var girl = function() {
    this.strategy;

    this.setBoyFriendStrategy = function(newStrategy) {
        this.strategy = newStrategy;
    };

    this.findBoyFriend = function() {
        return this.strategy.lookingForObject();
    };

    this.breakUpWithBoyFriend = function () {
        console.log("I don't love you any more.");
    };
};

exports.myStrategy = myStrategy;
exports.myMotherStrategy = myMotherStrategy;
exports.girl = girl;