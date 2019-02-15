// Initialize Firebase
var config = {
    apiKey: "AIzaSyBKqnOx3whVTOPnoc6K9AbS51nK0nUIcnY",
    authDomain: "banquet-inn.firebaseapp.com",
    databaseURL: "https://banquet-inn.firebaseio.com",
    projectId: "banquet-inn",
    storageBucket: "banquet-inn.appspot.com",
    messagingSenderId: "84905194109"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.FacebookAuthProvider();

function publicLogin(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user, "Login Success")
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("Log Out Success")
      }).catch(function(error) {
        // An error happened.
      });
}

function quesPage(){
  console.log("page direction success")
  window.location.assign("createqs.html")
}