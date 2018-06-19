require("dotenv").config();

// 10. Make it so liri.js can take in one of the following commands:

//     * `spotify-this-song`

//     * `movie-this`

$.ajax({
    url: `https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular`,
    method: "GET"
}).then(function (response) {
    console.log(response)
});

$.ajax({
    url: `http://www.omdbapi.com/?t=${title}&y=&plot=short&type=movie&rating=&${apikey}`,
    method: "GET"
}).then(function (response) {
    console.log(response)
});

$.ajax({
    url: `https://api.spotify.com/v1/searchq=${spotify}`,
    method: "GET"
}).then(function (response) {
    console.log(response)
});



