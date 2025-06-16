
import { HardHat, Menu, X, Instagram, Linkedin, Film, Smartphone, Sun, Moon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null; // Or a loading skeleton
  }

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
    <header className="bg-background backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-foreground hover:text-highlight-red transition-colors">
          <HardHat className="w-8 h-8 sm:w-10 sm:h-10 text-highlight-red" />
          <div>
            <h1 className="text-lg sm:text-xl font-bold font-heading uppercase tracking-wider">Arriendo de herramientas para la construcción</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">Región de Valparaíso</p>
            <p className="text-xs text-primary font-semibold">Avance Garantizado</p> {/* Primary is yellow */}
          </div>
        </Link>

        {/* Desktop Nav, Social Icons, CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5"> {/* Reduced gap slightly */}
          <nav className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-highlight-red ${
                    isActive ? 'text-highlight-red' : 'text-foreground'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons Desktop */}
          <div className="flex items-center gap-2"> {/* Reduced gap */}
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight-red hover:opacity-80 transition-opacity p-1" // Added padding for easier click
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <Button asChild size="md">
            <Link to="/catalogo">Cotiza aquí</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground hover:text-highlight-red"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-2"> {/* Added gap for theme toggle if placed here */}
           <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground hover:text-highlight-red"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" aria-label="Abrir menú" className="text-foreground hover:text-highlight-red">
              {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[calc(100vh-100px)] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
          <nav className="flex flex-col items-center gap-2 py-6 px-4">
              {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base sm:text-lg font-medium transition-colors hover:text-highlight-red w-full text-center py-3 sm:py-4 rounded-md ${
                    isActive ? 'text-highlight-red bg-secondary' : 'text-foreground'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
            <Button asChild className="w-full mt-4" size="lg">
                <Link to="/catalogo" onClick={() => setIsMenuOpen(false)}>Cotiza aquí</Link>
            </Button>

            {/* Social Icons Mobile */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-border w-full">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight-red hover:opacity-80 transition-opacity p-1"
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
