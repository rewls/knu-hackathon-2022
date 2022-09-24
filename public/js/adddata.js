document.write('<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase.js"></script>');

function init_DB(){
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
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

function myFunction() {

  alert("전송 완료");

  firebase.database().ref('Event').push({
      Name: document.getElementById("name").value,
      Where: document.getElementById("where").value,
      start_date: document.getElementById("stdate").value,
      end_date: document.getElementById("eddate").value,
      who: document.getElementById("who").value
  });
}