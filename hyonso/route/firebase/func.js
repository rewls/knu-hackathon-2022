// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let database = firebase.database();

var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
        document.getElementById("demo").innerHTML = "쓰기를 완료";
        alert("쓰기 완료");

        //firebase에 쓰기
        database.ref('Demo').set({
            username: "test",
            age: 11
        });
    })

function myFunction() {
    document.getElementById("demo").innerHTML = "쓰기를 완료";
    alert("쓰기 완료");
    
    //firebase에 쓰기
    database.ref('Demo').set({
        username: "test",
        age: 11
    });
}