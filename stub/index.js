const axios = require('axios');
const express = require("express");
const app = express();
const fs = require("fs-extra");
const path = require('path');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/api/players/:steamId/ratings', (req, res) => {
    const steamId = req.params.steamId;

    if (steamId == null) {
        res.send("");
        return;
    }

    try {
        let mock = require(`./responses/ratings/${steamId}`);
        res.send(mock);
    } catch (e) {
        const realUrl = `https://api.opendota.com${req.url}`;
        console.log('Fallback to real URL:', realUrl);
        axios
            .get(realUrl)
            .then((data) => {
                console.log('Trying to save ', path.resolve(`./stub/responses/ratings/${steamId}.json`));
                fs.outputFileSync(path.resolve(`./stub/responses/ratings/${steamId}.json`), JSON.stringify(data.data));
                res.send(data.data);
            })
    }
});

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;