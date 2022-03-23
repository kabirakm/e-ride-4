import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDtlerFf154UJCfuIuW5dJ-RAD8GQ0dtd4",
    authDomain: "e-ride-4-31d33.firebaseapp.com",
    projectId: "e-ride-4-31d33",
    storageBucket: "e-ride-4-31d33.appspot.com",
    messagingSenderId: "107923394254",
    appId: "1:107923394254:web:fd64ec3828d91fd6700a9f"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


