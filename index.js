const express = require('express');
const moment = require('moment');

const app = express()

app.use(express.static('public'));

app.get('/status', (req, res) => res.send('Hello Chaarvik.com! Time in server :' + moment().format('MMMM Do YYYY, h:mm:ss a')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
