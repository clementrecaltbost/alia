import { useState } from 'react';
import { Link } from 'react-router-dom';

const logoSet = '/assets/Logo set.svg';
const imgGroup = '/assets/group-menu-dashboard.svg';
const img1 = '/assets/fi-9364298-dashboard.svg';
const img2 = '/assets/fi-11326152-dashboard.svg';
const img3 = '/assets/fi-9446889-dashboard.svg';
const img4 = '/assets/fi-471664-dashboard.svg';
const imgLayer2 = '/assets/layer-2-search-dashboard.svg';
const imgFi9347603 = '/assets/fi-9347603-dashboard.svg';
const img8 = '/assets/flag-fr-dashboard.svg';
const img9 = '/assets/fi-9347603-dropdown-dashboard.svg';
const img10 = '/assets/fi-5770911-dashboard.svg';
const img11 = '/assets/fi-2040504-dashboard.svg';

// Logos des marques
const brandLogos = {
  'Nike': 'https://cdn.simpleicons.org/nike/000000',
  'Adidas': 'https://cdn.simpleicons.org/adidas/000000',
  'RedBull': 'https://cdn.simpleicons.org/redbull/DB2032',
  'Under Armour': 'https://cdn.simpleicons.org/underarmour/000000',
  'Puma': 'https://cdn.simpleicons.org/puma/000000',
  'Decathlon': 'https://logo.clearbit.com/decathlon.fr',
  'ASICS': 'https://logo.clearbit.com/asics.com',
  'New Balance': 'https://cdn.simpleicons.org/newbalance/000000',
  'Gymshark': 'https://logo.clearbit.com/gymshark.com',
  'Reebok': 'https://cdn.simpleicons.org/reebok/000000',
  'Lululemon': 'https://logo.clearbit.com/lululemon.com',
  'The North Face': 'https://cdn.simpleicons.org/thenorthface/000000',
  'Fila': 'https://logo.clearbit.com/fila.com',
};

// Offres de partenariats
const offers = [
  {
    id: 1,
    company: 'Nike',
    logo: brandLogos.Nike,
    title: 'Ambassadeur de marque - Collection Running',
    description: 'Création de contenu Instagram et TikTok (3 posts/mois), participation à 2 événements running par an, port de la collection lors des compétitions.',
    tasks: [
      '3 publications Instagram/mois',
      '2 stories par semaine',
      'Participation à 2 événements/an',
      'Port de la collection en compétition'
    ],
    remuneration: '2500 €/mois',
    duration: '12 mois',
    location: 'France',
    category: 'Ambassadeur',
    posted: 'Il y a 2 jours',
  },
  {
    id: 2,
    company: 'Adidas',
    logo: brandLogos.Adidas,
    title: 'Partenaire athlète - Football',
    description: 'Shooting photo pour campagne printemps-été, création de contenu vidéo pour réseaux sociaux, participation à un événement de lancement produit.',
    tasks: [
      'Shooting photo (1 jour)',
      '3 vidéos TikTok',
      'Participation événement lancement',
      'Test et feedback produits'
    ],
    remuneration: '5000 €',
    duration: 'Ponctuel',
    location: 'Paris',
    category: 'Campagne',
    posted: 'Il y a 5 heures',
  },
  {
    id: 3,
    company: 'RedBull',
    logo: brandLogos.RedBull,
    title: 'Athlète sponsorisé - Sports extrêmes',
    description: 'Partenaire pour événements RedBull, création de contenu aventure/sport, représentation de la marque lors de compétitions internationales.',
    tasks: [
      'Contenu aventure (5 vidéos/an)',
      'Participation événements RedBull',
      'Représentation en compétition',
      'Contenu exclusif Instagram'
    ],
    remuneration: '4000 €/mois',
    duration: '24 mois',
    location: 'International',
    category: 'Sponsoring',
    posted: 'Il y a 1 jour',
  },
  {
    id: 4,
    company: 'Under Armour',
    logo: brandLogos['Under Armour'],
    title: 'Influenceur fitness - Programme d\'entraînement',
    description: 'Création d\'un programme d\'entraînement exclusif, vidéos YouTube (1/mois), posts Instagram quotidiens, collaboration sur nouvelle collection.',
    tasks: [
      'Programme d\'entraînement exclusif',
      '1 vidéo YouTube/mois',
      'Posts Instagram quotidiens',
      'Collaboration design collection'
    ],
    remuneration: '3500 €/mois',
    duration: '18 mois',
    location: 'Europe',
    category: 'Influenceur',
    posted: 'Il y a 3 jours',
  },
  {
    id: 5,
    company: 'Puma',
    logo: brandLogos.Puma,
    title: 'Athlète ambassadeur - Basketball',
    description: 'Représentation de la marque en compétition, création de contenu pour réseaux sociaux, participation à des événements communautaires.',
    tasks: [
      'Représentation en compétition',
      '4 posts Instagram/mois',
      'Événements communautaires',
      'Mentions produits'
    ],
    remuneration: '2800 €/mois',
    duration: '12 mois',
    location: 'France',
    category: 'Ambassadeur',
    posted: 'Il y a 6 heures',
  },
  {
    id: 6,
    company: 'Decathlon',
    logo: brandLogos.Decathlon,
    title: 'Testeur produit - Équipement sportif',
    description: 'Test et évaluation de nouveaux produits, création de contenu review, participation à des focus groups, feedback constructif.',
    tasks: [
      'Test produits (10/an)',
      'Vidéos review YouTube',
      'Focus groups (4/an)',
      'Feedback détaillé'
    ],
    remuneration: '1500 €/mois + produits',
    duration: '12 mois',
    location: 'France',
    category: 'Testeur',
    posted: 'Il y a 4 jours',
  },
  {
    id: 7,
    company: 'ASICS',
    logo: brandLogos.ASICS,
    title: 'Partenaire running - Marathon',
    description: 'Participation à 3 marathons majeurs, création de contenu training, vlogs de préparation, représentation de la marque.',
    tasks: [
      '3 marathons majeurs',
      'Vlogs préparation',
      'Contenu training',
      'Représentation marque'
    ],
    remuneration: '6000 €',
    duration: 'Ponctuel',
    location: 'International',
    category: 'Événement',
    posted: 'Il y a 2 jours',
  },
  {
    id: 8,
    company: 'New Balance',
    logo: brandLogos['New Balance'],
    title: 'Créateur de contenu - Lifestyle sportif',
    description: 'Création de contenu lifestyle autour du sport, collaboration sur collections limitées, événements exclusifs, partenariat créatif.',
    tasks: [
      'Contenu lifestyle (8 posts/mois)',
      'Collaboration collections',
      'Événements exclusifs',
      'Direction créative'
    ],
    remuneration: '3200 €/mois',
    duration: '12 mois',
    location: 'Europe',
    category: 'Créateur',
    posted: 'Il y a 1 jour',
  },
  {
    id: 9,
    company: 'Gymshark',
    logo: brandLogos.Gymshark,
    title: 'Athlète Gymshark - Fitness',
    description: 'Programme d\'entraînement exclusif Gymshark, création de contenu fitness, participation à des événements, représentation de la marque.',
    tasks: [
      'Programme d\'entraînement',
      'Contenu fitness (10 posts/mois)',
      'Événements Gymshark',
      'Représentation marque'
    ],
    remuneration: '4500 €/mois',
    duration: '24 mois',
    location: 'International',
    category: 'Athlète',
    posted: 'Il y a 5 heures',
  },
  {
    id: 10,
    company: 'Reebok',
    logo: brandLogos.Reebok,
    title: 'Partenaire CrossFit - Programme d\'entraînement',
    description: 'Création de programmes CrossFit exclusifs, vidéos d\'entraînement, participation à des compétitions, représentation de la marque.',
    tasks: [
      'Programmes CrossFit',
      'Vidéos entraînement',
      'Compétitions CrossFit',
      'Représentation marque'
    ],
    remuneration: '3800 €/mois',
    duration: '18 mois',
    location: 'Europe',
    category: 'Partenaire',
    posted: 'Il y a 3 jours',
  },
  {
    id: 11,
    company: 'Lululemon',
    logo: brandLogos.Lululemon,
    title: 'Ambassadeur yoga - Bien-être',
    description: 'Création de contenu yoga et bien-être, cours en ligne, événements communautaires, représentation de la marque dans l\'univers wellness.',
    tasks: [
      'Contenu yoga (6 posts/mois)',
      'Cours en ligne',
      'Événements communautaires',
      'Représentation wellness'
    ],
    remuneration: '3000 €/mois',
    duration: '12 mois',
    location: 'Europe',
    category: 'Ambassadeur',
    posted: 'Il y a 2 jours',
  },
  {
    id: 12,
    company: 'The North Face',
    logo: brandLogos['The North Face'],
    title: 'Explorateur - Aventure outdoor',
    description: 'Documentation d\'expéditions outdoor, création de contenu aventure, test d\'équipements en conditions extrêmes, storytelling.',
    tasks: [
      'Documentation expéditions',
      'Contenu aventure',
      'Test équipements extrêmes',
      'Storytelling marque'
    ],
    remuneration: '5000 €/mois',
    duration: '24 mois',
    location: 'International',
    category: 'Explorateur',
    posted: 'Il y a 1 jour',
  },
  {
    id: 13,
    company: 'Fila',
    logo: brandLogos.Fila,
    title: 'Partenaire tennis - Collection sportive',
    description: 'Représentation de la marque en compétition, création de contenu tennis, participation à des événements, collaboration sur design.',
    tasks: [
      'Représentation compétition',
      'Contenu tennis',
      'Événements Fila',
      'Collaboration design'
    ],
    remuneration: '2700 €/mois',
    duration: '12 mois',
    location: 'Europe',
    category: 'Partenaire',
    posted: 'Il y a 4 heures',
  },
];

export default function AthleteSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedOffer, setSelectedOffer] = useState(null);

  const categories = ['Tous', 'Ambassadeur', 'Campagne', 'Sponsoring', 'Influenceur', 'Testeur', 'Événement', 'Créateur', 'Athlète', 'Partenaire', 'Explorateur'];

  // Filtrer les offres
  const filteredOffers = offers.filter(offer => {
    const matchesSearch = 
      offer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || offer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#f5f8ff] min-h-screen" data-name="Search">
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
            <div className="bg-[#012d54] border-l-[6px] border-[#66c9bf] flex items-center gap-3 h-[44px] px-4 rounded-r mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img2} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#66c9bf]">
                Recherche
              </p>
            </div>
            <Link to="/athlete-messages" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3 relative">
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
              Offres de partenariats
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
          
          {/* Search and Filters */}
          <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-white border border-[#f2f2f2] rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="w-5 h-5">
                  <img alt="" className="w-full h-full" src={imgLayer2} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher une offre, une marque..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] placeholder:text-[#b3b3b3]"
                />
              </div>
              <div className="bg-white border border-[#f2f2f2] rounded-lg px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-[#f5f8ff] transition-colors">
                <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                  {selectedCategory}
                </p>
                <div className="w-4 h-4">
                  <img alt="" className="w-full h-full" src={imgFi9347603} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
              </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#0ca99a] text-white'
                      : 'bg-white text-[#666666] border border-[#f2f2f2] hover:bg-[#f5f8ff]'
                  }`}
                >
                  {category}
                </button>
              ))}
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                onClick={() => setSelectedOffer(offer)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-[#0ca99a]"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center border-2 border-[#f2f2f2] flex-shrink-0">
                    <img
                      alt={offer.company}
                      className="w-full h-full object-contain p-2"
                      src={offer.logo}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[17px] text-[#1a1a1a] mb-1 line-clamp-2">
                      {offer.title}
                    </h3>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                      {offer.company}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-4 line-clamp-3">
                  {offer.description}
                </p>

                {/* Tasks Preview */}
                <div className="mb-4">
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d] mb-2">
                    Missions principales :
                  </p>
                  <ul className="space-y-1">
                    {offer.tasks.slice(0, 2).map((task, index) => (
                      <li key={index} className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666] flex items-start gap-2">
                        <span className="text-[#0ca99a] mt-1">•</span>
                        <span className="line-clamp-1">{task}</span>
                      </li>
                    ))}
                    {offer.tasks.length > 2 && (
                      <li className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#b3b3b3]">
                        +{offer.tasks.length - 2} autres missions
                      </li>
                    )}
                  </ul>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-[#f2f2f2]">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#0ca99a] mb-1">
                        {offer.remuneration}
                      </p>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                        {offer.duration} • {offer.location}
                      </p>
                    </div>
                    <span className="bg-[#e6f5f3] text-[#0ca99a] px-3 py-1 rounded-full font-['SF_Pro:Semibold',sans-serif] text-[11px]">
                      {offer.category}
                    </span>
                  </div>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[#b3b3b3]">
                    Publié {offer.posted}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div className="text-center py-16">
              <p className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#666666] mb-2">
                Aucune offre trouvée
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#b3b3b3]">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal Détail Offre */}
      {selectedOffer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center border-2 border-[#f2f2f2] flex-shrink-0">
                  <img
                    alt={selectedOffer.company}
                    className="w-full h-full object-contain p-3"
                    src={selectedOffer.logo}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[23px] text-[#1a1a1a] mb-2">
                    {selectedOffer.title}
                  </h2>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[#666666] mb-2">
                    {selectedOffer.company}
                  </p>
                  <span className="inline-block bg-[#e6f5f3] text-[#0ca99a] px-3 py-1 rounded-full font-['SF_Pro:Semibold',sans-serif] text-[12px]">
                    {selectedOffer.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedOffer(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f8ff] transition-colors"
                >
                  <span className="text-[#666666] text-2xl">×</span>
                </button>
              </div>

              {/* Rémunération */}
              <div className="bg-[#f5f8ff] rounded-xl p-6 mb-6">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#4d4d4d] mb-2">
                  Rémunération
                </p>
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#0ca99a] mb-2">
                  {selectedOffer.remuneration}
                </p>
                <div className="flex gap-4 text-[14px] text-[#666666]">
                  <span>Durée : {selectedOffer.duration}</span>
                  <span>•</span>
                  <span>Localisation : {selectedOffer.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[17px] text-[#1a1a1a] mb-3">
                  Description
                </h3>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] leading-relaxed">
                  {selectedOffer.description}
                </p>
              </div>

              {/* Missions */}
              <div className="mb-6">
                <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[17px] text-[#1a1a1a] mb-3">
                  Missions à réaliser
                </h3>
                <ul className="space-y-2">
                  {selectedOffer.tasks.map((task, index) => (
                    <li key={index} className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] flex items-start gap-3">
                      <span className="text-[#0ca99a] mt-1 flex-shrink-0">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6 border-t border-[#f2f2f2]">
                <button className="flex-1 bg-[#0ca99a] text-white px-6 py-3 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[15px] hover:bg-[#0ba08f] transition-colors">
                  Postuler
                </button>
                <button
                  onClick={() => setSelectedOffer(null)}
                  className="px-6 py-3 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#666666] border border-[#f2f2f2] hover:bg-[#f5f8ff] transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

