import { useState } from 'react';
import { Link } from 'react-router-dom';

// Images servies depuis le dossier public
const logoSet = '/assets/Logo set.svg';
const imgSizeMd = '/assets/avatar-dashboard.svg';
const imgEllipse145 = '/assets/ellipse-145-dashboard.svg';
const imgEllipse146 = '/assets/ellipse-146-dashboard.svg';
const imgEllipse147 = '/assets/ellipse-147-dashboard.svg';
const imgEllipse148 = '/assets/ellipse-148-dashboard.svg';
const imgEllipse149 = '/assets/ellipse-149-dashboard.svg';
const imgEllipse150 = '/assets/ellipse-150-dashboard.svg';
const imgEllipse151 = '/assets/ellipse-151-dashboard.svg';
const imgEllipse152 = '/assets/ellipse-152-dashboard.svg';
const imgEllipse153 = '/assets/ellipse-153-dashboard.svg';
const imgCheck = '/assets/check-dashboard.svg';
const imgGroup = '/assets/group-menu-dashboard.svg';
const img1 = '/assets/fi-9364298-dashboard.svg';
const img2 = '/assets/fi-11326152-dashboard.svg';
const img3 = '/assets/fi-9446889-dashboard.svg';
const img4 = '/assets/fi-471664-dashboard.svg';
const imgLayer2 = '/assets/layer-2-search-dashboard.svg';
const imgGroup1 = '/assets/group-filter-dashboard.svg';
const imgGroup2 = '/assets/group-filter-2-dashboard.svg';
const imgGroup3 = '/assets/group-filter-3-dashboard.svg';
const imgFi9347603 = '/assets/fi-9347603-dashboard.svg';
const imgFi2360476 = '/assets/fi-2360476-dashboard.svg';
const imgGroup4 = '/assets/group-sponsors-dashboard.svg';
const imgGroup5 = '/assets/group-calendar-dashboard.svg';
const imgIconCaretLeft = '/assets/icon-caret-left-dashboard.svg';
const imgIconCaretRight = '/assets/icon-caret-right-dashboard.svg';
const img7 = '/assets/dot-dashboard.svg';
const img8 = '/assets/flag-fr-dashboard.svg';
const img9 = '/assets/fi-9347603-dropdown-dashboard.svg';
const img10 = '/assets/fi-5770911-dashboard.svg';
const img11 = '/assets/fi-2040504-dashboard.svg';
const imgGroup1Logo = '/assets/Group 1.svg';

// Composant Checkbox
function Checkbox({ checked, onChange, className }) {
  return (
    <button
      onClick={onChange}
      className={`relative shrink-0 size-[24px] cursor-pointer transition-all duration-200 ${className}`}
    >
      {checked ? (
        <>
          <div className="absolute inset-[16.67%] rounded-[2px] bg-[#0ca99a] transition-colors" />
          <div className="absolute inset-[16.67%]">
            <div className="absolute inset-[31.25%_21.88%]">
              <div className="absolute inset-[-12.5%_-8.33%]">
                <img className="block max-w-none size-full" alt="" src={imgCheck} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-[16.67%] rounded-[2px] border-[#a6aeba] border-[1.5px] border-solid transition-colors hover:border-[#0ca99a]" />
      )}
    </button>
  );
}

// Composant Avatar
function AvatarSet({ className }) {
  // Photo de profil réaliste générée par IA
  const avatarUrl = 'https://randomuser.me/api/portraits/men/32.jpg';
  
  return (
    <div className={`${className} overflow-hidden`}>
      <img 
        className="w-full h-full object-cover" 
        alt="Avatar" 
        src={avatarUrl}
        onError={(e) => {
          // Fallback vers l'image locale si l'API ne fonctionne pas
          e.target.src = imgSizeMd;
        }} 
      />
    </div>
  );
}

// Logos des marques (utilisant Simple Icons et autres sources)
const brandLogos = {
  'Adidas': 'https://cdn.simpleicons.org/adidas/000000',
  'Under Armour': 'https://cdn.simpleicons.org/underarmour/000000',
  'RedBull': 'https://cdn.simpleicons.org/redbull/DB2032',
  'Rogue Fitness': 'https://logo.clearbit.com/roguefitness.com',
  'ASICS': 'https://logo.clearbit.com/asics.com',
  'Decathlon': 'https://logo.clearbit.com/decathlon.fr',
  'KIND Snacks': 'https://logo.clearbit.com/kindsnacks.com',
  'The North Face®': 'https://cdn.simpleicons.org/thenorthface/000000',
  'Gymshark': 'https://cdn.simpleicons.org/gymshark/000000',
};

// Fallbacks vers les images locales
const brandLogoFallbacks = {
  'Adidas': imgEllipse145,
  'Under Armour': imgEllipse147,
  'RedBull': imgEllipse148,
  'Rogue Fitness': imgEllipse149,
  'ASICS': imgEllipse150,
  'Decathlon': imgEllipse146,
  'KIND Snacks': imgEllipse151,
  'The North Face®': imgEllipse152,
  'Gymshark': imgEllipse153,
};

// Missions en cours
const missions = [
  { company: 'Adidas', mission: 'Publication Instagram', deadline: '12 Août, 2025', logo: brandLogos.Adidas },
  { company: 'Under Armour', mission: 'Team building event', deadline: '12 Juin, 2025', logo: brandLogos['Under Armour'] },
  { company: 'RedBull', mission: 'Shooting photo', deadline: '4 Mai, 2025', logo: brandLogos.RedBull },
  { company: 'Rogue Fitness', mission: 'Shooting photo', deadline: '2 Janvier, 2025', logo: brandLogos['Rogue Fitness'] },
  { company: 'ASICS', mission: 'Shooting photo', deadline: '25 Avril, 2024', logo: brandLogos.ASICS },
];

// Prochaines actions
const actions = [
  { text: 'Publication Instagram', checked: false },
  { text: 'Confirmer date shooting photo', checked: false },
  { text: 'Shooting photo', checked: true },
  { text: 'Poster story', checked: true },
  { text: 'Répondre aux messages', checked: false },
  { text: 'Envoyer facture Adidas', checked: false },
];

// Documents
const documents = [
  { company: 'Adidas', category: 'Contrat', status: 'Signé', statusColor: '#3da000', logo: brandLogos.Adidas },
  { company: 'Under Armour', category: 'Facture', status: 'En attente', statusColor: '#ff9f10', logo: brandLogos['Under Armour'] },
  { company: 'Decathlon', category: 'Déplacements', status: 'À ajouter', statusColor: '#e62300', logo: brandLogos.Decathlon },
  { company: 'RedBull', category: 'Facture', status: 'En attente', statusColor: '#ff9f10', logo: brandLogos.RedBull },
  { company: 'KIND Snacks', category: 'Facture', status: 'En attente', statusColor: '#ff9f10', logo: brandLogos['KIND Snacks'] },
];

export default function AthleteDashboard() {
  const [actionsState, setActionsState] = useState(actions);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleActionToggle = (index) => {
    const newActions = [...actionsState];
    newActions[index].checked = !newActions[index].checked;
    setActionsState(newActions);
  };

  // Valeurs correspondantes aux hauteurs des barres
  const barValues = {
    'Janv': 410,
    'Févr': 1010,
    'Mars': 700,
    'Avr': 800,
    'Mai': 640,
    'Juin': 1150,
    'Juil': 560,
    'Août': 1010,
    'Sept': 1150,
  };

  return (
    <div className="bg-[#f5f8ff] min-h-screen" data-name="Dashboard">
      <div className="flex">
        {/* Sidenav */}
        <div className="fixed bg-[#013563] h-screen w-[254px] flex flex-col" data-name="Sidenav">
          <Link to="/" className="flex justify-center pt-8 pb-6">
            <div className="h-[38px] w-[104px]">
              <img src={logoSet} alt="Alia Logo" className="h-full w-full object-contain" />
            </div>
          </Link>

          <nav className="flex-1 px-4 pt-6">
            <div className="bg-[#012d54] border-l-[6px] border-[#66c9bf] flex items-center gap-3 h-[44px] px-4 rounded-r mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img1} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#66c9bf]">
                Tableau de bord
              </p>
            </div>
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Link to="/athlete-profile">
                <AvatarSet className="w-12 h-12 rounded-full border-2 border-white shadow-md cursor-pointer hover:opacity-80 transition-opacity" />
              </Link>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#666666]">
                    Bonjour,
                  </p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#121212]">
                    Teo Carilli
                  </p>
                  <div className="flex items-center gap-1 ml-1">
                    <div className="w-4 h-4">
                      <img src={imgGroup1Logo} alt="Group 1" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <span className="font-['SF_Pro:Bold',sans-serif] text-[18px] text-[#0ca99a] leading-none">
                      +
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                    Handball
                  </p>
                  <div className="w-[5px] h-[5px]">
                    <img alt="" className="w-full h-full" src={img7} onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                    France
                  </p>
                </div>
              </div>
            </div>
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
                <button className="w-[18px] h-[18px] hover:opacity-70 transition-opacity">
                  <img alt="" className="w-full h-full" src={img10} onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
                <button className="w-[18px] h-[18px] hover:opacity-70 transition-opacity">
                  <img alt="" className="w-full h-full" src={img11} onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-l-4 border-[#0ca99a] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
                  3500 €
                </p>
                <div className="w-8 h-8">
                  <img alt="" className="w-full h-full" src={imgFi2360476} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                    Revenus reçus
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                    Dernier virement : 12/08
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#0ca99a] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
                  2
                </p>
                <div className="w-8 h-8">
                  <img alt="" className="w-full h-full" src={imgGroup4} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                    Sponsors actifs
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                    Nouvelles demandes : 4
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#66c9bf] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
                  08/05/2026
                </p>
                <div className="w-8 h-8">
                  <img alt="" className="w-full h-full" src={imgGroup5} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                    Prochaine échéance
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                    Story Entreprise Y
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - 2 spans */}
            <div className="col-span-2 space-y-6">
              {/* Revenus mensuels */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                    Revenus mensuels
                  </h2>
                  <div className="bg-white border border-[#f2f2f2] flex items-center gap-2 h-7 px-3 rounded">
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                      Affichage : 9 mois
                    </p>
                    <div className="w-[14px] h-[14px]">
                      <img alt="" className="w-full h-full" src={imgFi9347603} onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[12px] text-[#1a1a1a] font-['SF_Pro:Regular',sans-serif]">
                    <span>2500</span>
                    <span>2000</span>
                    <span>1500</span>
                    <span>1000</span>
                    <span>500</span>
                  </div>
                  <div className="ml-12 flex items-end justify-between h-full relative">
                    {[
                      { month: 'Janv', height: 41, active: false },
                      { month: 'Févr', height: 101, active: false },
                      { month: 'Mars', height: 70, active: false },
                      { month: 'Avr', height: 80, active: false },
                      { month: 'Mai', height: 64, active: false },
                      { month: 'Juin', height: 115, active: false },
                      { month: 'Juil', height: 56, active: false },
                      { month: 'Août', height: 101, active: false },
                      { month: 'Sept', height: 115, active: false },
                    ].map((item) => (
                      <div 
                        key={item.month} 
                        className="flex flex-col items-center gap-3 relative"
                        onMouseEnter={() => {
                          setHoveredBar(item.month);
                          setHoveredValue(barValues[item.month]);
                        }}
                        onMouseLeave={() => {
                          setHoveredBar(null);
                          setHoveredValue(null);
                        }}
                      >
                        {hoveredBar === item.month && hoveredValue && (
                          <div className="absolute -top-8 bg-[#1a1a1a] text-white px-2 py-1 rounded text-[12px] font-['SF_Pro:Semibold',sans-serif] whitespace-nowrap z-10">
                            {hoveredValue} €
                          </div>
                        )}
                        <div
                          className={`w-[34px] rounded-md transition-all cursor-pointer ${
                            hoveredBar === item.month
                              ? 'bg-[#2f597f] scale-105'
                              : 'bg-[#c2cfda] hover:bg-[#a8b8c8]'
                          }`}
                          style={{ height: `${item.height}px` }}
                        />
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a]">
                          {item.month}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Missions en cours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                    Missions en cours
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="bg-white border border-[#f2f2f2] flex items-center gap-2 h-7 px-2 rounded">
                      <div className="w-[14px] h-[14px]">
                        <img alt="" className="w-full h-full" src={imgLayer2} onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#b3b3b3]">
                        Recherche
                      </p>
                    </div>
                    <button className="bg-white border border-[#f2f2f2] w-7 h-7 flex items-center justify-center rounded hover:bg-[#f5f8ff] transition-colors">
                      <div className="w-[14px] h-[14px]">
                        <img alt="" className="w-full h-full" src={imgGroup1} onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-[#e6ebef] border border-[#f2f2f2] rounded px-3 py-2 grid grid-cols-[1fr_2fr_1fr] gap-4">
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Entreprise</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Mission</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Échéance</p>
                  </div>
                  {missions.map((mission, index) => (
                    <div
                      key={index}
                      className="border border-[#f2f2f2] rounded px-3 py-2 grid grid-cols-[1fr_2fr_1fr] gap-4 items-center hover:bg-[#f5f8ff] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-white flex items-center justify-center border border-[#f2f2f2]">
                          <img 
                            alt={mission.company} 
                            className="w-full h-full object-contain p-0.5" 
                            src={mission.logo} 
                            onError={(e) => {
                              const fallback = brandLogoFallbacks[mission.company] || imgEllipse145;
                              e.target.src = fallback;
                              e.target.className = 'w-full h-full object-cover';
                            }} 
                          />
                        </div>
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a]">
                          {mission.company}
                        </p>
                      </div>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a]">
                        {mission.mission}
                      </p>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a]">
                        {mission.deadline}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#f2f2f2]">
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#6e6e6e]">
                    Page 1/1
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="bg-[#f9f9f9] w-[18px] h-[18px] flex items-center justify-center rounded hover:bg-[#e6ebef] transition-colors">
                      <img alt="" className="w-[14px] h-[14px]" src={imgIconCaretLeft} onError={(e) => { e.target.style.display = 'none'; }} />
                    </button>
                    <button className="bg-[#f2f2f2] w-[18px] h-[18px] flex items-center justify-center rounded hover:bg-[#e6ebef] transition-colors">
                      <img alt="" className="w-[14px] h-[14px]" src={imgIconCaretRight} onError={(e) => { e.target.style.display = 'none'; }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Prochaines actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                    Prochaines actions
                  </h2>
                  <button className="bg-white border border-[#ececec] h-8 px-3 rounded text-[15px] font-['SF_Pro:Semibold',sans-serif] text-[#666666] hover:bg-[#f5f8ff] transition-colors">
                    Voir tout
                  </button>
                </div>
                <div className="space-y-3">
                  {actionsState.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleActionToggle(index)}
                      className="w-full flex items-center gap-3 hover:bg-[#f5f8ff] p-2 rounded transition-colors group"
                    >
                      <Checkbox checked={action.checked} onChange={() => handleActionToggle(index)} />
                      <p
                        className={`font-['SF_Pro:Regular',sans-serif] text-[15px] text-left flex-1 ${
                          action.checked ? 'text-[#b3b3b3] line-through' : 'text-[#1a1a1a]'
                        } group-hover:text-[#0ca99a] transition-colors`}
                      >
                        {action.text}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                    Documents
                  </h2>
                  <button className="bg-white border border-[#ececec] h-8 px-3 rounded text-[15px] font-['SF_Pro:Semibold',sans-serif] text-[#666666] hover:bg-[#f5f8ff] transition-colors">
                    Voir tout
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="bg-[#e6ebef] border border-[#f2f2f2] rounded px-3 py-2.5 grid grid-cols-[2fr_1.5fr_1fr] gap-4 items-center">
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Entreprise</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Catégorie</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d] text-right">Statut</p>
                  </div>
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="border border-[#f2f2f2] rounded px-3 py-2.5 grid grid-cols-[2fr_1.5fr_1fr] gap-4 items-center hover:bg-[#f5f8ff] transition-colors cursor-pointer min-h-[40px]"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-white flex items-center justify-center border border-[#f2f2f2] flex-shrink-0">
                          <img 
                            alt={doc.company} 
                            className="w-full h-full object-contain p-0.5" 
                            src={doc.logo} 
                            onError={(e) => {
                              const fallback = brandLogoFallbacks[doc.company] || imgEllipse145;
                              e.target.src = fallback;
                              e.target.className = 'w-full h-full object-cover';
                            }} 
                          />
                        </div>
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a] truncate">
                          {doc.company}
                        </p>
                      </div>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                        {doc.category}
                      </p>
                      <p
                        className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-right"
                        style={{ color: doc.statusColor }}
                      >
                        {doc.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
