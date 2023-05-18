const express = require('express')
// import cors from 'cors'

const host = 'http://localhost'
const port = 6660

const app = express()
app.use(express.json())

// 
app.get('/', (req, res) => {
    res.status(200).json({'hello': 'world'})
})

app.listen(port, () => console.log(`Server listening on ${host}:${port}`));