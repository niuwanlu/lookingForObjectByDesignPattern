var singleton = (function() {
    var myOnlyIdealLove;

    function createMyOnlyIdealLove() {
        myOnlyIdealLove = new Object({"myLove" : "High Rich Handsome!"});
    }

    return {
        getMyOnlyIdealLove: function () {

            if (myOnlyIdealLove == undefined) {
                createMyOnlyIdealLove();
            }
            return myOnlyIdealLove;

        }
    }

})();

module.exports = {
    "singleton": singleton
};