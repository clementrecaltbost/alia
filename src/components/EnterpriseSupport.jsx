import { useState } from 'react';
import { Link } from 'react-router-dom';

const logoSet = '/assets/Logo set.svg';
const img1 = '/assets/fi-9364298-dashboard.svg';
const img2 = '/assets/fi-11326152-dashboard.svg';
const img3 = '/assets/fi-9446889-dashboard.svg';
const img4 = '/assets/fi-471664-dashboard.svg';
const img8 = '/assets/flag-fr-dashboard.svg';
const img9 = '/assets/fi-9347603-dropdown-dashboard.svg';
const img10 = '/assets/fi-5770911-dashboard.svg';
const img11 = '/assets/fi-2040504-dashboard.svg';

// Statut des demandes
const supportRequests = [
  {
    id: 1,
    subject: 'Problème de paiement athlète',
    category: 'Paiement',
    status: 'En cours',
    statusColor: '#ff9f10',
    date: '12/01/2025',
    description: 'Virement non effectué pour le partenariat avec Teo Carilli',
  },
  {
    id: 2,
    subject: 'Question sur le contrat',
    category: 'Contrat',
    status: 'Résolu',
    statusColor: '#3da000',
    date: '08/01/2025',
    description: 'Clarification des clauses du contrat avec Marie Dubois',
  },
  {
    id: 3,
    subject: 'Problème technique',
    category: 'Technique',
    status: 'En attente',
    statusColor: '#ff9f10',
    date: '15/01/2025',
    description: 'Impossible de publier une nouvelle offre de partenariat',
  },
  {
    id: 4,
    subject: 'Demande d\'information',
    category: 'Information',
    status: 'Résolu',
    statusColor: '#3da000',
    date: '05/01/2025',
    description: 'Informations sur les modalités de recherche d\'athlètes',
  },
];

// FAQ
const faqItems = [
  {
    id: 1,
    question: 'Comment puis-je publier une offre de partenariat ?',
    answer: 'Rendez-vous dans la section "Recherche d\'athlètes", cliquez sur "Créer une offre" et remplissez le formulaire avec les détails de votre partenariat. Votre offre sera visible par tous les athlètes inscrits sur la plateforme.',
  },
  {
    id: 2,
    question: 'Comment gérer les candidatures reçues ?',
    answer: 'Toutes les candidatures sont centralisées dans votre tableau de bord. Vous pouvez consulter les profils des athlètes, leurs statistiques et leur historique de collaborations. Vous pouvez ensuite accepter, refuser ou contacter directement les candidats via la messagerie.',
  },
  {
    id: 3,
    question: 'Quels sont les tarifs pour publier une offre ?',
    answer: 'La publication d\'offres est gratuite. Les frais de plateforme sont prélevés uniquement lors de la finalisation d\'un partenariat (5% du montant total du contrat).',
  },
  {
    id: 4,
    question: 'Comment fonctionnent les paiements aux athlètes ?',
    answer: 'Les paiements sont gérés directement via la plateforme. Vous pouvez programmer les paiements mensuels ou ponctuels. Les virements sont effectués automatiquement selon le calendrier défini dans le contrat.',
  },
  {
    id: 5,
    question: 'Puis-je avoir plusieurs partenariats actifs en même temps ?',
    answer: 'Oui, vous pouvez gérer autant de partenariats que vous le souhaitez simultanément. Chaque partenariat est indépendant et peut avoir ses propres conditions et modalités de paiement.',
  },
  {
    id: 6,
    question: 'Comment sont calculés les frais de plateforme ?',
    answer: 'Les frais de plateforme sont de 5% du montant total du contrat, prélevés uniquement lors de la finalisation d\'un partenariat. Ces frais couvrent la gestion des paiements, le support client et l\'accès à toutes les fonctionnalités de la plateforme.',
  },
  {
    id: 7,
    question: 'Que faire en cas de problème avec un athlète ?',
    answer: 'Contactez notre équipe support via le formulaire de contact. Nous intervenons comme médiateur pour résoudre les différends et garantir le respect des contrats. Nous pouvons également suspendre un partenariat si nécessaire.',
  },
  {
    id: 8,
    question: 'Comment filtrer les candidatures par critères ?',
    answer: 'Dans la section "Recherche d\'athlètes", vous pouvez utiliser les filtres avancés pour rechercher des athlètes selon leur sport, leur localisation, leur nombre d\'abonnés, leur catégorie, etc. Vous pouvez également publier des offres ciblées avec des critères spécifiques.',
  },
];

export default function EnterpriseSupport() {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    message: '',
  });
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre demande a été envoyée avec succès !');
    setFormData({ subject: '', category: '', message: '' });
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="bg-[#f5f8ff] min-h-screen" data-name="Enterprise Support">
      <div className="flex">
        {/* Sidenav */}
        <div className="fixed bg-[#013563] h-screen w-[254px] flex flex-col" data-name="Sidenav">
          <Link to="/" className="flex justify-center pt-8 pb-6">
            <div className="h-[38px] w-[104px]">
              <img src={logoSet} alt="Alia Logo" className="h-full w-full object-contain" />
            </div>
          </Link>

          <nav className="flex-1 px-4 pt-6">
            <Link to="/enterprise-dashboard" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img1} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Tableau de bord
              </p>
            </Link>
            <Link to="/enterprise-search" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img2} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Recherche d'athlètes
              </p>
            </Link>
            <Link to="/enterprise-messages" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3 relative">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img3} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Messages
              </p>
              <div className="bg-[#0ca99a] flex items-center justify-center h-[22px] px-2 rounded-[8px] ml-auto">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-white">8</p>
              </div>
            </Link>
            <div className="bg-[#012d54] border-l-[6px] border-[#66c9bf] flex items-center gap-3 h-[44px] px-4 rounded-r">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img4} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#66c9bf]">
                Support
              </p>
            </div>
          </nav>

          <p className="px-4 pb-8 font-['SF_Pro:Regular',sans-serif] text-[12px] text-white">
            © 2025 Alia
          </p>
        </div>

        {/* Main Content */}
        <div className="ml-[254px] flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
              Support
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6">
                  <img alt="" className="w-full h-full" src={img8} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a]">Fr</p>
                <div className="w-[14px] h-[14px]">
                  <img alt="" className="w-full h-full" src={img9} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="w-[18px] h-[18px] hover:opacity-70 transition-opacity relative">
                  <img alt="" className="w-full h-full" src={img10} onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </button>
                <button className="w-[18px] h-[18px] hover:opacity-70 transition-opacity">
                  <img alt="" className="w-full h-full" src={img11} onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-6">
                Contactez-nous
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Ex: Problème de paiement"
                    required
                    className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] placeholder:text-[#b3b3b3] focus:outline-none focus:border-[#0ca99a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Catégorie
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0ca99a] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="Paiement">Paiement</option>
                    <option value="Contrat">Contrat</option>
                    <option value="Technique">Problème technique</option>
                    <option value="Information">Demande d'information</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre problème ou votre question..."
                    required
                    rows="6"
                    className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] placeholder:text-[#b3b3b3] focus:outline-none focus:border-[#0ca99a] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0ca99a] text-white px-6 py-3 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[15px] hover:bg-[#0ba08f] transition-colors"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>

            {/* Statut des demandes */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-6">
                Statut de vos demandes
              </h2>
              <div className="space-y-3">
                {supportRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border border-[#f2f2f2] rounded-lg p-4 hover:bg-[#f5f8ff] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                          {request.subject}
                        </h3>
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666] mb-2">
                          {request.category} • {request.date}
                        </p>
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] line-clamp-2">
                          {request.description}
                        </p>
                      </div>
                      <span
                        className="font-['SF_Pro:Semibold',sans-serif] text-[12px] px-3 py-1 rounded-full ml-4 flex-shrink-0"
                        style={{ 
                          backgroundColor: `${request.statusColor}20`,
                          color: request.statusColor
                        }}
                      >
                        {request.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 border border-[#f2f2f2] text-[#666666] px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:bg-[#f5f8ff] transition-colors">
                Voir toutes les demandes
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#f2f2f2] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-[#f5f8ff] transition-colors text-left"
                  >
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] pr-4">
                      {item.question}
                    </p>
                    <div className={`w-6 h-6 flex items-center justify-center flex-shrink-0 transition-transform ${expandedFaq === item.id ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {expandedFaq === item.id && (
                    <div className="px-4 pb-4">
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

