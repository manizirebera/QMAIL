// authService.js

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// TODO: replace with your firebase configuration
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authService = {
    signIn: (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    },
    signUp: (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    },
    logOut: () => {
        return signOut(auth);
    }
};

export default authService;
