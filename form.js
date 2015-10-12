Parse.$ = jQuery;


Parse.initialize('BbWG8zghqYP2NOgrKHGIm8h1dcwNG0fG954uRaqv',
'5PcVN5PJmRdLADqMSF2zdI5xfFI6nS43iWzrN4Ep'); // APPKEY, JAVASCRIPTKEY

$(function() {
  $(document).ready(init);

  function init() {
    $('#submit').on('click', createNew);
  }

  function createNew(){
    var fileUploadControl = $('#datafile')[0];
    if (fileUploadControl.files.length > 0) {
      var file = fileUploadControl.files[0];
      var name = 'photo.jpg';
      var parseFile = new Parse.File(name, file);
      parseFile.save().then(function() {
        var bash = new Parse.Object('Bash');
        var name = $('#name').val();
        var desc = $('#desc').val();
        var time = $('#time').val();
        var club = $("#club option:selected").text();

        bash.set('name', name);
        bash.set('desc', desc);
        bash.set('time', time);
        bash.set('club',club);
        bash.set('photo', parseFile);

        bash.save(null, {
          success: function(bash){
            window.location.replace('./index.html');
          },
          error: function(story, error){
            alert('Something went wrong, we were unable to create your bash.');
          }
        });
      }, function(error) {
          // The file either could not be read, or could not be saved to Parse.
          alert('Something went wrong, we were unable to create the image for your bash and thus your bash was not created.');
      });
    }
  }
});
