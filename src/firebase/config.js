import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSskERL_RY2C_Cu7vZiUvkGfFH1A6oot0",
    authDomain: "shopping-cart-app-3db55.firebaseapp.com",
    projectId: "shopping-cart-app-3db55",
    storageBucket: "shopping-cart-app-3db55.appspot.com",
    messagingSenderId: "155073856344",
    appId: "1:155073856344:web:4eedca1d32ec3d0c7ddb2d"
  }

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db