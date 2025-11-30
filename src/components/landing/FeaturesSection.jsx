import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: 'Profil complet',
    description: 'Créez un profil détaillé mettant en valeur vos performances, vos objectifs et vos valeurs. Partagez votre histoire avec les entreprises qui vous correspondent.',
    icon: '👤',
    image: '/assets/chris-kendall-sJ6az6-T1u8-unsplash.jpg',
    tag: 'Pour athlètes',
  },
  {
    id: 2,
    title: 'Recherche ciblée',
    description: 'Trouvez les athlètes qui correspondent à vos critères : sport, localisation, audience, valeurs. Filtrez et découvrez les talents qui portent votre message.',
    icon: '🔍',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80',
    tag: 'Pour entreprises',
  },
  {
    id: 3,
    title: 'Messagerie intégrée',
    description: 'Communiquez directement avec vos partenaires via notre messagerie sécurisée. Gérez vos conversations et négociez vos contrats en toute simplicité.',
    icon: '💬',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tag: 'Pour tous',
  },
  {
    id: 4,
    title: 'Gestion des partenariats',
    description: 'Suivez vos partenariats actifs, gérez vos paiements et vos documents. Tout est centralisé dans votre tableau de bord personnalisé.',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
    tag: 'Pour tous',
  },
  {
    id: 5,
    title: 'Statistiques détaillées',
    description: 'Accédez à des statistiques précises sur votre audience, vos performances et l\'impact de vos collaborations. Mesurez votre croissance.',
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tag: 'Pour athlètes',
  },
  {
    id: 6,
    title: 'Support dédié',
    description: 'Notre équipe est là pour vous accompagner à chaque étape. Assistance technique, conseils stratégiques et médiation pour vos partenariats.',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    tag: 'Pour tous',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-[#f5f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#013563] mb-4">
            Fonctionnalités
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour créer et gérer vos partenariats sportifs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/volleyball-players-1.jpg';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#0ca99a] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {feature.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#013563] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            to="/register"
            className="btn-primary px-8 py-4 text-lg font-semibold inline-block"
          >
            Commencer maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}

