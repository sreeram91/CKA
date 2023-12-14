const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from default route")
});

app.get('/about', (req, res) => {
    res.send("Hello from about route")
});

const PORT = process.env.PORT || 3004;

const server = app.listen(PORT, () => {
    console.log('Listening on port: ', server.address().port)
});