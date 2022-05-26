const express = require('express');
const { param } = require('express/lib/request');
const app = express();

app.listen(8081, () => {
    console.log('\nListening on port 8081\n');
})


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hello World from the server side');
})