const http = require('http');
const fs = require('fs');
const port = 3000;
const file='img.jpg';
const server = file.createServer((req, res) => {
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        console.error(`Error reading image file: ${err.message}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/jpeg',
          'Content-Length': data.length,
        });
  
        res.end(data);
      }
    });
  }).listen(port, () => {
      console.log(`Listening on port ${port}`);
    });