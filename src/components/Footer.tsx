
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const SocialIcon = ({ type, className }: { type: 'whatsapp' | 'instagram' | 'tiktok' | 'linkedin', className?: string }) => {
  const baseClasses = `w-5 h-5 ${className}`;
  
  switch (type) {
    case 'whatsapp':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
        </svg>
      );
    case 'instagram':
      return <Instagram className={baseClasses} />;
    case 'tiktok':
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      );
    case 'linkedin':
      return <Linkedin className={baseClasses} />;
    default:
      return null;
  }
};

const Footer = () => {
  const socialLinks = [
    { type: 'whatsapp' as const, href: '#', label: 'WhatsApp' },
    { type: 'instagram' as const, href: '#', label: 'Instagram' },
    { type: 'tiktok' as const, href: '#', label: 'TikTok' },
    { type: 'linkedin' as const, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de contacto */}
          <div className="animate-fade-in-up">
            <h3 className="font-bold text-xl mb-4 text-yellow-400">DMAC</h3>
            <p className="text-white/90 mb-4">
              Arriendo de herramientas profesionales para la construcción
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Región de Valparaíso, Chile</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a href="tel:+56912345678" className="text-sm hover:text-yellow-400 transition-colors">
                  +56 9 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a href="mailto:contacto@dmac.cl" className="text-sm hover:text-yellow-400 transition-colors">
                  contacto@dmac.cl
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="animate-fade-in-up [animation-delay:0.2s]">
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="/catalogo" className="block text-sm hover:text-yellow-400 transition-colors">
                Catálogo de Herramientas
              </a>
              <a href="/sobre-nosotros" className="block text-sm hover:text-yellow-400 transition-colors">
                Sobre Nosotros
              </a>
              <a href="#" className="block text-sm hover:text-yellow-400 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="block text-sm hover:text-yellow-400 transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="animate-fade-in-up [animation-delay:0.4s]">
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Síguenos</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.type}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/10 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
            <p className="text-sm text-white/80">
              Mantente al día con nuestras ofertas y novedades
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} DMAC. Todos los derechos reservados. | Avance Garantizado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
