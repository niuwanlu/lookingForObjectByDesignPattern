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


exports.myStrategy = myStrategy;
exports.myMotherStrategy = myMotherStrategy;