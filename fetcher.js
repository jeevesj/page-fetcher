// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
const fs = require('fs');
const request = require('request');

let array = process.argv.slice(2);
const site = array[0];
const path = array[1];

request(site, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  fs.writeFile(path, body, function (err) {
    if (err) {
      console.error('Error writing file:', err);
      } else {
        //console.log(`Downloaded and saved ${dfadsf} bytes to ${path}`);
        
        fs.stat(path, (err, stats) => {
          if (err) {
            console.error(err);
            return;
          }
          let huge = stats.size; // 1024000 //= 1MB
      
          console.log(`Downloaded and saved ${huge} bytes to ${path}`);
      
        });
      } 
  }); 
});

