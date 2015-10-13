Parse.$ = jQuery;


Parse.initialize('BbWG8zghqYP2NOgrKHGIm8h1dcwNG0fG954uRaqv',
'5PcVN5PJmRdLADqMSF2zdI5xfFI6nS43iWzrN4Ep'); // APPKEY, JAVASCRIPTKEY

$(function() {
  $(document).ready(init);

  function init() {
    parseId();
  }

  function parseId() {
    var uri = window.location.search.split('=');
    var id= uri[1];

    var bash = Parse.Object.extend('Bash');
    var query = new Parse.Query(bash);
    query.equalTo("objectId", id)
    query.find({
      success: function(results){
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          var photoURL = object.get("photo").url();
          var html =  '<div class="indEvent">' +
                      '<img class="Event_Picture" src="'+photoURL+'"/>' +
                      '<h2>Name:</h2>' +
                      object.get('name') +
                      '<h2>Date & Time:</h2>' +
                      object.get('time') +
                      '<h2>Event Description:</h2>' +
                      object.get('desc') +
                      '<h2>Event Location:</h2>' +
                      object.get('club') +
                      '</div>';
          $('#eventInfo').empty();
          $('#eventInfo').append(html);
        }
      },
      error: function(error) { alert('Error: ' + error.code + ' ' + error.message); }
    });

  }


});
