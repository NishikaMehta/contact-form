// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdNZYNwE-vqvGac7_5DLQ1UzB2x6Y0BwQ",
  authDomain: "contactform-900ee.firebaseapp.com",
  projectId: "contactform-900ee",
  storageBucket: "contactform-900ee.appspot.com",
  messagingSenderId: "834784893393",
  appId: "1:834784893393:web:1b3d6c750c6e1815a0e8f0",
  measurementId: "G-FN508HMK2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // get Values
  var name = getInputVal('username');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  //save message

  saveMessage(username, email, phone, message);

  //show alert
  document.querySelector('.alert').style.display='block';

  //Hide alert after 3 s
  setTimeout(function(){
      document.querySelector('.alert').style.display='none';
  }, 3000)
  //clear form
  document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(username, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: username,
      email: email,
      phone: phone,
      message: message
  })
}
<textarea></textarea>