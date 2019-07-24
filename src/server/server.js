const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3306
const api = require('./routes/api')
const app = express()
app.use(cors());

app.use(bodyParser.json())
app.use('/api', api)

app.get('/', function(req, res) {
   res.send('Hello from Consult Brian Server')
})

app.listen(PORT, function() {
   console.log("Consult Brian Server running on localhost:" + PORT)
});
