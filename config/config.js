module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http:localhost:3000',
    mongoURI: process.env.MONGODB_URI || keys.MONGODB_URI
}