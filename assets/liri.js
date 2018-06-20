console.log("stuffINeed");
var stuffINeed = require("./keys.js");

require("dotenv").config();

var argumentOne = process.argv[2];
var argumentTwo = process.argv[3];

switch (argumentOne) {
    case "spotify-this-song":
        spotify();
        break;

    case "tweet-this":
        twitter();
        break;

    case "omdb-this-movie":
        movie();
        break;

    default:
        console.log("liri does not understand your command");
};

function spotify() {

}

function twitter() {
    Twitter.prototype.get = function (url, params, callback) {
        return this.__request('get', url, params, callback);
    };

}

function movie() {

}





// $.ajax({
//     url: `https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular`,
//     method: "GET"
// }).then(function (response) {
//     console.log(response)
// });

// $.ajax({
//     url: `http://www.omdbapi.com/?t=${movie}&y=&plot=short&type=movie&rating=G`,
//     method: "GET"
// }).then(function (response) {
//     console.log(response)
// });

// $.ajax({
//     url: `https://api.spotify.com/v1/search&q=${song}`,
//     method: "GET"
// }).then(function (response) {
//     console.log(response)
// });



