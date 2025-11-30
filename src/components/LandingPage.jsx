import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './landing/Navigation';
import HeroSlider from './landing/HeroSlider';
import StorySection from './landing/StorySection';
import FeaturesSection from './landing/FeaturesSection';
import TeamSection from './landing/TeamSection';
import ReviewSection from './landing/ReviewSection';
import Footer from './landing/Footer';
import EmailPopup from './EmailPopup';

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Vérifier si on est sur la landing page (route /)
    if (location.pathname !== '/') {
      return;
    }

    // Détecter si c'est un vrai refresh de la page (pas une navigation React Router)
    const checkIfRefresh = () => {
      // Méthode moderne : Performance Navigation Timing API
      try {
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0) {
          const navEntry = navigationEntries[0];
          // 'reload' = refresh (F5), 'navigate' = chargement initial de la page
          // On exclut 'back_forward' et 'prerender' qui sont des navigations
          return navEntry.type === 'reload' || navEntry.type === 'navigate';
        }
      } catch (e) {
        // Fallback si l'API n'est pas disponible
      }

      // Méthode de fallback : Navigation Timing API (dépréciée mais encore supportée)
      if (window.performance && window.performance.navigation) {
        const navType = window.performance.navigation.type;
        // type 0 = navigate (chargement initial), type 1 = reload (F5)
        // type 2 = back/forward (navigation historique) - on l'exclut
        return navType === 0 || navType === 1;
      }

      // Détection alternative : vérifier si on vient d'une navigation React Router
      // Si window.history.state existe et contient une clé, c'est probablement une navigation React Router
      // Si c'est null ou undefined, c'est probablement un refresh
      const isReactRouterNavigation = window.history.state && 
        (window.history.state.key !== undefined || window.history.state.usr !== undefined);
      
      // Si ce n'est pas une navigation React Router, on considère que c'est un refresh
      return !isReactRouterNavigation;
    };

    // Si c'est un vrai refresh, lancer le timer de 20 secondes
    if (checkIfRefresh()) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 20000); // 20 secondes

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="bg-white">
      <Navigation />
      <HeroSlider />
      <FeaturesSection />
      <StorySection />
      <TeamSection />
      <ReviewSection />
      <Footer />
      <EmailPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

