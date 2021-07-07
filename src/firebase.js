import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCShDkvncHSF6QPb6kiQ7tZazSE_SeJOUI",
    authDomain: "frconnection-8d836.firebaseapp.com",
    projectId: "frconnection-8d836",
    storageBucket: "frconnection-8d836.appspot.com",
    messagingSenderId: "331592465240",
    appId: "1:331592465240:web:516a82fec8874d47e7c32d",
    measurementId: "G-CQJVHPZDLN"
};
var firedb = firebase.initializeApp(firebaseConfig);

export default firedb;