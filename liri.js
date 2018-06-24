require("dotenv").config();
// console.log("stuffINeed");
var keys = require("./keys.js");
var request = require("request");
var Twitter = require('twitter');
var spotify = require('node-spotify-api');


//these are variables used to house our keys 
//They are not written correctly because I'm not sure how they should look
var spotifyApi = new spotify(keys.spotify);
var twitterApi = new Twitter(keys.twitter);

var argumentOne = process.argv[2]; //whatever command the user enters
var search = process.argv[3]; // the song, movie or type of tweets that is searched by the user

//this is the switch statement that decides which search function will run
switch (argumentOne) {
    case "spotify-this":
        spotifyIt();
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


function spotifyIt() {

    spotifyApi.search({ type: 'artist', query: search, market: 'US' }, function (err, data) {
        if (!err) {

            for (var i = 0; i < 10; i++) {
                console.log(data.artists.items[i]);
            }

        } else {
            console.log(err);
        }
    });

};

function twitter() {
    var params = {
        screen_name: search
    };

    twitterApi.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            // console.log(tweets);
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

    request(`http://www.omdbapi.com/?t=${search}&apikey=Trilogy&plot=short`, function (error, response, body) {
        if (!error) {

            if (search == "/\s/g") {
                search.replace("/\s+/g", '');
            }
            var newBody = JSON.parse(body);
            console.log("Movie Title: " + newBody.Title);
            console.log("The movie's release date is: " + newBody.Year);
            console.log("The movie's rating is: " + newBody.Rated);
            console.log("Cast Includes: " + newBody.Actors);
            console.log("Plot: " + newBody.Plot);
            console.log("Rotten Tomatoes: " + newBody.Ratings[1].Value);
            console.log("Language: " + newBody.Language);
        }

        else {
            console.log(error);
        }

    });
}

function readText() {
    fs = require('fs')
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (!err) {
            console.log(data);

        } else {
            console.log(err);
            return;
        }
    });
};

readText();


