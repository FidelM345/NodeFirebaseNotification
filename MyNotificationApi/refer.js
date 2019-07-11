var {
    google
} = require('googleapis')

var MESSAGE_SCOPE = "https://www.googleapis.com/auth/firebase.messaging"
var SCOPES = [MESSAGE_SCOPE];

var http = require('http')

function getAccessToken() {
    return new Promise(function (resolve, reject) {
        var key = require('./service-account.json');
        var jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}


getAccessToken().then(function (access_token) {
    //   console.log("access token = "+access_token)
})


//   response.writeHead(200, {
//     'Content-Type': 'text/plain',
//     'Access-Control-Allow-Origin' : '*'
// });

var server = http.createServer(function (request, response) {

    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    getAccessToken().then(function (access_token) {
        response.end("The beast acess token is = " + access_token)
    })
})


server.listen(3000, function () {
    console.log("Server started successfully")
})