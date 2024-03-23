const express = require('express');
const app = express();
const port = 3000; // You can choose any port

let authCode = "no code";

app.get('/oauth2callback', (req, res) => {
    const authorizationCode = req.query.code;
    authCode = authorizationCode
    if (authCode) {
        //console.log('Authorization Code:', req.query);
        // You can now exchange this code for an access token
        // For security, don't expose the authorization code to the client

        res.send(authCode);
    } else {
        res.status(400).send('No authorization code received.');
    }
});

app.get('/getCode', (req, res) => {
    console.log(authCode)
    if (authCode) {
        res.send(authCode);
        if (authCode !== "no code") {
            authCode = "no code";
        }
    } else {
        res.status(204).send(); // No content
    }
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});