
// 10. Make it so liri.js can take in one of the following commands:

//     * `spotify-this-song`

//     * `movie-this`
var stuffINeed = require("./keys.js");
var song = "";
var movie = "";
var tweets = 0;
require("dotenv").config();


$.ajax({
    url: `https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular`,
    method: "GET"
}).then(function (response) {
    console.log(response)
});

$.ajax({
    url: `http://www.omdbapi.com/?t=${movie}&y=&plot=short&type=movie&rating=G`,
    method: "GET"
}).then(function (response) {
    console.log(response)
});

$.ajax({
    url: `https://api.spotify.com/v1/searchq=${song}`,
    method: "GET"
}).then(function (response) {
    console.log(response)
});



