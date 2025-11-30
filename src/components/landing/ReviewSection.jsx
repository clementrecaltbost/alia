const reviews = [
  {
    id: 1,
    name: 'Teo Carilli',
    role: 'Joueur de Handball',
    company: 'Ligue 1',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review: 'Alia m\'a permis de trouver des partenariats authentiques avec des marques qui partagent mes valeurs. La plateforme est intuitive et l\'équipe très réactive.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Directrice Marketing',
    company: 'Nike France',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 5,
    review: 'Nous avons trouvé des athlètes exceptionnels grâce à Alia. Le processus de recherche est efficace et les profils sont très détaillés. Une vraie valeur ajoutée.',
  },
  {
    id: 3,
    name: 'Marie Dubois',
    role: 'Tennisman Professionnelle',
    company: 'WTA 150',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    review: 'Grâce à Alia, j\'ai pu me concentrer sur ma carrière tout en développant mes partenariats. La gestion est simplifiée et les paiements sont sécurisés.',
  },
  {
    id: 4,
    name: 'Lucas Martin',
    role: 'Footballeur',
    company: 'Ligue 2',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    rating: 5,
    review: 'La messagerie intégrée facilite vraiment les échanges. J\'ai pu négocier mes contrats directement sur la plateforme. Très pratique !',
  },
  {
    id: 5,
    name: 'Emma Laurent',
    role: 'Nageuse',
    company: 'National',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    review: 'Alia m\'a aidée à structurer mon profil et à mettre en valeur mes performances. Les entreprises peuvent facilement comprendre mon parcours.',
  },
  {
    id: 6,
    name: 'Thomas Bernard',
    role: 'Responsable Sponsoring',
    company: 'Adidas',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    review: 'Nous utilisons Alia pour tous nos nouveaux partenariats. La qualité des profils et le suivi des collaborations sont excellents.',
  },
];

export default function ReviewSection() {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < rating ? 'text-[#0ca99a]' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#013563] mb-4">
            Témoignages
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Découvrez ce que nos utilisateurs disent d'Alia
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#f5f8ff] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-[#0ca99a]"
            >
              {/* Review Text */}
              <div className="mb-6">
                <p className="text-[#666666] leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#e6ebef]">
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#0ca99a]"
                    onError={(e) => {
                      e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                    }}
                  />
                  <div>
                    <p className="font-semibold text-[#013563]">
                      {review.name}
                    </p>
                    <p className="text-sm text-[#666666]">
                      {review.role}
                    </p>
                    <p className="text-xs text-[#b3b3b3]">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



