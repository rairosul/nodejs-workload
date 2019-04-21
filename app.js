/*****************************************
Simple node.js app to hit urls from a list
with http requests
*****************************************/

// require(`./ibmapm`);
const fs = require('fs');
const readline = require('readline');
const request = require('request');

/* This block runs repeatedly. It creates a stream
for a file 'urls.txt', and runs sendGETrequest on
each url in that file. No error checking as yet! 

Change the value of urls.txt to specify your file
containing a list of urls.

Change the parameter of sleep to specify the 
delay between http requests.

*/

do {
const targetURL = readline.createInterface({
  input: fs.createReadStream('urls.txt')
});
targetURL.on('line', (line) => {
  sendGETrequest(line);
});
} while(true);

function sendGETrequest(someURL){
  request(someURL, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
      console.log(body.url);
      console.log(body.explanation);
    sleep(2000);  //
  });
};

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}
