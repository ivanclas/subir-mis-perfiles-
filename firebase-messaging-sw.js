// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyD8Qixd8Q5DFYu0a5l5jiYC2ODrUbnjwuk",
  authDomain: "guardar-fotos-ec316.firebaseapp.com",
  projectId: "guardar-fotos-ec316",
  storageBucket: "guardar-fotos-ec316.appspot.com",
  messagingSenderId: "529201655026",
  appId: "1:529201655026:web:f10e873d825a72b5d8b46b",
  measurementId: "G-SMEHYGBPRR"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Mensaje en segundo plano recibido", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  // Mostrar la notificación en segundo plano
  self.registration.showNotification(notificationTitle, notificationOptions);
});
