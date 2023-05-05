require('dotenv').config()
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get('Authorization')
        //if there is no header token, the system will throw a error
        if (!headerToken) {
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }
        // initializes token, and sets it equal to jwt passing in header and the secret
        let token
        //generating signature and verifying
        try {
            token = jwt.verify(headerToken, SECRET)
        } catch (err) {
            err.statusCode = 500
            throw err
        }
        //if there is no token, it will come back with a error
        if (!token) {
            const error = new Error('Not authenticated.')
            error.statusCode = 401
            throw error
        }

        next()
    }
}