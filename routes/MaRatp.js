const joi = require('@hapi/joi');
const db = require('../config/database');

module.exports = [
    // Get all clients for specific query
    {
    method: 'GET',
    path: '/api/maratp/clients',
    options: {
        validate: {
            query: joi.object().keys({
                limit: joi.number().integer().min(1).max(50000).default(500),
                offset: joi.number().integer().min(0).default(0),
                genre: joi.string().alphanum().min(5).max(5)
            })
        }
    },
    handler: async (req, toolkit) => {
        function request() {
            if (req.query.genre !== undefined) {
                return db.select().from('clients').where('genre', req.query.genre).limit(req.query.limit).offset(req.query.offset)
            }
            return db.select().from('clients').limit(req.query.limit).offset(req.query.offset)
        }
        return request()
            .then(result => {
                return toolkit.response({
                    statusCode: 200,
                    errors: null,
                    message: 'OK',
                    meta: {
                        query: req.query,
                        params: req.params,
                        results: result.length
                    },
                    data: result
                }).code(200);
            })
            .catch(err => {
                console.log(err)
                return toolkit.response({
                    statusCode: 500,
                    errors: err,
                    message: 'Internal Server Error',
                    errors: [
                        {
                            message: 'Database error'
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
    },
    // Create new client
    {
    method: 'POST',
    path: '/api/maratp/clients',
    options: {
        validate: {
            payload: joi.object().keys({
                id: joi.number().integer().min(50000),
                age: joi.number().integer(),
                genre: joi.string(),
                code_postal: joi.number().integer(),
                anciennete: joi.number().integer(),
                abonne_alerting: joi.bool(),
                alertes: joi.array().items(joi.array().items(joi.string())),
                titre_transport: joi.string().alphanum(),
                frequence_transport: joi.string().alphanum(),
                favorishoraires: joi.array().items(joi.array().items(joi.string())),
                favoris_adresses: joi.array().items(joi.array().items(joi.string()))
            })
        }
    },
    handler: async (req, toolkit) => {
        console.log(req.payload);
        return db.insert({
            identifiant: req.payload.id,
            age: req.payload.age,
            genre: req.payload.genre,
            code_postal: req.payload.code_postal,
            anciennete: req.payload.anciennete,
            abonne_alerting: req.payload.abonne_alerting,
            alertes: req.payload.alertes,
            titre_transport: req.payload.titre_transport,
            frequence_transport: req.payload.frequence_transport,
            favoris_horaires: req.payload.favoris_horaires,
            favoris_adresses: req.payload.favoris_adresses
        }).into('clients')
            .returning('identifiant', 'age', 'genre', 'code_postal', 'anciennete', 'abonne_alerting', 'alertes', 'titre_transport', 'frequence_transport', 'favoris_horaires', 'favoris_adresses')
            .then(result => {
                return toolkit.response({
                    statusCode: 201,
                    errors: null,
                    message: 'Created',
                    meta: {
                        query: req.query,
                        params: req.params,
                        payload: req.payload
                    },
                    data: result
                }).code(201);
            })
            .catch(err => {
                console.log(err)
                return toolkit.response({
                    statusCode: 500,
                    errors: err,
                    message: 'Internal Server Error',
                    errors: [
                        {
                            message: 'Database error'
                        }
                    ],
                    meta: {
                        query: req.query,
                        params: req.params,
                        payload: req.payload
                    },
                    data: null
                }).code(500);
            });
        }
    }
]