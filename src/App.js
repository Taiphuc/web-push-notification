import './App.css';
import firebase from "firebase/compat/app";
// import "firebase/messaging"


function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
      .then(function (registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function (err) {
        console.log('Service worker registration failed, error:', err);
      });
  }

  const firebaseConfig = {
    apiKey: "AIzaSyAOhdYEk_gnXYGI5HwKbTS9CWdGuPx45tM",
    authDomain: "notification-web-push.firebaseapp.com",
    projectId: "notification-web-push",
    storageBucket: "notification-web-push.appspot.com",
    messagingSenderId: "789375005288",
    appId: "1:789375005288:web:9c01b2c28f2c2632a601dd",
    measurementId: "G-WFNCBXY4ZB"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  messaging.requestPermission().then(function () {
    console.log("Notification permission granted");

    return messaging.getToken()
  })
    .then(function (token) {
      console.log("Token", token);
    })
    .catch(function (err) {
      console.log("Unable to get permission to notify.", err);
    })

  return (
    <div className="App">
      <p>Firebase Web Push demo</p>
      {/* <script>
        <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"></script>
      </script> */}
    </div>
  );
}

export default App;
