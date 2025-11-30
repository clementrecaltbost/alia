import { Link } from 'react-router-dom';

const founders = [
  {
    id: 1,
    name: 'Téo Carilli',
    role: 'Co-fondateur',
    description: 'Titulaire d\'un Master 2 en Business Consulting and Digital Organization à l\'Université Paris-Dauphine, Téo est un passionné de sport et marathonien engagé. Animé par l\'envie de rendre le sport accessible à tous, il travaille à connecter les talents sportifs aux opportunités qu\'ils méritent.',
    avatar: '/assets/teo.jpg',
    linkedin: 'https://www.linkedin.com/in/téo-carilli-701835228/',
  },
  {
    id: 2,
    name: 'Gaspard Sallerin-Gorainoff',
    role: 'Co-fondateur',
    description: 'Diplômé d\'un Bachelor en administration des affaires à HEC Montréal, avec une spécialisation en finance et management, Gaspard est un passionné de sport qui apporte à Alia sa vision analytique. Son objectif : aider chaque athlète à franchir un cap en facilitant l\'accès au soutien dont ils ont besoin.',
    avatar: '/assets/gaspard.jpg',
    linkedin: 'https://www.linkedin.com/in/gaspard-sallerin-gorainoff/',
  },
  {
    id: 3,
    name: 'Nicolas Cimino',
    role: 'Co-fondateur',
    description: 'Diplômé d\'un Master 2 en Business Administration and Management à Paris-Dauphine, Nicolas allie son goût pour le sport à une forte sensibilité pour l\'expérience utilisateur. Convaincu que chaque athlète doit pouvoir évoluer dans les meilleures conditions, il contribue à bâtir une plateforme simple, humaine et ambitieuse.',
    avatar: '/assets/nicolas.jpg',
    linkedin: 'https://www.linkedin.com/in/nicolas-cimino/',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#013563] mb-4">
            Rencontrez l'équipe
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Les fondateurs d'Alia, passionnés par le sport et l'innovation
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="bg-[#f5f8ff] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#0ca99a] shadow-lg group-hover:border-[#66c9bf] transition-colors duration-300">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                    }}
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#66c9bf] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#013563] mb-2">
                  {founder.name}
                </h3>
                <p className="text-[#0ca99a] font-semibold text-lg mb-4">
                  {founder.role}
                </p>
                <p className="text-[#666666] leading-relaxed mb-6">
                  {founder.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#0ca99a] rounded-full flex items-center justify-center hover:bg-[#0ba08f] transition-colors duration-300 text-white"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {founder.twitter && (
                    <a
                      href={founder.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#0ca99a] rounded-full flex items-center justify-center hover:bg-[#0ba08f] transition-colors duration-300 text-white"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#666666] mb-6">
            Rejoignez notre mission de connecter les talents aux opportunités
          </p>
          <Link
            to="/register"
            className="btn-primary px-8 py-4 text-lg font-semibold inline-block"
          >
            Rejoindre Alia
          </Link>
        </div>
      </div>
    </section>
  );
}



