import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
// import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCXPddt1HSsbY9ONCGMpqJw2NFOT_yAGNc",
    authDomain: "next-todo-32649.firebaseapp.com",
    projectId: "next-todo-32649",
    storageBucket: "next-todo-32649.appspot.com",
    messagingSenderId: "420034385584",
    appId: "1:420034385584:web:d95864c3618d1aacb28d75",
    measurementId: "G-TSL7HNWYB6"
};


initializeApp(firebaseConfig);
const db=getFirestore();

// const auth=getAuth()
// export {db,auth};

export {db};