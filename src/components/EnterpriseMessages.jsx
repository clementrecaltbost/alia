import { useState } from 'react';
import { Link } from 'react-router-dom';

const logoSet = '/assets/Logo set.svg';
const img1 = '/assets/fi-9364298-dashboard.svg';
const img2 = '/assets/fi-11326152-dashboard.svg';
const img3 = '/assets/fi-9446889-dashboard.svg';
const img4 = '/assets/fi-471664-dashboard.svg';

// Messages non lus avec athlètes fictifs
const messages = [
  {
    id: 1,
    name: 'Teo Carilli',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'Bonjour, je suis très intéressé par votre offre d\'ambassadeur. J\'aimerais discuter des détails...',
    time: 'Il y a 2 min',
    unread: true,
    sport: 'Handball',
  },
  {
    id: 2,
    name: 'Marie Dubois',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    message: 'Merci pour votre réponse rapide. Je suis disponible pour un entretien cette semaine...',
    time: 'Il y a 15 min',
    unread: true,
    sport: 'Tennis',
  },
  {
    id: 3,
    name: 'Lucas Martin',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    message: 'Parfait ! Le shooting est prévu pour la semaine prochaine. Confirmez-vous ?',
    time: 'Il y a 1h',
    unread: true,
    sport: 'Football',
  },
  {
    id: 4,
    name: 'Emma Laurent',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    message: 'J\'ai bien reçu le contrat. Je vais le signer et vous le renvoyer aujourd\'hui...',
    time: 'Il y a 2h',
    unread: true,
    sport: 'Natation',
  },
  {
    id: 5,
    name: 'Thomas Bernard',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    message: 'Super travail sur votre dernière campagne ! J\'aimerais collaborer avec vous...',
    time: 'Il y a 3h',
    unread: true,
    sport: 'Basketball',
  },
  {
    id: 6,
    name: 'Camille Rousseau',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    message: 'Bonjour, je suis intéressé par votre offre de sponsoring. On peut discuter ?',
    time: 'Il y a 4h',
    unread: true,
    sport: 'Athlétisme',
  },
  {
    id: 7,
    name: 'Antoine Moreau',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    message: 'Votre marque correspond parfaitement à mes valeurs. Intéressé par un partenariat ?',
    time: 'Il y a 5h',
    unread: true,
    sport: 'Cyclisme',
  },
  {
    id: 8,
    name: 'Léa Petit',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    message: 'Nous avons vu vos performances récentes, impressionnant ! On discute ?',
    time: 'Il y a 6h',
    unread: true,
    sport: 'Gymnastique',
  },
];

export default function EnterpriseMessages() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrer les messages selon la recherche
  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.sport.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f5f8ff] min-h-screen" data-name="Enterprise Messages">
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
            <div className="bg-[#012d54] border-l-[6px] border-[#66c9bf] flex items-center gap-3 h-[44px] px-4 rounded-r mb-3">
              <div className="w-[18px] h-[18px]">
                <img alt="" className="w-full h-full" src={img3} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#66c9bf]">
                Messages
              </p>
              <div className="bg-[#0ca99a] flex items-center justify-center h-[22px] px-2 rounded-[8px] ml-auto">
                <p className="font-['SF_Pro:Semibold',sans-serif] text-[12px] text-white">8</p>
              </div>
            </div>
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
        <div className="ml-[254px] flex-1 flex flex-col relative">
          <div className="flex flex-1">
          {/* Messages List */}
          <div className="w-[400px] bg-white border-r border-[#f2f2f2] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-[#f2f2f2]">
              <h1 className="font-['SF_Pro:Semibold',sans-serif] text-[23px] text-[#1a1a1a] mb-2">
                Messages
              </h1>
              <div className="bg-[#f5f8ff] border border-[#f2f2f2] rounded-lg px-4 py-2 flex items-center gap-2">
                <div className="w-4 h-4">
                  <img alt="" className="w-full h-full" src={img2} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un message..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666] placeholder:text-[#b3b3b3]"
                />
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
              {filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`p-4 border-b border-[#f2f2f2] cursor-pointer hover:bg-[#f5f8ff] transition-colors ${
                    selectedMessage?.id === msg.id ? 'bg-[#f5f8ff] border-l-4 border-l-[#0ca99a]' : ''
                  } ${msg.unread ? 'bg-[#f0f7ff]' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={msg.avatar}
                        alt={msg.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                        onError={(e) => {
                          e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                        }}
                      />
                      {msg.unread && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#0ca99a] rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-['SF_Pro:Semibold',sans-serif] text-[15px] text-[#1a1a1a] truncate">
                          {msg.name}
                        </p>
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666] flex-shrink-0 ml-2">
                          {msg.time}
                        </p>
                      </div>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#666666] mb-1 truncate">
                        {msg.sport}
                      </p>
                      <p
                        className={`font-['SF_Pro:Regular',sans-serif] text-[14px] truncate ${
                          msg.unread ? 'text-[#1a1a1a] font-medium' : 'text-[#666666]'
                        }`}
                      >
                        {msg.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Detail */}
          <div className="flex-1 bg-[#f5f8ff] flex flex-col relative">
            {selectedMessage ? (
              <>
                {/* Message Header */}
                <div className="bg-white border-b border-[#f2f2f2] p-6 flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedMessage.avatar}
                      alt={selectedMessage.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                      onError={(e) => {
                        e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                      }}
                    />
                    <div className="flex-1">
                      <h2 className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#1a1a1a] mb-1">
                        {selectedMessage.name}
                      </h2>
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[#666666]">
                        {selectedMessage.sport}
                      </p>
                    </div>
                    <button className="bg-[#0ca99a] text-white px-4 py-2 rounded-lg font-['SF_Pro:Semibold',sans-serif] text-[14px] hover:bg-[#0ba08f] transition-colors">
                      Répondre
                    </button>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 overflow-y-auto p-6 pb-40">
                  <div className="max-w-3xl mx-auto space-y-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={selectedMessage.avatar}
                        alt={selectedMessage.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        onError={(e) => {
                          e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                        }}
                      />
                      <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm">
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] leading-relaxed">
                          {selectedMessage.message}
                        </p>
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[#b3b3b3] mt-2">
                          {selectedMessage.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input - Fixed en bas de l'écran */}
                <div className="fixed bottom-0 left-[calc(254px+400px)] right-0 bg-white border-t border-[#f2f2f2] p-6 shadow-lg z-50">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-end gap-4">
                      <div className="flex-1 bg-[#f5f8ff] border border-[#f2f2f2] rounded-2xl p-4">
                        <textarea
                          placeholder="Tapez votre message..."
                          className="w-full bg-transparent border-none outline-none resize-none font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#1a1a1a] placeholder:text-[#b3b3b3]"
                          rows="3"
                        />
                      </div>
                      <button className="bg-[#0ca99a] text-white px-6 py-4 rounded-2xl font-['SF_Pro:Semibold',sans-serif] text-[15px] hover:bg-[#0ba08f] transition-colors flex-shrink-0">
                        Envoyer
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#e6ebef] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12">
                      <img alt="" className="w-full h-full" src={img3} onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                  </div>
                  <p className="font-['SF_Pro:Semibold',sans-serif] text-[19px] text-[#666666] mb-2">
                    Sélectionnez un message
                  </p>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[#b3b3b3]">
                    Choisissez une conversation pour commencer
                  </p>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

