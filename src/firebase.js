import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAM7s9J-Yyg5sWXlNGYVpp7cFWEgaGNvo",
  authDomain: "disneyplus-clone-c76b2.firebaseapp.com",
  projectId: "disneyplus-clone-c76b2",
  storageBucket: "disneyplus-clone-c76b2.appspot.com",
  messagingSenderId: "634164887104",
  appId: "1:634164887104:web:446e945791eba47ae9a9a5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
