const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use (
    new GoogleStrategy (
        {
            clientID: "1049248271566-oe5m14k67dh6hg3rn6rpsusks6b4vmoq.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            // Code to handle user authentication and retrieval
        }
    )
);

passport.serializeUser( (user, done) => {
    // Code to serialize user data
});

passport.deserializeUser( (id, done) => {
     // Code to deserialize user data
});

module.exports = passport;