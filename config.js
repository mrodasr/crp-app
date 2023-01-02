module.exports = {
    dev: {
        NODE_ENV: 'development',
        PORT: '5000',
        IP: '127.0.0.1',
        MONGODB_URI: 'mongodb://127.0.0.1:27017',
        DB_NAME: 'camping_dev',
        HMAC_KEY: require('crypto').randomBytes(16).toString('hex')
    },
    prod: {
        NODE_ENV: 'production',
        PORT: '3000',
        IP: '127.0.0.1',
        MONGODB_URI: 'mongodb://127.0.0.1:27017',
        DB_NAME: 'camping',
        HMAC_KEY: require('crypto').randomBytes(16).toString('hex')
    }
}