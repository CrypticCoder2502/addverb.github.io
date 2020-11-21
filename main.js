var firebaseConfig = {
    apiKey: "AIzaSyBY7JaJsQSd2w-hZ0O053lvevRwjpptsY0",
    authDomain: "travel-safe-a0c2d.firebaseapp.com",
    databaseURL: "https://travel-safe-a0c2d.firebaseio.com",
    projectId: "travel-safe-a0c2d",
    storageBucket: "travel-safe-a0c2d.appspot.com",
    messagingSenderId: "146086654256",
    appId: "1:146086654256:web:ee0bcaabdf52f275b098f5",
    measurementId: "G-FRFEPCLRVX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
 var database = firebase.database();
 var ref = database.ref('addverb');

 function submitForm(){

  console.log("Clicked");

  var data = {
    name: document.getElementById('name1').value,
    gender: document.getElementById('gender1').value,
    age: document.getElementById('age1').value,
    aadharcard: document.getElementById('aadhar1').value,
    email: document.getElementById('email1').value,
    phone:document.getElementById('phone1').value,
    pnr: document.getElementById('pnr1').value,
    from: document.getElementById('from1').value,
    to: document.getElementById('to1').value,
    date: document.getElementById('date1').value
  }

  ref.push(data);


 }