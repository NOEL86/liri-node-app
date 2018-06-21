console.log('this is loaded');

var twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

var spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

var omdb = {
    key: process.env.OMDB_KEY
}


module.exports = {
    twitter: twitter,
    spotify: spotify,
    omdb: omdb
}