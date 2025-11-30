import { useState } from 'react';
import { Link } from 'react-router-dom';

// Images servies depuis le dossier public
const logoSet = '/assets/Logo set.svg';
const imgSizeMd = '/assets/avatar-dashboard.svg';
const imgCheck = '/assets/check-dashboard.svg';
const img1 = '/assets/fi-9364298-dashboard.svg';
const img2 = '/assets/fi-11326152-dashboard.svg';
const img3 = '/assets/fi-9446889-dashboard.svg';
const img4 = '/assets/fi-471664-dashboard.svg';
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
  const avatarUrl = 'https://randomuser.me/api/portraits/women/45.jpg';
  
  return (
    <div className={`${className} overflow-hidden`}>
      <img 
        className="w-full h-full object-cover" 
        alt="Avatar" 
        src={avatarUrl}
        onError={(e) => {
          e.target.src = imgSizeMd;
        }} 
      />
    </div>
  );
}

// Candidatures en cours
const applications = [
  { 
    athlete: 'Teo Carilli', 
    sport: 'Handball', 
    mission: 'Ambassadeur Running', 
    status: 'En attente',
    statusColor: '#ff9f10',
    date: '15/01/2025'
  },
  { 
    athlete: 'Marie Dubois', 
    sport: 'Tennis', 
    mission: 'Campagne Printemps', 
    status: 'Acceptée',
    statusColor: '#3da000',
    date: '12/01/2025'
  },
  { 
    athlete: 'Lucas Martin', 
    sport: 'Football', 
    mission: 'Événement Lancement', 
    status: 'En attente',
    statusColor: '#ff9f10',
    date: '18/01/2025'
  },
];

// Prochaines actions
const actions = [
  { id: 1, text: 'Répondre à la candidature de Teo Carilli', completed: false },
  { id: 2, text: 'Finaliser le contrat avec Marie Dubois', completed: false },
  { id: 3, text: 'Planifier le shooting pour la campagne printemps', completed: true },
  { id: 4, text: 'Envoyer les produits à Lucas Martin', completed: false },
];

// Documents
const documents = [
  { name: 'Contrat_Standard.pdf', category: 'Contrats', date: '10/01/2025' },
  { name: 'Guide_Brand.pdf', category: 'Ressources', date: '05/01/2025' },
  { name: 'Brief_Campagne_2025.pdf', category: 'Campagnes', date: '03/01/2025' },
];

export default function EnterpriseDashboard() {
  const [actionsState, setActionsState] = useState(actions);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const toggleAction = (id) => {
    setActionsState(prev => prev.map(action => 
      action.id === id ? { ...action, completed: !action.completed } : action
    ));
  };

  // Données pour le graphique de dépenses
  const monthlyExpenses = [
    { month: 'Janv', amount: 12500, height: 125 },
    { month: 'Févr', amount: 15200, height: 152 },
    { month: 'Mars', amount: 9800, height: 98 },
    { month: 'Avr', amount: 18300, height: 183 },
    { month: 'Mai', amount: 14200, height: 142 },
    { month: 'Juin', amount: 16800, height: 168 },
    { month: 'Juil', amount: 11200, height: 112 },
    { month: 'Août', amount: 19800, height: 198 },
    { month: 'Sept', amount: 17500, height: 175 },
  ];

  const barValues = {
    'Janv': 12500,
    'Févr': 15200,
    'Mars': 9800,
    'Avr': 18300,
    'Mai': 14200,
    'Juin': 16800,
    'Juil': 11200,
    'Août': 19800,
    'Sept': 17500,
  };

  return (
    <div className="bg-[#f5f8ff] min-h-screen" data-name="Enterprise Dashboard">
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
            <Link to="/enterprise-search" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img2} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-white">
                Recherche d'athlètes
              </p>
            </Link>
            <Link to="/enterprise-messages" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors relative mb-3">
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
            <Link to="/enterprise-support" className="flex items-center gap-3 h-[44px] px-4 rounded hover:bg-[#012d54] transition-colors mb-3">
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
              <Link to="/enterprise-profile">
                <AvatarSet className="w-12 h-12 rounded-full border-2 border-white shadow-md cursor-pointer hover:opacity-80 transition-opacity" />
              </Link>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#666666]">
                    Bonjour,
                  </p>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#121212]">
                    Sarah Johnson
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
                    Nike France
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

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-l-4 border-[#0ca99a] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
                  135 000 €
                </p>
                <div className="w-8 h-8">
                  <img alt="" className="w-full h-full" src={imgFi2360476} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                    Budget dépensé
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                    Dernier paiement : 15/01
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#0ca99a] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
                  12
                </p>
                <div className="w-8 h-8">
                  <img alt="" className="w-full h-full" src={imgGroup4} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                    Partenariats actifs
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                    Avec 8 athlètes différents
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-[#0ca99a] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[29px] text-[#1a1a1a]">
                  24
                </p>
                <div className="w-8 h-8">
                  <img alt="" className="w-full h-full" src={imgGroup5} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] mb-1">
                    Candidatures reçues
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#666666]">
                    Ce mois-ci
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - 2 spans */}
            <div className="col-span-2 space-y-6">
              {/* Dépenses mensuelles */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                    Dépenses mensuelles
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
                    <span>20000</span>
                    <span>15000</span>
                    <span>10000</span>
                    <span>5000</span>
                    <span>0</span>
                  </div>
                  <div className="ml-12 flex items-end justify-between h-full relative">
                    {monthlyExpenses.map((item) => (
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
                            {hoveredValue.toLocaleString('fr-FR')} €
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

              {/* Candidatures en cours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a]">
                    Candidatures en cours
                  </h2>
                  <div className="flex items-center gap-3">
                    <button className="w-[18px] h-[18px] hover:opacity-70 transition-opacity">
                      <img alt="" className="w-full h-full" src={imgIconCaretLeft} onError={(e) => { e.target.style.display = 'none'; }} />
                    </button>
                    <button className="w-[18px] h-[18px] hover:opacity-70 transition-opacity">
                      <img alt="" className="w-full h-full" src={imgIconCaretRight} onError={(e) => { e.target.style.display = 'none'; }} />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 pb-3 border-b border-[#f2f2f2]">
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Athlète</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Mission</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Date</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d] text-right">Statut</p>
                  </div>
                  {applications.map((app) => (
                    <div key={app.athlete} className="grid grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 items-center py-2 hover:bg-[#f5f8ff] rounded-lg transition-colors">
                      <div>
                        <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#1a1a1a] mb-1">
                          {app.athlete}
                        </p>
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                          {app.sport}
                        </p>
                      </div>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a]">
                        {app.mission}
                      </p>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a]">
                        {app.date}
                      </p>
                      <div className="text-right">
                        <span
                          className="font-['SF_Pro:Semibold',sans-serif] text-[12px] px-3 py-1 rounded-full inline-block"
                          style={{ 
                            backgroundColor: `${app.statusColor}20`,
                            color: app.statusColor
                          }}
                        >
                          {app.status}
                        </span>
                      </div>
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
                    <button className="bg-[#f9f9f9] w-[18px] h-[18px] flex items-center justify-center rounded hover:bg-[#e6ebef] transition-colors">
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
                <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-4">
                  Prochaines actions
                </h2>
                <div className="space-y-3">
                  {actionsState.map((action) => (
                    <div key={action.id} className="flex items-start gap-3">
                      <Checkbox
                        checked={action.completed}
                        onChange={() => toggleAction(action.id)}
                        className="mt-0.5"
                      />
                      <p className={`font-['SF_Pro:Regular',sans-serif] text-[14px] flex-1 ${
                        action.completed ? 'text-[#b3b3b3] line-through' : 'text-[#1a1a1a]'
                      }`}>
                        {action.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-4">
                  Documents
                </h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-[2fr_1.5fr_1fr] gap-4 pb-3 border-b border-[#f2f2f2]">
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Nom</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d]">Catégorie</p>
                    <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-[#4d4d4d] text-right">Date</p>
                  </div>
                  {documents.map((doc, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1.5fr_1fr] gap-4 items-center py-2 hover:bg-[#f5f8ff] rounded-lg transition-colors">
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#1a1a1a] truncate">
                        {doc.name}
                      </p>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666]">
                        {doc.category}
                      </p>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666] text-right">
                        {doc.date}
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

