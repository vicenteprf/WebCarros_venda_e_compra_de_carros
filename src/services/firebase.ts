import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCM3Ystj3F3hjbw21xHQ2RR1wGDD-UplBI",
  authDomain: "webcarros-7271c.firebaseapp.com",
  projectId: "webcarros-7271c",
  storageBucket: "webcarros-7271c.firebasestorage.app",
  messagingSenderId: "173644935100",
  appId: "1:173644935100:web:e0ab3bed2235466a4bc5b9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
