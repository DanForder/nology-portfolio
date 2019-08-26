import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHpzUdKBSA1EiXfJLZqw73lQNKGd60jTE",
  authDomain: "portfolio-a7dd4.firebaseapp.com",
  databaseURL: "https://portfolio-a7dd4.firebaseio.com",
  projectId: "portfolio-a7dd4",
  storageBucket: "",
  messagingSenderId: "13448894430",
  appId: "1:13448894430:web:7e3f2d231bf6267b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
