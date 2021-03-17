import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC-cV0OShxYOmYuBfw4hHt1LSBe_j_bFKo",
    authDomain: "repose17ra.firebaseapp.com",
    databaseURL: "https://repose17ra-default-rtdb.firebaseio.com",
    projectId: "repose17ra",
    storageBucket: "repose17ra.appspot.com",
    messagingSenderId: "876694988298",
    appId: "1:876694988298:web:9ba27a99348c3fced121f3",
    measurementId: "G-W9T2C53CJL"
};

firebase.initializeApp(firebaseConfig)

export default firebase;