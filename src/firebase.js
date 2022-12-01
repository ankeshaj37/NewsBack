import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtMeIzy6869UAID9zQicmSqcsz5fh_q_Y",
  authDomain: "homenews-1638a.firebaseapp.com",
  projectId: "homenews-1638a",
  storageBucket: "homenews-1638a.appspot.com",
  messagingSenderId: "31333880697",
  appId: "1:31333880697:web:9d0591f918b86382bc55a8"
};

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = app.firestore()

  export {db,auth}