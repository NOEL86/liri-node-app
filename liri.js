require("dotenv").config();
console.log("stuffINeed");
var keys = require("./keys.js");
var request = require("request");
var Twitter = require('twitter');

console.log(keys, "this is keys");


//these are variables used to house our keys 
//They are not written correctly because I'm not sure how they should look
var spotify = new spotify(keys.spotify);
var twitterApi = new Twitter(keys.twitter);

var argumentOne = process.argv[2]; //whatever command the user enters
var search = process.argv[3]; // the song, movie or type of tweets that is searched by the user


//this is the switch statement that decides which search function will run
switch (argumentOne) {
    case "spotify-song":
        spotify();
        break;

    case "tweet-this":
        twitter();
        break;

    case "omdb-movie":
        movie();
        break;

    default:
        console.log("liri does not understand your command");
};

function spotify() {

}

function twitter() {
    var params = {
        screen_name: search
    };

    twitterApi.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);


            for (var i = 0; i < tweets.length; i++) {
                console.log('========================================');
                console.log(tweets[i].user.name);
                console.log(tweets[i].text);
                console.log("url: ", tweets[i].user.url);
            }
        }
    });

}


function movie() {
    request(`http://www.omdbapi.com/?t=${search}&y=&plot=short&type=movie&rating=G&apikey=AIzaSyB_p0WIpiO2nbmIL2MWja2NLh9oiBaJ5d4`, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body));
        }
    })
};



// $.ajax({
//     url: `https://api.spotify.com/v1/search&q=${song}`,
//     method: "GET"
// }).then(function (response) {
//     console.log(response)
// });


