var singleton = function() {
    var myOnlyIdealLove = "High Rich Handsome!";

    this.getMyOnlyIdealLove = function() {
        return myOnlyIdealLove;
    };

};

module.exports = {
    "singleton": singleton
};