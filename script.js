(function () {
  "use strict";

  var message = "Hello there!"

  document.getElementById('helloButton')
    .addEventListener('click', function() {
      alert(message);
    });

}());