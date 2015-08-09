var singleton = function() {
    var myOnlyIdealLove;

    function createMyOnlyIdealLove() {
        myOnlyIdealLove = "High Rich Handsome!";
    }

    this.getMyOnlyIdealLove = function() {

        if(myOnlyIdealLove == undefined) {
            createMyOnlyIdealLove();
        }
        return myOnlyIdealLove;

    };

};

module.exports = {
    "singleton": singleton
};