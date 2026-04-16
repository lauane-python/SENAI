const express = require('express')
const path = require('path')
const server = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

server.use(express.static('public'))

server.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
    console.log('Acesse seu site em: http://localhost:3000')
})