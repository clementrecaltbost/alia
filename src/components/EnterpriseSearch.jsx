import { useState } from 'react';
import { Link } from 'react-router-dom';

const logoSet = '/assets/Logo set.svg';
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

// Profils d'athlètes
const athletes = [
  {
    id: 1,
    name: 'Teo Carilli',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    sport: 'Handball',
    category: 'Ligue 1',
    location: 'France',
    followers: '45K',
    reach: '120K',
    achievements: ['Champion de France 2024', 'Meilleur buteur'],
    description: 'Joueur professionnel de handball, passionné et engagé. Recherche partenariats avec des marques alignées avec mes valeurs.',
    price: '2500 €/mois',
  },
  {
    id: 2,
    name: 'Marie Dubois',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    sport: 'Tennis',
    category: 'WTA 150',
    location: 'France',
    followers: '78K',
    reach: '200K',
    achievements: ['Quart de finale Roland-Garros', 'Top 200 WTA'],
    description: 'Tennisman professionnelle, active sur les réseaux sociaux. Création de contenu lifestyle et sportif.',
    price: '3500 €/mois',
  },
  {
    id: 3,
    name: 'Lucas Martin',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    sport: 'Football',
    category: 'Ligue 2',
    location: 'France',
    followers: '125K',
    reach: '350K',
    achievements: ['Promotion en Ligue 2', 'Meilleur espoir'],
    description: 'Footballeur professionnel, grande communauté sur Instagram et TikTok. Disponible pour shootings et événements.',
    price: '5000 €/mois',
  },
  {
    id: 4,
    name: 'Emma Laurent',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    sport: 'Natation',
    category: 'National',
    location: 'France',
    followers: '32K',
    reach: '85K',
    achievements: ['Championne de France', 'Record personnel'],
    description: 'Nageuse de haut niveau, spécialisée en nage libre. Contenu éducatif et motivationnel.',
    price: '2000 €/mois',
  },
  {
    id: 5,
    name: 'Thomas Bernard',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    sport: 'Basketball',
    category: 'Pro B',
    location: 'France',
    followers: '92K',
    reach: '250K',
    achievements: ['Playoffs Pro B', 'All-Star Game'],
    description: 'Basketteur professionnel, influenceur sportif. Collaboration avec plusieurs marques de sportswear.',
    price: '4000 €/mois',
  },
  {
    id: 6,
    name: 'Camille Rousseau',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    sport: 'Athlétisme',
    category: 'Elite',
    location: 'France',
    followers: '58K',
    reach: '150K',
    achievements: ['Championne de France 100m', 'Record personnel'],
    description: 'Athlète de sprint, participations aux compétitions internationales. Contenu training et motivation.',
    price: '3000 €/mois',
  },
  {
    id: 7,
    name: 'Antoine Moreau',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    sport: 'Cyclisme',
    category: 'Elite',
    location: 'France',
    followers: '67K',
    reach: '180K',
    achievements: ['Tour de France', 'Champion régional'],
    description: 'Cycliste professionnel, passionné de montagne. Contenu aventure et équipement.',
    price: '3500 €/mois',
  },
  {
    id: 8,
    name: 'Léa Petit',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    sport: 'Gymnastique',
    category: 'Elite',
    location: 'France',
    followers: '41K',
    reach: '110K',
    achievements: ['Championne de France', 'Médaillée européenne'],
    description: 'Gymnaste de haut niveau, contenu artistique et technique. Disponible pour événements et shootings.',
    price: '2800 €/mois',
  },
  {
    id: 9,
    name: 'Maxime Girard',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    sport: 'Rugby',
    category: 'Top 14',
    location: 'France',
    followers: '103K',
    reach: '280K',
    achievements: ['Champion de France', 'Sélection équipe de France'],
    description: 'Rugbyman professionnel, grande visibilité médiatique. Partenariats premium disponibles.',
    price: '6000 €/mois',
  },
  {
    id: 10,
    name: 'Julie Lefebvre',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    sport: 'Volleyball',
    category: 'Ligue A',
    location: 'France',
    followers: '55K',
    reach: '140K',
    achievements: ['Championne de France', 'Meilleure joueuse'],
    description: 'Volleyeuse professionnelle, active sur les réseaux. Contenu lifestyle et sportif.',
    price: '3200 €/mois',
  },
  {
    id: 11,
    name: 'Pierre Simon',
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
    sport: 'Judo',
    category: 'Elite',
    location: 'France',
    followers: '38K',
    reach: '95K',
    achievements: ['Champion de France', 'Médaillé européen'],
    description: 'Judoka de haut niveau, valeurs fortes. Recherche partenariats durables et éthiques.',
    price: '2500 €/mois',
  },
  {
    id: 12,
    name: 'Marine Durand',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    sport: 'Équitation',
    category: 'Elite',
    location: 'France',
    followers: '49K',
    reach: '130K',
    achievements: ['Championne de France', 'Concours internationaux'],
    description: 'Cavalière professionnelle, spécialisée en saut d\'obstacles. Contenu équestre et lifestyle.',
    price: '3000 €/mois',
  },
  {
    id: 13,
    name: 'Nicolas Leroy',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    sport: 'Golf',
    category: 'Pro',
    location: 'France',
    followers: '72K',
    reach: '190K',
    achievements: ['Tournoi professionnel', 'Top 100 français'],
    description: 'Golfeur professionnel, contenu technique et lifestyle. Disponible pour événements et shootings.',
    price: '4000 €/mois',
  },
];

export default function EnterpriseSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('Tous');
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  const sports = ['Tous', 'Handball', 'Tennis', 'Football', 'Natation', 'Basketball', 'Athlétisme', 'Cyclisme', 'Gymnastique', 'Rugby', 'Volleyball', 'Judo', 'Équitation', 'Golf'];

  // Filtrer les athlètes
  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = 
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = selectedSport === 'Tous' || athlete.sport === selectedSport;
    return matchesSearch && matchesSport;
  });

  return (
    <div className="bg-[#f5f8ff] min-h-screen" data-name="Enterprise Search">
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
            <div className="bg-[#012d54] border-l-[6px] border-[#66c9bf] flex items-center gap-3 h-[44px] px-4 rounded-r mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img2} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#66c9bf]">
                Recherche d'athlètes
              </p>
            </div>
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
            <Link to="/enterprise-support" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors">
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
              Recherche d'athlètes
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
                  placeholder="Rechercher un athlète, un sport..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] placeholder:text-[#b3b3b3]"
                />
              </div>
              <div className="bg-white border border-[#f2f2f2] rounded-lg px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-[#f5f8ff] transition-colors">
                <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                  {selectedSport}
                </p>
                <div className="w-4 h-4">
                  <img alt="" className="w-full h-full" src={imgFi9347603} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
              </div>
          </div>

          {/* Sport Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
              {sports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setSelectedSport(sport)}
                  className={`px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] transition-colors ${
                    selectedSport === sport
                      ? 'bg-[#0ca99a] text-white'
                      : 'bg-white text-[#666666] border border-[#f2f2f2] hover:bg-[#f5f8ff]'
                  }`}
                >
                  {sport}
                </button>
              ))}
          </div>

          {/* Athletes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAthletes.map((athlete) => (
              <div
                key={athlete.id}
                onClick={() => setSelectedAthlete(athlete)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-[#0ca99a]"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f2f2f2]">
                    <img
                      alt={athlete.name}
                      className="w-full h-full object-cover"
                      src={athlete.avatar}
                      onError={(e) => {
                        e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[17px] text-[#1a1a1a] mb-1">
                      {athlete.name}
                    </h3>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                      {athlete.sport} • {athlete.category}
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#b3b3b3] mt-1">
                      {athlete.location}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#f5f8ff] rounded-lg p-3">
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[#666666] mb-1">
                      Abonnés
                    </p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a]">
                      {athlete.followers}
                    </p>
                  </div>
                  <div className="bg-[#f5f8ff] rounded-lg p-3">
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[#666666] mb-1">
                      Portée
                    </p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a]">
                      {athlete.reach}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-4 line-clamp-2">
                  {athlete.description}
                </p>

                {/* Achievements Preview */}
                <div className="mb-4">
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d] mb-2">
                    Palmarès :
                  </p>
                  <ul className="space-y-1">
                    {athlete.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666] flex items-start gap-2">
                        <span className="text-[#0ca99a] mt-1">•</span>
                        <span className="line-clamp-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-[#f2f2f2]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#0ca99a] mb-1">
                        {athlete.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAthletes.length === 0 && (
            <div className="text-center py-16">
              <p className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#666666] mb-2">
                Aucun athlète trouvé
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#b3b3b3]">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal Détail Athlète */}
      {selectedAthlete && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedAthlete(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f2f2f2]">
                  <img
                    alt={selectedAthlete.name}
                    className="w-full h-full object-cover"
                    src={selectedAthlete.avatar}
                    onError={(e) => {
                      e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[23px] text-[#1a1a1a] mb-2">
                    {selectedAthlete.name}
                  </h2>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[#666666] mb-2">
                    {selectedAthlete.sport} • {selectedAthlete.category}
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#b3b3b3]">
                    {selectedAthlete.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAthlete(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f8ff] transition-colors"
                >
                  <span className="text-[#666666] text-2xl">×</span>
                </button>
              </div>

              {/* Stats */}
              <div className="bg-[#f5f8ff] rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-1">
                      Abonnés
                    </p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[23px] text-[#1a1a1a]">
                      {selectedAthlete.followers}
                    </p>
                  </div>
                  <div>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] mb-1">
                      Portée moyenne
                    </p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[23px] text-[#1a1a1a]">
                      {selectedAthlete.reach}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[17px] text-[#1a1a1a] mb-3">
                  À propos
                </h3>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] leading-relaxed">
                  {selectedAthlete.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h3 className="font-['SF_Pro:Semibold',sans-serif] text-[17px] text-[#1a1a1a] mb-3">
                  Palmarès
                </h3>
                <ul className="space-y-2">
                  {selectedAthlete.achievements.map((achievement, index) => (
                    <li key={index} className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666] flex items-start gap-3">
                      <span className="text-[#0ca99a] mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-6 bg-[#e6f5f3] rounded-xl p-4">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#4d4d4d] mb-2">
                  Tarif indicatif
                </p>
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#0ca99a]">
                  {selectedAthlete.price}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6 border-t border-[#f2f2f2]">
                <button className="flex-1 bg-[#0ca99a] text-white px-6 py-3 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[15px] hover:bg-[#0ba08f] transition-colors">
                  Contacter
                </button>
                <button
                  onClick={() => setSelectedAthlete(null)}
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

