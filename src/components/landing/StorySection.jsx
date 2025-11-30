import { Link } from 'react-router-dom';

export default function StorySection() {
  return (
    <section id="story" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative border accent */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#0ca99a] rounded-full"></div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-[#013563] mb-6 relative">
                Notre histoire
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#66c9bf]"></span>
              </h2>
              
              <div className="space-y-6 text-[#666666] text-lg leading-relaxed">
                <p>
                  <span className="text-[#0ca99a] font-semibold">Alia</span> est née d'une conviction simple : 
                  chaque athlète mérite l'opportunité de briller, et chaque entreprise mérite de trouver 
                  les ambassadeurs qui portent ses valeurs.
                </p>
                <p>
                  Nous avons créé une plateforme qui facilite la mise en relation entre les talents sportifs 
                  et les marques qui cherchent à construire des partenariats authentiques et durables.
                </p>
                <p>
                  Notre mission est de permettre à tous les talents de s'exprimer pleinement, en créant 
                  des connexions qui dépassent le simple sponsoring pour bâtir de véritables histoires 
                  communes de performance et de valeurs.
                </p>
              </div>

              {/* Custom Button */}
              <div className="mt-8">
                <Link
                  to="/register"
                  className="relative inline-block group"
                >
                  <div className="absolute inset-0 bg-[#0ca99a] rounded-lg transform group-hover:scale-105 transition-transform duration-300 opacity-75"></div>
                  <div className="relative bg-[#0ca99a] text-white px-8 py-4 rounded-lg font-semibold text-lg transform group-hover:scale-[1.02] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    Rejoindre Alia
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ca99a]/20 to-[#013563]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <img
                src="/assets/volleyball-players-2.jpg"
                alt="Athlètes en action"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = '/assets/volleyball-players-1.jpg';
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#66c9bf]/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#0ca99a]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

