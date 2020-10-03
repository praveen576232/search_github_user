import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDdtiMF1CY849u0xm_zbdq6XxadNbEsaXo",
    authDomain: "git-hub-user.firebaseapp.com",
    databaseURL: "https://git-hub-user.firebaseio.com",
    projectId: "git-hub-user",
    storageBucket: "git-hub-user.appspot.com",
    messagingSenderId: "384091166778",
    appId: "1:384091166778:web:dfc054ff524b097175bd03",
    measurementId: "G-P3B0NER8GF"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
 const auth= firebaseApp.auth();
 export default auth;