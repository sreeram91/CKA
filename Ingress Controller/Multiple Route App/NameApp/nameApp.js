const express = require('express');
const app = express();

app.get('/nameapp', (req, res) => {
    res.send("Hello there!! Sreeram here")
});

const PORT = process.env.PORT || 3004;

const server = app.listen(PORT, () => {
    console.log('Listening on port: ', server.address().port)
});