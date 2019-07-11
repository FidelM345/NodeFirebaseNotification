const functions = require('firebase-functions');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


var {google} = require('googleapis')

var MESSAGE_SCOPE = "https://www.googleapis.com/auth/firebase.messaging"
var SCOPES = [MESSAGE_SCOPE];
var http = require('http')

var express=require('express')
var app=express();//create the espress app

var bodyParser=require('body-parser')
var router=express.Router(); //creates the routes or imports the route module from express
var request=require('request');
//var portNo=8085;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


router.post('/send',function(req,res){

    getAccessToken().then(function (access_token) {
        //if the access token was retrieved successfully do the following

    //   console.log("access token = "+access_token)
    var token=req.body.token;
    var title=req.body.title;
    var body=req.body.body;

    request.post({
        headers:{
            Authorization: 'Bearer ' + access_token
        },
        url:'https://fcm.googleapis.com/v1/projects/thebeast-2fd61/messages:send',
        body:JSON.stringify({
            "message":{
                "token" : token,
                "notification" : {
                  "body" :body,
                  "title" : title,
                  }
               }
        })
    },function(error,response,body){
        //console.log(error)
        
         res.end(body)
         console.log(body)

    })

})


    // response.json({
    //     'message':'Am working Boy'
    // })
})

app.use('/api',router);

// app.listen(portNo,function(){
//     console.log("server has started successfully at port = "+portNo)
// })

``
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

// getAccessToken().then(function (access_token) {
//     //   console.log("access token = "+access_token)
// })


exports.api = functions.https.onRequest(app);
