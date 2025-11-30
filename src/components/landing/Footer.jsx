import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#story' },
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'L\'équipe', href: '#team' },
    { name: 'Témoignages', href: '#reviews' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Facebook', icon: '👥', href: '#' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#013563] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="h-12 w-32 mb-6">
              <img 
                className="h-full w-full object-contain" 
                alt="Alia Logo" 
                src="/assets/Logo set.svg"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Alia relie les athlètes et les entreprises pour bâtir des histoires 
              communes de performance et de valeurs. Rejoignez notre communauté.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#0ca99a]/20 rounded-full flex items-center justify-center hover:bg-[#0ca99a] transition-colors duration-300 text-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#66c9bf]">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-[#66c9bf] transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#66c9bf]">
              Contact
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="mailto:contact@alia.com"
                  className="hover:text-[#66c9bf] transition-colors duration-200"
                >
                  contact@alia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="hover:text-[#66c9bf] transition-colors duration-200"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm">Paris, France</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 flex justify-between items-center text-white/60">
          <p className="flex-1 text-center">© 2025 Alia. Tous droits réservés.</p>
          <p className="text-right">Site web créé par vbspro.qc@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

