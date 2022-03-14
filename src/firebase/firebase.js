import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOhdYEk_gnXYGI5HwKbTS9CWdGuPx45tM",
    authDomain: "notification-web-push.firebaseapp.com",
    projectId: "notification-web-push",
    storageBucket: "notification-web-push.appspot.com",
    messagingSenderId: "789375005288",
    appId: "1:789375005288:web:9c01b2c28f2c2632a601dd",
    measurementId: "G-WFNCBXY4ZB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();