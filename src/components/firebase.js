import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDe9UtNxhaCe8czPkS00CNtRbHS6AVNNl4",
  authDomain: "astro-11ddd.firebaseapp.com",
  projectId: "astro-11ddd",
  storageBucket: "astro-11ddd.appspot.com",
  messagingSenderId: "569362772473",
  appId: "1:569362772473:web:ffc6f4a30094fdb5f2cd28",
  measurementId: "G-J3FM77TG2J",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
