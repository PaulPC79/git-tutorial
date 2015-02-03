(function () {
  "use strict";

  var message = "Hello there!"
  var message2 = "AngularJS Rocks!";

  document.getElementById('helloButton')
    .addEventListener('click', function() {
      alert(message);
    });

  document.getElementById('rocksButton')
    .addEventListener('click', function() {
      alert(message2);
    });
}());