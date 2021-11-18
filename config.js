import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyA2kVWWEmjmawmgMtnfC-TBu2NpSfDuJmU",
 authDomain: "complaintforum-a7a73.firebaseapp.com",
 projectId: "complaintforum-a7a73",
 storageBucket: "complaintforum-a7a73.appspot.com",
 messagingSenderId: "540830373637",
 appId: "1:540830373637:web:3ede5a15d08ddfb903896c"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

