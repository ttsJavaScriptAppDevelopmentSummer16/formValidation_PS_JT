$(document).ready(function(){
  var button = $('#submit');
  button.on('click', function(){
      var name = $('#name');
      var email = $('#email');
      var phone = $('#phone');
      var required = [name,email,phone];
  //    console.log(required);

      for (var i = 0; i < required.length; i++){
        // console.log("THis is where we are");
        if (required[i].val() === ""){
          var message = $('p#message');
          message.html("Please Fill Out Required Fields");
          message.addClass("warning");
          required[i].prev('label').addClass("warning");
        }else{
          required[i].prev('label').removeClass("warning");
        }
      }

      if ($('label.warning').length === 0){
        $('form').remove();
        $('h2').html("Thanks for your feedback!");
      }
    }
  )
})
