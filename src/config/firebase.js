// Configuration Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDm7FoGZsyVg8ehI-QBBA_URb4FShwt27w",
  authDomain: "alia-c7091.firebaseapp.com",
  projectId: "alia-c7091",
  storageBucket: "alia-c7091.firebasestorage.app",
  messagingSenderId: "91431671824",
  appId: "1:91431671824:web:f7b6e0560e1426a865d295",
  measurementId: "G-JD7VR1G89C"
};

// Initialiser l'application Firebase
const app = initializeApp(firebaseConfig);

// Exporter les services
export const auth = getAuth(app); // Pour l'authentification
export const db = getFirestore(app); // Pour la base de données Firestore
export const storage = getStorage(app); // Pour le stockage de fichiers/images

// Exporter l'application elle-même
export default app;

