import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCzFEu3xSXdMvJRzJrpPRUY1bU3B6UlblI",
    authDomain: "mytesting-eef30.firebaseapp.com",
    databaseURL: "https://mytesting-eef30.firebaseio.com",
    projectId: "mytesting-eef30",
    storageBucket: "mytesting-eef30.appspot.com",
    messagingSenderId: "140362381822",
    appId: "1:140362381822:web:1963e904b9746737bf68af",
    measurementId: "G-2VX2W26KLZ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();