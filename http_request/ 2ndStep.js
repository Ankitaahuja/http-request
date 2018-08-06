var https = require('https');
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


https.get(requestOptions, function (response) {
  var buffer;
  response.on('data', function (data) {
    buffer = buffer + data;
  });


  response.on('end', function() {
    console.log('Response stream complete.');
    console.log(buffer);
  });

});
};

getAndPrintHTML();