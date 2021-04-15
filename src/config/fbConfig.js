import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var config = {
  apiKey: "AIzaSyD98rVyomGmvpf3DaaHi4zuJTo-aJxf-aA",
  authDomain: "dk-mario-plan.firebaseapp.com",
  databaseURL: "https://dk-mario-plan.firebaseio.com",
  projectId: "dk-mario-plan",
  storageBucket: "dk-mario-plan.appspot.com",
  messagingSenderId: "493247280150",
  appId: "1:493247280150:web:2f096512bf1e4ee6673137",
  measurementId: "G-DEM8JK0LMQ"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase 