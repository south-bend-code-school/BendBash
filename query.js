Parse.$ = jQuery;

Parse.initialize('BbWG8zghqYP2NOgrKHGIm8h1dcwNG0fG954uRaqv',
'5PcVN5PJmRdLADqMSF2zdI5xfFI6nS43iWzrN4Ep'); // APPKEY, JAVASCRIPTKEY

$(function() {

  $(document).ready(init);

  function init() {
    var Bash = Parse.Object.extend("Bash");
    var query = new Parse.Query(Bash);
    query.descending("createdAt");

    query.find({
      success: function(results) {
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          var photoURL = object.get("photo").url();
          var html =  '<div class="Event">' +
                        '<h2>' +
                          '<a href="./event.html">' + object.get('name') + '</a>' +
                        '</h2>' +
                        '<p>' +
                          object.get('desc') +
                        '</p>' +
                      '<image class="Event_Picture" src="' + photoURL + '"/>' +
                      '<hr></hr>' +
                      '</div>';

          $("#events").append(html);
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
});
