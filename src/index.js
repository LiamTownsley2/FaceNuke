import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBy-SlyvBgcXNH_wwm-oruzHOAOP7JZG3U",
  authDomain: "socialsite-efe60.firebaseapp.com",
  projectId: "socialsite-efe60",
  storageBucket: "socialsite-efe60.appspot.com",
  messagingSenderId: "272571628583",
  appId: "1:272571628583:web:4ba2ee259821ff01176202",
  measurementId: "G-5VZNQVS48D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
