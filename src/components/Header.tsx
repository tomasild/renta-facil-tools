
import { HardHat, Menu, X } from 'lucide-react';
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

  return (
    <header className="bg-brand-dark/95 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-white hover:text-brand-yellow transition-colors">
          <HardHat className="w-8 h-8 sm:w-10 sm:h-10 text-brand-yellow" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-heading uppercase tracking-wider">Arriendos F&C</h1>
            <p className="text-xs sm:text-sm text-gray-400">Soluciones para tu Obra</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-brand-yellow ${
                  isActive ? 'text-brand-yellow' : 'text-gray-300'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" aria-label="Abrir menú">
                {isMenuOpen ? <X className="h-6 w-6 text-white"/> : <Menu className="h-6 w-6 text-white"/>}
            </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <nav className="container mx-auto flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-brand-yellow w-full text-center py-3 rounded-md ${
                    isActive ? 'text-brand-yellow bg-secondary' : 'text-gray-300'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
             <Button asChild className="w-full mt-4" size="lg">
                  <Link to="/catalogo" onClick={() => setIsMenuOpen(false)}>Cotizar Ahora</Link>
              </Button>
          </nav>
      </div>
    </header>
  );
};

export default Header;
