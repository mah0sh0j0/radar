const express = require('express');
const request = require('request');
const app = express();

app.use('/proxy', (req, res) => {
    const url = req.query.url;
    req.pipe(request(url)).pipe(res);
});

app.listen(8080, () => {
    console.log('Proxy server running on port 8080');
});
