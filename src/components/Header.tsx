
import { HardHat, Menu, X, Instagram, Linkedin, Film, Smartphone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Inicio', href: '/' },
    { title: 'Catálogo', href: '/catalogo' },
    { title: 'Sobre Nosotros', href: '/sobre-nosotros' },
  ];

  const socialLinks = [
    { href: '#', icon: Smartphone, label: 'WhatsApp' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Film, label: 'TikTok' }, // Using Film for TikTok
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <header className="bg-blanco backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-800 hover:text-rojo-dmac transition-colors">
          <HardHat className="w-8 h-8 sm:w-10 sm:h-10 text-rojo-dmac" />
          <div>
            <h1 className="text-lg sm:text-xl font-bold font-heading uppercase tracking-wider">Arriendo de herramientas para la construcción</h1>
            <p className="text-xs sm:text-sm text-gray-500">Región de Valparaíso</p>
            <p className="text-xs text-amarillo-seguridad font-semibold">Avance Garantizado</p> {/* New Slogan */}
          </div>
        </Link>

        {/* Desktop Nav, Social Icons & CTA */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-rojo-dmac ${
                    isActive ? 'text-rojo-dmac' : 'text-gray-700'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons Desktop */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-rojo-dmac transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <Button asChild size="md" className="bg-rojo-dmac hover:bg-rojo-dmac-darker text-blanco">
            <Link to="/catalogo">Cotiza aquí</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" aria-label="Abrir menú">
                {isMenuOpen ? <X className="h-6 w-6 text-gray-700"/> : <Menu className="h-6 w-6 text-gray-700"/>}
            </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-blanco border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[calc(100vh-100px)] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
          <nav className="flex flex-col items-center gap-2 py-6 px-4">
              {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base sm:text-lg font-medium transition-colors hover:text-rojo-dmac w-full text-center py-3 sm:py-4 rounded-md ${
                    isActive ? 'text-rojo-dmac bg-gris-claro' : 'text-gray-700'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
            <Button asChild className="w-full mt-4 bg-rojo-dmac hover:bg-rojo-dmac-darker text-blanco" size="lg">
                <Link to="/catalogo" onClick={() => setIsMenuOpen(false)}>Cotiza aquí</Link>
            </Button>

            {/* Social Icons Mobile */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-gray-200 w-full">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-rojo-dmac transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </nav>
      </div>
    </header>
  );
};

export default Header;
