var https = require('https');

function getHTML (options, callback) {
  https.get(options, function (response) {
    var buffer;
    response.on('data', function (data) {
      buffer = buffer + data;
    });


    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer);
      // consol e.log(buffer);
    });

  });
};
function printHTML (html) {
  console.log(html);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getHTML(requestOptions,printHTML);