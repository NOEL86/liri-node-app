require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var Twitter = require('twitter');
var spotify = require('node-spotify-api');
var fs = require('file-system');

//these are variables used to house our keys 
//They are not written correctly because I'm not sure how they should look
var spotifyApi = new spotify(keys.spotify);
var twitterApi = new Twitter(keys.twitter);

var argumentOne = process.argv[2]; //whatever command the user enters
var search = process.argv[3]; // the song, movie or type of tweets that is searched by the user
var searchTwo = process.argv[4];

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

    case "do-this":
        readText();
        break;

    default:
        console.log("You didn't select an option, try spotify-this, tweet-this or omdb-movie");
        readText();
};

function spotifyIt() {
    console.log()
    if (typeof searchTwo !== 'undefined') {
        var combinedSearch = search + "%20" + searchTwo;
    } else {
        var combinedSearch = search;
    }

    spotifyApi.search({ type: 'artist', query: combinedSearch, market: 'US' }, function (err, data) {
        if (!err) {

            for (var i = 0; i < 4; i++) {
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

    twitterApi.get('statuses/user_timeline', params, function (error, tweets) {

        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log('========================================');
                console.log(tweets[i].user.name);
                console.log(tweets[i].text);
                console.log("url: ", tweets[i].user.url);
            }
        }
    })
};

function movie() {

    if (typeof searchTwo !== 'undefined') {
        var combinedSearch = search + "%20" + searchTwo;
    } else {
        var combinedSearch = search;
    }

    request(`http://www.omdbapi.com/?t=${combinedSearch}&apikey=Trilogy&plot=short`, function (error, body) {
        if (!error) {
            var newBody = JSON.parse(body.body);
            console.log("Movie Title: " + newBody.Title);
            console.log("The movie's release date is: " + newBody.Year);
            console.log("The movie's rating is: " + newBody.Rated);
            console.log("Cast Includes: " + newBody.Actors);
            console.log("Plot: " + newBody.Plot);
            console.log("Rotten Tomatoes: " + newBody.Ratings[1].Value);
            console.log("Language: " + newBody.Language);
        } else {
            console.log(error);
        }

    });
};

function readText() {

    fs.readFile('random.txt', 'utf8', function (err, data) {

        if (err) throw err;

        var dataArr = data.split(',');

        console.log(dataArr);
        if (dataArr[2] === "tweet-this") {
            console.log("read file function");
            search = dataArr[3];
            twitter();

        }

        if (dataArr[0] === "spotify-this") {
            search = dataArr[1];
            spotifyIt();

        }

        if (dataArr[4] === "omdb-movie") {
            search = dataArr[5];
            movie();

        } else {
            console.log("Invalid Command! Please try again?")
        }

    });


};


