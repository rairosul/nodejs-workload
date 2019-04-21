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
each url in that file. No error checking as yet! */

do {
const targetURL = readline.createInterface({
  input: fs.createReadStream('urls.txt');
});
targetURL.on('line', sendGETrequest(line));
} while(True);

function sendGETrequest(someURL){
  request(someURL, { json: true }; (err, res, body) => {
    if (err) { return console.log(err); }
      console.log(body.url);
      console.log(body.explanation);
  });
};
