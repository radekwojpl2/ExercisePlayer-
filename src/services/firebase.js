import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcpHg513BauhvrpdcoOf7M1b4OlUV1CRM",
  authDomain: "exerciseplayer-dev.firebaseapp.com",
  projectId: "exerciseplayer-dev",
  storageBucket: "exerciseplayer-dev.appspot.com",
  messagingSenderId: "127360774718",
  appId: "1:127360774718:web:8c23195c14dd53ffa0176f",
  measurementId: "G-X427D77EX1",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const db = getFirestore();

provider.setCustomParameters({ prompt: "select_account" });
export const auth = firebase.auth();
export default firebase;

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};
