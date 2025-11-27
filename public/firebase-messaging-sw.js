importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCjw0p6Re_7Iva_vBgUxHgBw2aro9Dj-eY",
  authDomain: "esmartkart-c5f0a.firebaseapp.com",
  projectId: "esmartkart-c5f0a",
  storageBucket: "esmartkart-c5f0a.firebasestorage.app",
  messagingSenderId: "689690359107",
  appId: "1:689690359107:web:005bae08860b0417ae2bf6",
  measurementId: "G-7B3VZ524SD",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
