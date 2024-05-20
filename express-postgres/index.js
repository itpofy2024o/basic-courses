const express = require('express')
const db = require('./query')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3030

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (_, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/threads', db.getInstances)
app.get('/threads/:id', db.getInstanceById)
app.post('/threads', db.createInstance)
app.put('/threads/:id', db.updateInstance)
app.delete('/threads/:id', db.deleteInstance)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})