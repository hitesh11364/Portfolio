// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkcDE80RwUeMbG1v9pmvO2HpVkeRnUp64",
    authDomain: "portfolio-87d30.firebaseapp.com",
    projectId: "portfolio-87d30",
    storageBucket: "portfolio-87d30.firebasestorage.app",
    messagingSenderId: "71624182220",
    appId: "1:71624182220:web:6a4d8d4233cc142cb53569",
    measurementId: "G-J7MRGC5NJH"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
