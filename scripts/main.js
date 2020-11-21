 var firebaseConfig = {
    apiKey: "AIzaSyCTg1zs7_G_ynwgmNAbq0--BDcJoAIJdlw",
    authDomain: "fir-app-81392.firebaseapp.com",
    databaseURL: "https://fir-app-81392.firebaseio.com",
    projectId: "fir-app-81392",
    storageBucket: "fir-app-81392.appspot.com",
    messagingSenderId: "586451745929",
    appId: "1:586451745929:web:c6bdf9c0a84f228bceda58",
    measurementId: "G-LST664ES1E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  console.log(firebase);

  var database = firebase.database();
  
  var ref = database.ref('addverb');

  var data ={
  	name: "Harsh",
  	gender: "Male",
  	corona: "No"
  }

  ref.push(data);