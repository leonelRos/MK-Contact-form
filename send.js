// var AWS = require('aws-sdk');
// var ses = new AWS.SES();
 
// var RECEIVER = 'rleonel426@gmail.com';
// var SENDER = 'rleonel426@gmail.com';

// var response = {
//  "isBase64Encoded": false,
//  "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
//  "statusCode": 200,
//  "body": "{\"result\": \"Success.\"}"
//  };

// exports.handler = function (event, context) {
//     console.log('Received event:', event);
//     sendEmail(event, function (err, data) {
//         context.done(err, null);
//     });
// };
 
// function sendEmail (event, done) {
//     var params = {
//         Destination: {
//             ToAddresses: [
//                 RECEIVER
//             ]
//         },
//         Message: {
//             Body: {
//                 Text: {
//                     Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\nmessage: ' + event.message,
//                     Charset: 'UTF-8'
//                 }
//             },
//             Subject: {
//                 Data: 'Website Referral Form: ' + event.name,
//                 Charset: 'UTF-8'
//             }
//         },
//         Source: SENDER
//     };
//     ses.sendEmail(params, done);
// }