import { Briefcase, ShieldCheck, Users, Handshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-brand-dark text-white animate-fade-in-up">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-28 text-center bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading mb-4">
            Sobre <span className="text-brand-yellow">Arriendos F&C</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Facilitamos tu acceso a equipos profesionales de construcción, ayudándote a concretar tus proyectos con eficiencia y calidad.
          </p>
        </div>
      </section>

      {/* Nuestra Dedicación Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="w-12 h-12 sm:w-14 sm:h-14 text-brand-yellow" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-6 text-white">Nuestra Dedicación</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              En Arriendos F&C, nos dedicamos a proporcionar soluciones integrales para la industria de la construcción, ofreciendo un servicio de arriendo de herramientas y maquinaria de alta calidad. Nacimos de la necesidad de facilitar el acceso a equipos profesionales sin la necesidad de una gran inversión inicial, permitiendo que tanto grandes constructoras como contratistas independientes puedan llevar a cabo sus proyectos con la mejor tecnología disponible.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Compromiso Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-center mb-10 sm:mb-14 text-white">
            Misión y Compromiso
          </h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            {/* Reliable Equipment & Punctuality */}
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-brand-yellow mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold font-heading mb-3 text-white">Equipos Fiables y Puntualidad</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Garantizamos maquinaria segura y lista para operar, comprometidos con la puntualidad y eficiencia que tu obra necesita.
              </p>
            </div>

            {/* Expert Advice & Customer Service */}
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-brand-yellow mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold font-heading mb-3 text-white">Asesoría Experta y Soporte</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Nuestro equipo de profesionales con experiencia está siempre dispuesto a asesorarte para que elijas la herramienta perfecta y ofrecerte un servicio excepcional.
              </p>
            </div>

            {/* Long-term Relationships & Transparency */}
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg">
              <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-brand-yellow mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold font-heading mb-3 text-white">Relaciones de Confianza</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Creemos en la construcción de relaciones a largo plazo, basadas en la transparencia, el beneficio mutuo y la confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-6 text-white">
            ¿Listo para Empezar tu Próximo Proyecto?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Explora nuestro catálogo completo o contáctanos directamente para una asesoría personalizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="text-base sm:text-lg py-6 px-8">
              <Link to="/catalogo">
                Explorar Catálogo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* Optional: Add a contact button here if desired */}
            {/* <Button asChild variant="outline" size="lg" className="text-base sm:text-lg py-6 px-8 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark">
              <Link to="/contacto">Contáctanos</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
