import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt96MQKRG1_-7HW7DOLJcgwIC9dlwZdkQ",
  authDomain: "tecno-store-4abb4.firebaseapp.com",
  projectId: "tecno-store-4abb4",
  storageBucket: "tecno-store-4abb4.appspot.com",
  messagingSenderId: "965525769062",
  appId: "1:965525769062:web:611bb1458e7d74ad6216a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
