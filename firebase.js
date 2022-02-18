var firebaseConfig = {
  apiKey: "AIzaSyAc9s3R6XnwVeXKEaKctv4TzkYzhV8D2g4",
  authDomain: "todo-live-c9f37.firebaseapp.com",
  projectId: "todo-live-c9f37",
  storageBucket: "todo-live-c9f37.appspot.com",
  messagingSenderId: "669370824067",
  appId: "1:669370824067:web:228c0f07cb80aebc9972b6",
  measurementId: "G-34D70B4VX0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();