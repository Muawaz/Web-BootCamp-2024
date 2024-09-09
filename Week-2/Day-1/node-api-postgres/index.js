const express = require('express')
const bodyParser = require('body-parser')
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'tiger',
  port: 5432,
})

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})