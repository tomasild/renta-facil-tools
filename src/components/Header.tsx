import { HardHat, Menu, X, Instagram, Linkedin } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Iconos de redes sociales
const SocialIcon = ({ type, className }: { type: 'whatsapp' | 'instagram' | 'tiktok' | 'linkedin', className?: string }) => {
  const baseClasses = `w-5 h-5 ${className}`;
  
  switch (type) {
    case 'whatsapp':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
        </svg>
      );
    case 'instagram':
      return <Instagram className={baseClasses} />;
    case 'tiktok':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      );
    case 'linkedin':
      return <Linkedin className={baseClasses} />;
    default:
      return null;
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Inicio', href: '/' },
    { title: 'Catálogo', href: '/catalogo' },
    { title: 'Sobre Nosotros', href: '/sobre-nosotros' },
  ];

  const socialLinks = [
    { type: 'whatsapp' as const, href: '#', label: 'WhatsApp DMAC' },
    { type: 'instagram' as const, href: '#', label: 'Instagram DMAC' },
    { type: 'tiktok' as const, href: '#', label: 'TikTok DMAC' },
    { type: 'linkedin' as const, href: '#', label: 'LinkedIn DMAC' },
  ];

  return (
    <header className="bg-dmac-red py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 border-b border-dmac-red-hover" role="banner">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => setIsMenuOpen(false)} 
          className="flex items-center gap-3 text-white hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red rounded-md p-1"
          aria-label="DMAC - Arriendo de herramientas - Ir al inicio"
        >
          <img 
            src="/logo.png" 
            alt="DMAC Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <HardHat className="w-8 h-8 sm:w-10 sm:h-10 text-white hidden" aria-hidden="true" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-heading uppercase tracking-wider text-white">DMAC</h1>
            <p className="text-xs sm:text-sm text-white">Avance Garantizado</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red rounded-md px-2 py-1 ${
                  isActive ? 'text-white font-bold' : 'text-white/90'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3" role="navigation" aria-label="Redes sociales">
            {socialLinks.map((social) => (
              <a
                key={social.type}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red rounded-md p-1"
              >
                <SocialIcon type={social.type} />
              </a>
            ))}
          </div>
          <Button 
            asChild 
            className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red"
          >
            <Link to="/catalogo">Cotiza aquí</Link>
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <Button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            variant="ghost" 
            size="icon" 
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="text-white hover:text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red"
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full bg-dmac-red border-b border-dmac-red-hover overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="container mx-auto flex flex-col items-center gap-4 py-6" role="navigation" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors hover:text-white w-full text-center py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red ${
                  isActive ? 'text-white bg-white/10 font-bold' : 'text-white/90'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
          
          {/* Social Icons - Mobile */}
          <div className="flex items-center gap-4 mt-4" role="navigation" aria-label="Redes sociales móvil">
            {socialLinks.map((social) => (
              <a
                key={social.type}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red rounded-md p-1"
              >
                <SocialIcon type={social.type} />
              </a>
            ))}
          </div>
          
          <Button 
            asChild 
            className="w-full mt-4 bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmac-red" 
            size="lg"
          >
            <Link to="/catalogo" onClick={() => setIsMenuOpen(false)}>Cotiza aquí</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
