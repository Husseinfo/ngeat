import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from 'firebase/firestore/lite';
import {FactModel} from "../data/models";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAln8hoVSVv3YG3cgbylNoKjJbMwARWSAY",
  authDomain: "ng-eat.firebaseapp.com",
  projectId: "ng-eat",
  storageBucket: "ng-eat.appspot.com",
  messagingSenderId: "885570539818",
  appId: "1:885570539818:web:7ce386434468ef4d198e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getFactById(id: string) {
  const factsCol = collection(db, `facts/${id}`);
  const factsSnapshot = await getDocs(factsCol);
  return factsSnapshot.docs.map(doc => doc.data());
}

export async function getFacts() {
  const factsCol = collection(db, 'facts');
  const factsSnapshot = await getDocs(factsCol);
  return factsSnapshot.docs.map(doc => doc.data() as FactModel);
}
