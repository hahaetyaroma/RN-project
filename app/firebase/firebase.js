import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC0jxNLxO2QnGZV4RXdt8T4oQE86_aNeAU",
  authDomain: "rn-mobileapp-with-auth.firebaseapp.com",
  projectId: "rn-mobileapp-with-auth",
  storageBucket: "rn-mobileapp-with-auth.appspot.com",
  messagingSenderId: "454588810389",
  appId: "1:454588810389:web:eb993ce790700c853f479c",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
