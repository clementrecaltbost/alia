import { useState } from 'react';
import { Link } from 'react-router-dom';

const logoSet = '/assets/Logo set.svg';
const imgGroup = '/assets/group-menu-dashboard.svg';
const img1 = '/assets/fi-9364298-dashboard.svg';
const img2 = '/assets/fi-11326152-dashboard.svg';
const img3 = '/assets/fi-9446889-dashboard.svg';
const img4 = '/assets/fi-471664-dashboard.svg';
const imgGroup1 = '/assets/Group 1.svg';
const img8 = '/assets/flag-fr-dashboard.svg';
const img9 = '/assets/fi-9347603-dropdown-dashboard.svg';
const img10 = '/assets/fi-5770911-dashboard.svg';
const img11 = '/assets/fi-2040504-dashboard.svg';

// Données du profil
const profileData = {
  fullName: 'Teo Carilli',
  email: 'teo.carilli@example.com',
  sport: 'Handball',
  country: 'France',
  city: 'Paris',
  club: 'Paris Handball',
  category: 'Ligue 1',
  dateOfBirth: '15/03/1998',
  phone: '+33 6 12 34 56 78',
  bio: 'Athlète professionnel de handball avec plus de 10 ans d\'expérience. Passionné par le sport et toujours à la recherche de nouveaux défis.',
};

// Historique des transactions
const transactions = [
  {
    id: 1,
    date: '15/01/2025',
    description: 'Mission Adidas - Ambassadeur',
    amount: 2500,
    status: 'Payé',
    statusColor: '#3da000',
  },
  {
    id: 2,
    date: '10/01/2025',
    description: 'Campagne Nike - Réseaux sociaux',
    amount: 1800,
    status: 'Payé',
    statusColor: '#3da000',
  },
  {
    id: 3,
    date: '05/01/2025',
    description: 'Sponsoring ASICS - Équipement',
    amount: 3200,
    status: 'Payé',
    statusColor: '#3da000',
  },
  {
    id: 4,
    date: '28/12/2024',
    description: 'Mission Decathlon - Contenu',
    amount: 1500,
    status: 'Payé',
    statusColor: '#3da000',
  },
  {
    id: 5,
    date: '20/12/2024',
    description: 'Campagne Puma - Événement',
    amount: 2200,
    status: 'Payé',
    statusColor: '#3da000',
  },
];

// Paiements à venir
const upcomingPayments = [
  {
    id: 1,
    date: '01/02/2025',
    description: 'Mission Adidas - Ambassadeur',
    amount: 2500,
    status: 'En attente',
    statusColor: '#ff9f10',
  },
  {
    id: 2,
    date: '15/02/2025',
    description: 'Campagne Nike - Réseaux sociaux',
    amount: 1800,
    status: 'En attente',
    statusColor: '#ff9f10',
  },
];

export default function AthleteProfile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profileData);
  const [subscriptionType, setSubscriptionType] = useState('premium'); // 'free' ou 'premium'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Ici on pourrait sauvegarder les données à une API
    alert('Profil mis à jour avec succès !');
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
  };

  const avatarUrl = 'https://randomuser.me/api/portraits/men/32.jpg';

  return (
    <div className="bg-[#f5f8ff] min-h-screen" data-name="Profile">
      <div className="flex">
        {/* Sidenav */}
        <div className="fixed bg-[#013563] h-screen w-[254px] flex flex-col" data-name="Sidenav">
          <Link to="/" className="flex justify-center pt-8 pb-6">
            <div className="h-[38px] w-[104px]">
              <img src={logoSet} alt="Alia Logo" className="h-full w-full object-contain" />
            </div>
          </Link>

          <nav className="flex-1 px-4 pt-6">
            <Link to="/athlete-dashboard" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img1} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Tableau de bord
              </p>
            </Link>
            <Link to="/athlete-search" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img2} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Recherche
              </p>
            </Link>
            <Link to="/athlete-messages" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors relative mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img3} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Messages
              </p>
              <div className="bg-[#0ca99a] flex items-center justify-center h-[22px] px-2 rounded-[8px] ml-auto">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-white">13</p>
              </div>
            </Link>
            <Link to="/athlete-support" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img4} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Support
              </p>
            </Link>
          </nav>

          <p className="px-4 pb-8 font-['SF_Pro:Regular',sans-serif] text-[12px] text-white">
            © 2025 Alia
          </p>
        </div>

        {/* Main Content */}
        <div className="ml-[254px] flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-end mb-8">
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

          {/* Header avec photo de profil */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0ca99a]">
                <img 
                  src={avatarUrl} 
                  alt="Photo de profil" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/avatar-dashboard.svg';
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
                    {formData.fullName}
                  </h1>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6">
                      <img src={imgGroup1} alt="Group 1" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <span className="font-['SF_Pro:Bold',sans-serif] text-[28px] text-[#0ca99a] leading-none">
                      +
                    </span>
                  </div>
                </div>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] mb-1">
                  {formData.sport} • {formData.country}
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                  {formData.email}
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-[#f2f2f2]">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 font-['SF_Pro:Semibold',sans-serif] text-[15px] transition-colors border-b-2 ${
                activeTab === 'profile'
                  ? 'text-[#0ca99a] border-[#0ca99a]'
                  : 'text-[#666666] border-transparent hover:text-[#1a1a1a]'
              }`}
            >
              Mon profil
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`px-6 py-3 font-['SF_Pro:Semibold',sans-serif] text-[15px] transition-colors border-b-2 ${
                activeTab === 'subscription'
                  ? 'text-[#0ca99a] border-[#0ca99a]'
                  : 'text-[#666666] border-transparent hover:text-[#1a1a1a]'
              }`}
            >
              Abonnement
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-6 py-3 font-['SF_Pro:Semibold',sans-serif] text-[15px] transition-colors border-b-2 ${
                activeTab === 'payments'
                  ? 'text-[#0ca99a] border-[#0ca99a]'
                  : 'text-[#666666] border-transparent hover:text-[#1a1a1a]'
              }`}
            >
              Paiements
            </button>
          </div>

          {/* Contenu des tabs */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                  Informations personnelles
                </h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-[#0ca99a] text-white px-6 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:bg-[#0ba08f] transition-colors"
                  >
                    Modifier le profil
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleCancel}
                      className="bg-[#e6ebef] text-[#1a1a1a] px-6 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:bg-[#d4dce3] transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleSave}
                      className="bg-[#0ca99a] text-white px-6 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:bg-[#0ba08f] transition-colors"
                    >
                      Enregistrer
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Nom complet
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0ca99a] transition-colors"
                    />
                  ) : (
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                      {formData.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0ca99a] transition-colors"
                    />
                  ) : (
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                      {formData.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Téléphone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0ca99a] transition-colors"
                    />
                  ) : (
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                      {formData.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Date de naissance
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      placeholder="JJ/MM/AAAA"
                      className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0ca99a] transition-colors"
                    />
                  ) : (
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                      {formData.dateOfBirth}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Discipline sportive
                  </label>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                    {formData.sport}
                  </p>
                </div>

                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Catégorie
                  </label>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                    {formData.category}
                  </p>
                </div>

                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Club actuel
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="club"
                      value={formData.club}
                      onChange={handleInputChange}
                      className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0ca99a] transition-colors"
                    />
                  ) : (
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                      {formData.club}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Pays
                  </label>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                    {formData.country}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                    Biographie
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-3 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0ca99a] transition-colors resize-none"
                    />
                  ) : (
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] bg-[#f5f8ff] rounded-lg px-4 py-3">
                      {formData.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'subscription' && (
            <div className="space-y-6">
              {/* Carte d'abonnement actuel */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-6">
                  Mon abonnement
                </h2>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#0ca99a] to-[#0ba08f] rounded-lg text-white mb-6">
                  <div>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[24px] mb-2">
                      {subscriptionType === 'premium' ? 'Premium' : 'Free'}
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] opacity-90">
                      {subscriptionType === 'premium' ? '50€ / mois' : 'Gratuit'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] opacity-90 mb-1">
                      Prochain paiement
                    </p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[18px]">
                      {subscriptionType === 'premium' ? '01/02/2025' : '-'}
                    </p>
                  </div>
                </div>

                {/* Options d'abonnement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Free Plan */}
                  <div className={`border-2 rounded-lg p-6 ${subscriptionType === 'free' ? 'border-[#0ca99a] bg-[#f0fdfa]' : 'border-[#f2f2f2]'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                        Free
                      </h3>
                      <p className="font-['SF_Pro:Semibold',sans-serif] text-[24px] text-[#1a1a1a]">
                        0€
                      </p>
                    </div>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-4">
                      Accès aux fonctionnalités de base
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <span className="text-[#0ca99a]">✓</span>
                        <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                          Profil athlète
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#0ca99a]">✓</span>
                        <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                          Recherche d'offres
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#0ca99a]">✓</span>
                        <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                          Messages (limité)
                        </span>
                      </li>
                    </ul>
                    {subscriptionType === 'free' ? (
                      <button className="w-full bg-[#0ca99a] text-white px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] cursor-default">
                        Plan actuel
                      </button>
                    ) : (
                      <button
                        onClick={() => setSubscriptionType('free')}
                        className="w-full border-2 border-[#0ca99a] text-[#0ca99a] px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:bg-[#0ca99a] hover:text-white transition-colors"
                      >
                        Choisir ce plan
                      </button>
                    )}
                  </div>

                  {/* Premium Plan */}
                  <div className={`border-2 rounded-lg p-6 ${subscriptionType === 'premium' ? 'border-[#0ca99a] bg-[#f0fdfa]' : 'border-[#f2f2f2]'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                        Premium
                      </h3>
                      <p className="font-['SF_Pro:Semibold',sans-serif] text-[24px] text-[#1a1a1a]">
                        50€<span className="text-[14px]">/mois</span>
                      </p>
                    </div>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-4">
                      Accès à toutes les fonctionnalités
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <span className="text-[#0ca99a]">✓</span>
                        <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                          Toutes les fonctionnalités Free
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#0ca99a]">✓</span>
                        <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                          Messages illimités
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#0ca99a]">✓</span>
                        <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                          Statistiques avancées
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#0ca99a]">✓</span>
                        <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                          Support prioritaire
                        </span>
                      </li>
                    </ul>
                    {subscriptionType === 'premium' ? (
                      <button className="w-full bg-[#0ca99a] text-white px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] cursor-default">
                        Plan actuel
                      </button>
                    ) : (
                      <button
                        onClick={() => setSubscriptionType('premium')}
                        className="w-full bg-[#0ca99a] text-white px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:bg-[#0ba08f] transition-colors"
                      >
                        Choisir ce plan
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              {/* Paiements à venir */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-6">
                  Paiements à venir
                </h2>
                <div className="space-y-3">
                  {upcomingPayments.map((payment) => (
                    <div
                      key={payment.id}
                      className="border border-[#f2f2f2] rounded-lg p-4 hover:bg-[#f5f8ff] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                            {payment.description}
                          </p>
                          <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                            {payment.date}
                          </p>
                        </div>
                        <div className="text-right mr-4">
                          <p className="font-['SF_Pro:Semibold',sans-serif] text-[18px] text-[#1a1a1a] mb-1">
                            {payment.amount.toLocaleString('fr-FR')} €
                          </p>
                          <span
                            className="font-['SF_Pro:Semibold',sans-serif] text-[12px] px-3 py-1 rounded-full inline-block"
                            style={{ 
                              backgroundColor: `${payment.statusColor}20`,
                              color: payment.statusColor
                            }}
                          >
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historique des transactions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-6">
                  Historique des transactions
                </h2>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="border border-[#f2f2f2] rounded-lg p-4 hover:bg-[#f5f8ff] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                            {transaction.description}
                          </p>
                          <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                            {transaction.date}
                          </p>
                        </div>
                        <div className="text-right mr-4">
                          <p className="font-['SF_Pro:Semibold',sans-serif] text-[18px] text-[#1a1a1a] mb-1">
                            {transaction.amount.toLocaleString('fr-FR')} €
                          </p>
                          <span
                            className="font-['SF_Pro:Semibold',sans-serif] text-[12px] px-3 py-1 rounded-full inline-block"
                            style={{ 
                              backgroundColor: `${transaction.statusColor}20`,
                              color: transaction.statusColor
                            }}
                          >
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informations de paiement */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-6">
                  Informations de paiement
                </h2>
                <div className="space-y-4">
                  <div className="border border-[#f2f2f2] rounded-lg p-4">
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                      Carte bancaire
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-4">
                      •••• •••• •••• 4242
                    </p>
                    <button className="text-[#0ca99a] font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:underline">
                      Modifier
                    </button>
                  </div>
                  <div className="border border-[#f2f2f2] rounded-lg p-4">
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-2">
                      Compte bancaire
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-4">
                      FR76 1234 5678 9012 3456 7890 123
                    </p>
                    <button className="text-[#0ca99a] font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:underline">
                      Modifier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

