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
 
  firebase.initializeApp(config);
  

// Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  // Listen for form submit
  document.getElementById('registration_form').addEventListener('submit', submitForm);
  
 
  // Submit form
  function submitForm(e){
    e.preventDefault();
     
  var	name = getInputVal('name').value;
  var	gender= getInputVal('gender').value;
  var age = getInputVal('age').value;
  var aadharcard = getInputVal('aadhar').value;
  var email  = getInputVal('email').value;
  var phone = getInputVal('phone').value;
  var pnr = getInputVal('pnr').value;
  var from = getInputVal('from').value;
  var to = getInputVal('to').value;
  var date = getInputVal('date').value;
  
    saveMessage(name, gender, age, aadharcard, email, phone, pnr. from, to, date);
    
  

    document.getElementById('registration-form').reset();
    
   

     
  }

  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  function saveMessage(name, gender, age, aadharcard, email, phone, pnr. from, to, date){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name=name,
       gender=gender,
        age=age,
         aadharcard=aadhar,
          email=email,
           phone=phone,
            pnr=pnr.
             from=from,
              to=to, 
              date=date
    });
  }