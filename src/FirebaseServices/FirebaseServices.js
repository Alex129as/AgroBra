import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjsrYplkel-XDr0Hi4r9J0nHnKLlavEfQ",
    authDomain: "agrobra-9f944.firebaseapp.com",
    databaseURL: "https://agrobra-9f944.firebaseio.com/",
    projectId: "agrobra-9f944",
    storageBucket: "agrobra-9f944.appspot.com",
    appId: "1:835175082803:android:a29c1df00822db4b60ec46",
  };
  
firebase.initializeApp(firebaseConfig);

  // export const FirebaseDatabase = firebase.database();
  // export const FirebaseAuth = firebase.auth();
  // export const ProviderGoogle = firebase.auth.GoogleAuthProvider();
  // export const ProviderFacebook = firebase.auth.FacebookAuthProvider();