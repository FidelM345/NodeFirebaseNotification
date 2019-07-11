 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBbRWACnVh6_-8IPU9rhFwPkkaugyeT_AE",
    authDomain: "thebeast-2fd61.firebaseapp.com",
    databaseURL: "https://thebeast-2fd61.firebaseio.com",
    projectId: "thebeast-2fd61",
    storageBucket: "thebeast-2fd61.appspot.com",
    messagingSenderId: "239632186700"
  };
  firebase.initializeApp(config);


 // firebase.auth.Auth.Persistence.LOCAL;


$('#btn-login').click(function(){

    var email= $('#email_txt').val();
    var password= $('#pawword_txt').val();
  
  
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...


        console.log(errorCode);
        console.log(errorMessage);
      });
  

});




