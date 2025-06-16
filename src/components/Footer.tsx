
import { Mail, Phone, Instagram, Linkedin, Film, Smartphone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: '#', icon: Smartphone, label: 'WhatsApp' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Film, label: 'TikTok' }, // Using Film for TikTok
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gris-claro border-t border-gray-300 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center text-gray-700">
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mb-6">
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

        <p className="font-bold text-lg mb-3 sm:mb-4 text-gray-800">Contáctanos</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-6">
          <a href="mailto:contacto@dmac.cl" className="flex items-center gap-2 hover:text-rojo-dmac transition-colors text-sm sm:text-base"> {/* Updated email */}
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>contacto@dmac.cl</span> {/* Updated email */}
          </a>
          <a href="tel:+56912345678" className="flex items-center gap-2 hover:text-rojo-dmac transition-colors text-sm sm:text-base">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>+56 9 1234 5678</span> {/* Keep placeholder phone for now */}
          </a>
        </div>
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} DMAC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
