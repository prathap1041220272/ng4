'use strict';
const user = require('./user');
const bodyParser = require('body-parser');
const { tokenGen } = require('../services');

function routes(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/auth', user);
    app.use('/api/', (req, res, next) => {
        const tokenServ = (req.headers || {}).authorization;
        if (!tokenServ) {
            return res.status(401).json({ message: 'user unauthorized' })
        }
        let decodedToken;
        try {
            decodedToken = tokenGen.verify(tokenServ);
            next(error)
        }
        catch(error){
        	next(error)
        }
    })
    app.use((error, req, res, next) => {
        const { message, status } = error || {};
        res.status(status || 500).json({ message });
    })
}

module.exports = routes;