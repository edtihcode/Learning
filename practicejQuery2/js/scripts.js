$(document).ready(function (){

  $("#submit").click(function (){
    var emailText = $("#email").val();
    var passwordText = $("#password").val();

    console.log(validateEmail(emailText), passwordText);

    if (emailText == "hello@gmail.com") {
        if (passwordText == "123456") {
          console.log("password is right");
        }else {
          console.log("wrong password");
        }

    }else {
      console.log("no user with email "+emailText+" exist");
    }
  });


  function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
      //source:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  }
});
