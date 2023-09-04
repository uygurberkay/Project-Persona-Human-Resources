// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuqVk8EAfE9Kieo9KxcCO0dlPI4Icnra0",
    authDomain: "personahumanresource.firebaseapp.com",
    projectId: "personahumanresource",
    storageBucket: "personahumanresource.appspot.com",
    messagingSenderId: "219825598224",
    appId: "1:219825598224:web:7cd59fa801befdaa427f95",
    measurementId: "G-Y5G0LWT6YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);