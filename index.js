const express = require('express')

const app = new express()

app.get('/', (request, response) => {
    
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Yitshhaq Fukushima'
    })
})

app.listen(3333)
