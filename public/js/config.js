document.write('<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase.js"></script>');

function init(){
  const firebaseConfig = {
    apiKey: "AIzaSyANW9B69OXwB3MuMysbppB6we8uI4l-2XI",
    authDomain: "runners-5383d.firebaseapp.com",
    databaseURL: "https://runners-5383d-default-rtdb.firebaseio.com",
    projectId: "runners-5383d",
    storageBucket: "runners-5383d.appspot.com",
    messagingSenderId: "61987349638",
    appId: "1:61987349638:web:41d7cb172782c2662fdd07",
    measurementId: "G-DC3RLVG1K6"
  };
  
  var app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
