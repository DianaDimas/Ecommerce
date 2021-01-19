import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCavineXsJF0jLcJLCMeZh0qV2u-HFb1Fk",
    authDomain: "ecommerce-react-coderhouse.firebaseapp.com",
    projectId: "ecommerce-react-coderhouse",
    storageBucket: "ecommerce-react-coderhouse.appspot.com",
    messagingSenderId: "177734821299",
    appId: "1:177734821299:web:3cc124df81f64d8d3917c6"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

