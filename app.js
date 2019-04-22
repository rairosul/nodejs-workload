/*****************************************
Simple node.js app to hit urls from a list
with http requests
*****************************************/

// require(`./ibmapm`);
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


const targetURL = readline.createInterface({
  input: fs.createReadStream('urls.txt')
});
targetURL.on('line', (line) => {
  sendGETrequest(line);
  });
targetURL.on('close', function () {
    console.log('read stream closed');
});
targetURL.on('error', function (err) {
    console.log(err);
});

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
    sleep(2000);  //
