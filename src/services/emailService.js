import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Crée une promesse avec timeout
 */
const withTimeout = (promise, timeoutMs) => {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout: La requête a pris trop de temps')), timeoutMs)
    )
  ]);
};

/**
 * Sauvegarde un email dans Firestore
 * @param {string} email - L'adresse email à sauvegarder
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const saveEmail = async (email) => {
  try {
    // Valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Veuillez entrer une adresse email valide'
      };
    }

    // Vérifier que Firestore est bien initialisé
    if (!db) {
      console.error('Firestore n\'est pas initialisé');
      return {
        success: false,
        message: 'Erreur de configuration. Veuillez réessayer plus tard.'
      };
    }

    // Ajouter l'email à la collection 'emails' dans Firestore avec timeout de 10 secondes
    const addDocPromise = addDoc(collection(db, 'emails'), {
      email: email.trim().toLowerCase(),
      timestamp: serverTimestamp(),
      source: 'landing_page_popup'
    });

    const docRef = await withTimeout(addDocPromise, 10000);

    return {
      success: true,
      message: 'Email enregistré avec succès !',
      id: docRef.id
    };
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de l\'email:', error);
    console.error('Détails de l\'erreur:', {
      code: error.code,
      message: error.message,
      stack: error.stack
    });

    // Messages d'erreur plus spécifiques
    let errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
    
    if (error.message.includes('Timeout')) {
      errorMessage = 'La connexion prend trop de temps. Vérifiez votre connexion internet.';
    } else if (error.code === 'permission-denied') {
      errorMessage = 'Permission refusée. Vérifiez les règles de sécurité Firestore.';
    } else if (error.code === 'unavailable') {
      errorMessage = 'Service temporairement indisponible. Veuillez réessayer plus tard.';
    } else if (error.message) {
      errorMessage = `Erreur: ${error.message}`;
    }

    return {
      success: false,
      message: errorMessage
    };
  }
};

