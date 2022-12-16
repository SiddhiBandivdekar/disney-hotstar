import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAM7s9J-Yyg5sWXlNGYVpp7cFWEgaGNvo",
  authDomain: "disneyplus-clone-c76b2.firebaseapp.com",
  databaseURL: "https://disneyplus-clone-c76b2-default-rtdb.firebaseio.com",
  projectId: "disneyplus-clone-c76b2",
  storageBucket: "disneyplus-clone-c76b2.appspot.com",
  messagingSenderId: "634164887104",
  appId: "1:634164887104:web:446e945791eba47ae9a9a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;
