var firebase = require("firebase");
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQNdkQRk_XN6zwfn8KtBqv7sMPUnxa-v8",
  authDomain: "coglitedb.firebaseapp.com",
  databaseURL: "https://coglitedb.firebaseio.com",
  projectId: "coglitedb",    
  storageBucket: "coglitedb.appspot.com",    
  messagingSenderId: "1024119130296"
};
firebase.initializeApp(config);

module.exports = firebase;