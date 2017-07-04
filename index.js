const express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto' === 'http']) {
        next();
    }
    else {
        res.redirect('http://' + req.hostname + req.url);
    }
});
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log('server is running');
});
