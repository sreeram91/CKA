const express = require('express');
const app = express();

app.get('/ageapp', (req, res) => {
    res.send("Hello there!! I am 24 yrs old")
});

const PORT = process.env.PORT || 3007;

const server = app.listen(PORT, () => {
    console.log('Listening on port: ', server.address().port)
});