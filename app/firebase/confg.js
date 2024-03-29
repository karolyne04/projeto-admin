import firebase from "firebase/app"
import 'firebase/auth'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_IDD,
        storageBucket: "admin-template-eedd1.appspot.com",
        messagingSenderId: "515567902319",
        appId: "1:515567902319:web:24c05e4811915b6828379a",
        measurementId: "G-N36MKC50GQ"
    })
}

export default firebase