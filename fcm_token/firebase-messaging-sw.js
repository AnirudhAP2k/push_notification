// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBmCH8P_Six_A7_euUZQN5oBS8nqbOv84A",
  authDomain: "push-notification-42ae7.firebaseapp.com",
  projectId: "push-notification-42ae7",
  storageBucket: "push-notification-42ae7.appspot.com",
  messagingSenderId: "63810231131",
  appId: "1:63810231131:web:289a180b352995a0dcd87e",
  measurementId: "G-2KMMQL3ZEQ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message: ", payload);

  const { title, body } = payload.notification;
  const notificationOptions = {
    body,
    icon: "/firebase-logo.png", // optional
  };

  self.registration.showNotification(title, notificationOptions);
});
