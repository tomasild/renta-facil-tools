
import { Mail, Phone, Instagram, Linkedin, Film, Smartphone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: '#', icon: Smartphone, label: 'WhatsApp' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Film, label: 'TikTok' }, // Using Film for TikTok
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    // bg-gris-claro is bg-secondary, border-gray-300 should be border-border
    // text-gray-700 should be text-foreground or text-muted-foreground
    <footer className="bg-secondary border-t border-border py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center text-muted-foreground">
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mb-6">
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

        <p className="font-bold text-lg mb-3 sm:mb-4 text-foreground">Contáctanos</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-6">
          <a href="mailto:contacto@dmac.cl" className="flex items-center gap-2 text-foreground hover:text-highlight-red transition-colors text-sm sm:text-base">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> {/* Icon inherits color from link */}
            <span>contacto@dmac.cl</span>
          </a>
          <a href="tel:+56912345678" className="flex items-center gap-2 text-foreground hover:text-highlight-red transition-colors text-sm sm:text-base">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> {/* Icon inherits color from link */}
            <span>+56 9 1234 5678</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} DMAC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
