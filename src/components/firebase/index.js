import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD14obbPYiHtHxW64KzV6L1c2r3hNrmleM",

  authDomain: "daredream-bd7f0.firebaseapp.com",

  projectId: "daredream-bd7f0",

  storageBucket: "daredream-bd7f0.appspot.com",

  messagingSenderId: "51874472676",

  appId: "1:51874472676:web:7ec3d4759a2ec1483e42f1",

  measurementId: "G-LR4X72S3GN"

};

  const firebaseSApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
   const db = firebaseSApp.firestore();
   const provider = new firebase.auth.GoogleAuthProvider();
   const facebookProvider = new firebase.auth.FacebookAuthProvider();
   const TwitterProvider = new firebase.auth.TwitterAuthProvider();
   const GithubProvider = new firebase.auth.GithubAuthProvider();

   const storage = firebase.storage();
  export default {auth, db, storage};
  export  {db, provider, facebookProvider, TwitterProvider,GithubProvider};
  export  {auth};
  export  {storage};