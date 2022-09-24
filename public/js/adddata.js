
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";


import { 
  getFirestore, collection, getDocs, addDoc
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


  //Init Service(firestore)
  const db = getFirestore(app)

  //collection ref
  const colRef = collection(db, 'users')

  //read collection data
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().born}`);
  });


  

  //write collection data

  /*
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Mobuk",
      born: 2013
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
  */
  