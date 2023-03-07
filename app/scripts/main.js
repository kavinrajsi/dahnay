// Menu
$('.menu-button').click(function (e) {
  e.stopPropagation();
  $('.menu-button').addClass('open');
  $('body').addClass('menu-active');
  $('body').append('<div class="backdrop"></div>');

});

$(document.body).click(function (e) {
  closeMenu();
});

function closeMenu() {
  console.log('close button');
  $('.menu-button').removeClass('open');
  $('body').removeClass('menu-active');
  $('.backdrop').remove();
}

// Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyDOmKWK9HihjrGM2kFcJ60bNVJq_-LPA38',
  authDomain: 'dahnay-contactlanding.firebaseapp.com',
  databaseURL: 'https://dahnay-contactlanding-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'dahnay-contactlanding',
  storageBucket: 'dahnay-contactlanding.appspot.com',
  messagingSenderId: '76525081764',
  appId: '1:76525081764:web:d0d708084cc40936cc8231'
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();

  var clientIP = '';
  $.get('https://ipinfo.io', function (response) {
    clientIP = response.ip;
  }, 'json');

  var email = getInputVal('email');
  var ipAddress = clientIP;
  var date = new Date();

  saveMessage(email, ipAddress, date);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    ipAddress: ipAddress,
    date: date
  });
}
