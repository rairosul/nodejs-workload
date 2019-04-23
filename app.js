/*****************************************
Simple node.js app to hit urls from a list
with http requests
*****************************************/

// require('./ibmapm');
const fs = require('fs');
const readline = require('readline');
const request = require('request-promise');

/* This block runs repeatedly. It creates a stream
for a file 'urls.txt', and runs sendGETrequest on
each url in that file. No error checking as yet!

Change the value of urls.txt to specify your file
containing a list of urls.

Change the parameter of sleep to specify the
delay between http requests.

*/

var allURLs = fs.readFileSync('urls.txt', 'utf8').split('\n');
do {
  for (i=0; i < allURLs.length; i++){
    setTimeout(sendGETrequest, 1500, allURLs[i]);
    console.log(`URL: ${allURLs[i]} sent`);
    waitFor(500); // milliseconds
  }
} while(true);

function waitFor(someTime){
  var waitTill =  new Date(new Date().getTime() + someTime);
  while(waitTill > new Date()){}
}

function sendGETrequest(someURL){
  const options = {
    method: 'GET',
    uri: someURL
  }
  request(options)
    .then(function (response) {
      console.log(someURL);
    })
    .catch(function (err) {
      console.log(err);
    })
}
