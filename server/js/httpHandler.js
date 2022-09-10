const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const swimUtils = require('./swimUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

/**
 * router -- rules to follow when given a specific HTTP request
 *
 * req -- the request being process
 *    req.method -- the type of request being processed
 *    req.url -- the url being processed
 *
 * res -- the response sent out
 *    ex. 200 ok, 500 Internal server error
 *    res.write -- adds the given argument to the response data
 *    res.writeHead -- sets the response status code & headers
 *
 * headers -- used in an HTTP request to provide information about the request that the server can use to tailor the response
 */

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET') {
    res.write(swimUtils());
    res.writeHead(200, headers);
  } else {
    res.writeHead(400, headers);
  }

  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
