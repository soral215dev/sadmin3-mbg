// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html

import firebase from "firebase/app";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDan0OK71yiNiU6lLx__wKayiOgOH39BS0",
  authDomain: "sadmin3-mbg.firebaseapp.com",
  databaseURL: "https://sadmin3-mbg-default-rtdb.firebaseio.com",
  projectId: "sadmin3-mbg",
  storageBucket: "sadmin3-mbg.appspot.com",
  messagingSenderId: "506545709650",
  appId: "1:506545709650:web:0f1788b278e5ccde60758b",
  measurementId: "G-VK42V3S1DT"
};

firebase.initializeApp(config);
