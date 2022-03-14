import firebase from "firebase/compat/app";
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

firebase.initializeApp({
    apiKey: "AIzaSyAOhdYEk_gnXYGI5HwKbTS9CWdGuPx45tM",
    authDomain: "notification-web-push.firebaseapp.com",
    projectId: "notification-web-push",
    storageBucket: "notification-web-push.appspot.com",
    messagingSenderId: "789375005288",
    appId: "1:789375005288:web:9c01b2c28f2c2632a601dd",
    measurementId: "G-WFNCBXY4ZB"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});