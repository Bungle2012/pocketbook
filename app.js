var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();
    
    if(firstName === "") {
      $(".first-name-error").html("Please enter your first name");
    };
      
     if(lastName === "") {
      $(".last-name-error").html("Please enter your last name");
     };
    
    if(email === "") {
      $(".email-error").html("Please enter your email");}
    if(email === "jeff@jeff.com")
    {
      $(".email-error").html("That email is already taken");    
    };
    
    
    
    if(password === "") {
       $(".password-error").html("Please enter your password");}
    if(password.length < 8){
      $(".password-error").html("Short passwords are easy to guess. Try         one with at least 8 characters.");
    };
    
   
 

    return false;
  });
};

$(document).ready(main);