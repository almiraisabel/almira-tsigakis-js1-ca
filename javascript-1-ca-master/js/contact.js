// CONTACT FORM- recycle - 2020 - use this again and work from there.

var submitBtn = document.getElementById('submitMessage');
var firstNameError = document.getElementById('firstNameError');
var adressError = document.getElementById('adressError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');

firstNameError.style.display = "none";
adressError.style.display = "none";
emailError.style.display = "none";
messageError.style.display = "none";

  // Submit button validation
  submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    var inputName = document.getElementById("firstName").value;
    var inputAdress = document.getElementById("adress").value;
    var inputEmail = document.getElementById("email").value;
    var inputMessage = document.getElementById("message").value;

    // 
    function checkFirstName(firstName) {
      var firstNameRequired = /[a-zA-Z.-]/g;
      if (firstName.match(firstNameRequired)) {
        firstNameError.style.display = "none";
      } else {
        firstNameError.style.display = "block";
        return false;
      }
    }

    // 
    function checkAdress(Adress) {
      var adressRequired = /[a-zA-Z.-]{10,}$/g;
      if (adress.match(adressRequired)) {
        adressError.style.display = "none";
      } else {
        adressError.style.display = "block";
        return false;
      }
    }

    // 
    function checkEmail(emailAdr) {
      var emailRequired = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
      if (emailAdr.match(emailRequired)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
        return false;
      }
    }

    // Validate message
    function checkMessage(message) {
      var messageRequired = /[a-zA-Z.-]{15,}$/g;
      if (message.match(messageRequired)) {
        messageError.style.display = "none";
      } else {
        messageError.style.display = "block";
        return false;
      }
    }

    // Call functions
    checkFirstName(inputName);
    checkAdress(inputAdress);
    checkEmail(inputEmail);
    checkMessage(inputMessage);

    function redirect(){
      if (messageError.style.display === "none" && emailError.style.display === "none" && adressError.style.display === "none" && firstNameError.style.display === "none");
    }

    redirect();


  });
