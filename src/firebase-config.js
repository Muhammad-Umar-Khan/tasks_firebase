import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlW1HRNzM1BKG4c23r_qhUDHgtoHidieo",
  authDomain: "tasks-react-fa424.firebaseapp.com",

  storageBucket: "tasks-react-fa424.appspot.com",
  messagingSenderId: "921850554589",
  appId: "1:921850554589:web:85de537bbddf4140bcd334",
  databaseURL:
    "https://tasks-react-fa424-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tasks-react-fa424",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
