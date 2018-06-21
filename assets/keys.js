console.log('this is loaded');

//these are variables used to house our keys 
//They are not written correctly because I'm not sure how they should look
var spotify = new spotify(keys.spotify);
var twitter = new twitter(keys.twitter);
var key = new omdb(key.omdb);
var exports = module.exports = {};

exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    key: OMDB_KEY
}

module.exports(twitter);
module.exports(spotify);
module.exports(omdb);
