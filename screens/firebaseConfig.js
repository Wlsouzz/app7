import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGo5fKL4bBZUymwlKmhYiC-QPX7vPjUXE",
  authDomain: "seu_auth_domain.firebaseapp.com", // substitua pelo seu authDomain
  projectId: "seu_project_id", // substitua pelo seu projectId
  storageBucket: "seu_storage_bucket.appspot.com", // substitua pelo seu storageBucket
  messagingSenderId: "seu_messaging_sender_id", // substitua pelo seu messagingSenderId
  appId: "seu_app_id", // substitua pelo seu appId
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
