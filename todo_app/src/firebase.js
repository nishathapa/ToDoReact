// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC8vQYEjt8TTE5WnPND4uCupW9XkQUhOEM",
//     authDomain: "todoreact-5d041.firebaseapp.com",
//     databaseURL: "https://todoreact-5d041.firebaseio.com",
//     projectId: "todoreact-5d041",
//     storageBucket: "todoreact-5d041.appspot.com",
//     messagingSenderId: "1033767104634",
//     appId: "1:1033767104634:web:5db8a0f1c49b59a6c60bc3",
//     measurementId: "G-QT4CZKE15F"
//   };

import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8vQYEjt8TTE5WnPND4uCupW9XkQUhOEM",
    authDomain: "todoreact-5d041.firebaseapp.com",
    databaseURL: "https://todoreact-5d041.firebaseio.com",
    projectId: "todoreact-5d041",
    storageBucket: "todoreact-5d041.appspot.com",
    messagingSenderId: "1033767104634",
    appId: "1:1033767104634:web:5db8a0f1c49b59a6c60bc3",
    measurementId: "G-QT4CZKE15F"
});

const db = firebaseApp.firestore();

export default db;