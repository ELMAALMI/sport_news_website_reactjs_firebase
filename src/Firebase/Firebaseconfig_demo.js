
import Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
Firebase.initializeApp(firebaseConfig);
export  default Firebase;