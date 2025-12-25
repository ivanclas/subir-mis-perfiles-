importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD8Qixd8Q5DFYu0a5l5jiYC2ODrUbnjwuk",
  authDomain: "guardar-fotos-ec316.firebaseapp.com",
  projectId: "guardar-fotos-ec316",
  storageBucket: "guardar-fotos-ec316.appspot.com",
  messagingSenderId: "529201655026",
  appId: "1:529201655026:web:f10e873d825a72b5d8b46b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/notification.png"
  });
});
