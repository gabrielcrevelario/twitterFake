import * as  firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA3W78dmw6s_Dq9XfGs5FE6iqUOfrOX6oQ",
    authDomain: "twitterapi-26c39.firebaseapp.com",
    databaseURL: "https://twitterapi-26c39.firebaseio.com",
    projectId: "twitterapi-26c39",
    storageBucket: "twitterapi-26c39.appspot.com",
    messagingSenderId: "305670951243",
    appId: "1:305670951243:web:2e0f9aff4d7b23b66698ce"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  const database = firebase.database();
  const firestore = firebase.firestore();
  
  export  {
      storage, 
      database,
      firestore,
     firebase as default
  }