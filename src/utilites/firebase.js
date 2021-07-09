import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyARb6jZLtPCFXm4dK_j5N9k1P-AhcINAJ8",
    authDomain: "vue-full-course-276c1.firebaseapp.com",
    projectId: "vue-full-course-276c1",
    storageBucket: "vue-full-course-276c1.appspot.com",
    messagingSenderId: "608439415074",
    appId: "1:608439415074:web:61585e78a486f4e4eb357b"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;