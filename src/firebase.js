import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCaRr7cobAnmv_pPWbRr-pn71JMdKCSFAA",
  authDomain: "clone-87197.firebaseapp.com",
  databaseURL: "https://clone-87197.firebaseio.com",
  projectId: "clone-87197",
  storageBucket: "clone-87197.appspot.com",
  messagingSenderId: "399929603814",
  appId: "1:399929603814:web:035adacc00d366663aed27",
  measurementId: "G-R8PBLYH22C"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db =  firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()


  export {db, auth, provider}