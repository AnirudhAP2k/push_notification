import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBmCH8P_Six_A7_euUZQN5oBS8nqbOv84A",
  authDomain: "push-notification-42ae7.firebaseapp.com",
  projectId: "push-notification-42ae7",
  storageBucket: "push-notification-42ae7.appspot.com",
  messagingSenderId: "63810231131",
  appId: "1:63810231131:web:289a180b352995a0dcd87e",
  measurementId: "G-2KMMQL3ZEQ"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

Notification.requestPermission()
  .then(async (permission) => {
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "JklLb6YIY5dv1rpBeVfHzZiNEbvYa3nryjn7Hb1H9D8"
      });
      console.log("✅ FCM Token:", token);
    } else {
      console.warn("Permission not granted for notifications");
    }
  })
  .catch(err => console.error("Error requesting permission:", err));
