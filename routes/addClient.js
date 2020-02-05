const joi = require('@hapi/joi');
const db = require('../config/database');

module.exports = {
    method: 'POST',
    path: '/api/clients',
    options: {
        validate: {
            payload: joi.object().keys({
                id: joi.string().uuid(),
                age: joi.number().integer().min(1).required(),
                genre: joi.string().alphanum().min(5).max(5),
                code_postal: joi.string().email()
            })
        }
    },
    handler: async (req, toolkit) => {
        return db.insert({
            id: req.payload.id,
            first_name: req.payload.age,
            last_name: req.payload.genre,
            email: req.payload.code_postal
        }).into('clients')
            .returning('identifiant', 'age', 'genre', 'code_postal')
            .then(result => {
                return toolkit.response({
                    statusCode: 201,
                    errors: null,
                    message: 'Created',
                    meta: {
                        query: req.query,
                        params: req.params
                    },
                    data: result
                }).code(201);
            })
            .catch(err => {
                return toolkit.response({
                    statusCode: 500,
                    errors: err,
                    message: 'Internal Server Error',
                    errors: [
                        {
                            message: 'Failed to connect to database'
                        }
                    ],
                    meta: {
                        query: req.query,
                        params: req.params
                    },
                    data: null
                }).code(500);
            });
        
    }
}