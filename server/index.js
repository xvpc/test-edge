const express = require('express')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('/da', (req, res) => {
        res.status(200).json({'hello': 'bitch'})
    })
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    server.listen(PORT, (err) => {
        if(err) throw err
        console.log(`listening on port ${PORT}`)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})