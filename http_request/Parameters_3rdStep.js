var https = require('https');

function getAndPrintHTML (options) {
  https.get(options, function (response) {
    var buffer;
    response.on('data', function (data) {
      buffer = buffer + data;
    });


    response.on('end', function() {
      // console.log('Response stream complete.');
      // console.log(buffer);
    });

  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);