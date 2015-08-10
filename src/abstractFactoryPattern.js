var boyFriend = function() {
};

var baiheBoyFriend = new boyFriend();

var shijiBoyFriend = new boyFriend();

var marriageWebSite = function() {
    this.createBoyFriend = function () {
    };
};

var baiheWebSite = new marriageWebSite();
baiheWebSite.createBoyFriend = function () {
    return baiheBoyFriend;
};

var shijiWebSite = new marriageWebSite();
shijiWebSite.createBoyFriend = function() {
    return shijiBoyFriend;
};

module.exports = {
    "boyFriend": boyFriend,
    "baiheBoyFriend": baiheBoyFriend,
    "shijiBoyFriend": shijiBoyFriend,
    "marriageWebSite": marriageWebSite,
    "baiheWebSite": baiheWebSite,
    "shijiWebSite": shijiWebSite
};