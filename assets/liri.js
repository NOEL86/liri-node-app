console.log("stuffINeed");
var stuffINeed = require("./keys.js");
var request = require("request");
require("dotenv").config();

var argumentOne = process.argv[2]; //whatever command the user enters
var search = process.argv[3]; // the song, movie or # of popular tweets that is searched by the user


//this is the switch statement that decides which search function will run
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
    request("http://www.omdbapi.com/?t=Remember+The+Titans&y=&plot=short&type=movie&rating=G&apikey=AIzaSyB_p0WIpiO2nbmIL2MWja2NLh9oiBaJ5d4", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body));
        }
    })

};





// $.ajax({
//     url: `https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular`,
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



