
import { Users, Shield, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoItem } from '@/components/BentoGrid';
import { Steps, Step } from '@/components/Steps';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Confiabilidad',
      description: 'Equipos siempre listos y funcionales'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: 'Transparencia',
      description: 'Precios claros y justos sin sorpresas'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Compromiso',
      description: 'Tu avance es nuestro compromiso'
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: 'Calidad',
      description: 'Solo herramientas profesionales certificadas'
    }
  ];

  const stats = [
    { number: '15+', title: 'Años de Experiencia', description: 'En el sector construcción y arriendo de equipos' },
    { number: '500+', title: 'Proyectos Completados', description: 'Con nuestras herramientas profesionales' },
    { number: '24h', title: 'Soporte Técnico', description: 'Para emergencias y consultas urgentes' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="bg-dmac-red text-white py-20 px-4 sm:px-6 lg:px-8"
          role="banner"
          aria-labelledby="about-hero-heading"
        >
          <div className="container mx-auto text-center animate-fade-in-up">
            <h1 id="about-hero-heading" className="text-4xl md:text-5xl font-extrabold font-heading mb-4">
              Sobre <span className="text-dmac-yellow">DMAC</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Arriendo de herramientas profesionales para la construcción en la Región de Valparaíso
            </p>
            <p className="text-2xl font-bold text-dmac-yellow mt-4">
              Avance Garantizado
            </p>
          </div>
        </section>

        {/* Descripción de la empresa */}
        <section className="py-16 bg-background" aria-labelledby="company-description">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 id="company-description" className="text-3xl font-bold mb-6 text-dmac-red">¿Quiénes Somos?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                DMAC es la empresa líder en arriendo de herramientas profesionales para la construcción en la Región de Valparaíso. 
                Transformamos la manera en que los profesionales acceden a equipamiento especializado, eliminando las barreras de 
                inversión inicial y garantizando que tengas las herramientas correctas cuando las necesitas.
              </p>
              <p className="text-lg text-muted-foreground">
                Con años de experiencia en el sector, entendemos que cada proyecto tiene necesidades únicas. Por eso ofrecemos 
                soluciones flexibles y personalizadas que se adaptan a cualquier tipo de obra, desde pequeñas reparaciones 
                hasta grandes proyectos de construcción.
              </p>
            </div>
          </div>
        </section>

        {/* Misión, Visión, Valores con Steps */}
        <section className="py-16 bg-muted" aria-labelledby="mission-vision">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="mission-vision" className="text-3xl font-bold text-center mb-12">Nuestra Filosofía</h2>
            <Steps>
              <Step
                number="M"
                title="Misión"
                description="Democratizar el acceso a herramientas profesionales de construcción mediante un servicio de arriendo eficiente y confiable que impulse el avance garantizado de cada proyecto en la Región de Valparaíso."
                className="animate-fade-in-up animate-delay-200"
              />
              <Step
                number="V"
                title="Visión"
                description="Ser la empresa de referencia en arriendo de herramientas para construcción en la Región de Valparaíso, reconocida por nuestra excelencia operacional, innovación en servicios y compromiso absoluto con el éxito de nuestros clientes."
                className="animate-fade-in-up animate-delay-300"
              />
              <Step
                number="V"
                title="Valores"
                description="Confiabilidad en equipos siempre listos, transparencia en precios claros, compromiso con tu avance y calidad en herramientas profesionales certificadas."
                className="animate-fade-in-up animate-delay-400"
              />
            </Steps>
          </div>
        </section>

        {/* Valores con Bento Grid */}
        <section className="py-16 bg-background" aria-labelledby="values-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="values-section" className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
            <BentoGrid>
              {values.map((value, index) => (
                <BentoItem key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-dmac-red">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </BentoItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Propuesta de Valor */}
        <section className="py-16 bg-muted" aria-labelledby="value-proposition">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 id="value-proposition" className="text-3xl font-bold mb-6 text-dmac-red">Nuestra Propuesta de Valor</h2>
              <div className="bg-primary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary-foreground">
                  Transforma tus proyectos con nuestro Avance Garantizado:
                </h3>
                <BentoGrid className="text-left">
                  <BentoItem className="bg-background">
                    <div className="flex items-start gap-3">
                      <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-dmac-red mb-1">Ahorro inmediato del 40%</h4>
                        <p className="text-muted-foreground text-sm">Evita inversiones de capital y reduce costos operativos significativamente</p>
                      </div>
                    </div>
                  </BentoItem>
                  <BentoItem className="bg-background">
                    <div className="flex items-start gap-3">
                      <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-dmac-red mb-1">Flexibilidad total</h4>
                        <p className="text-muted-foreground text-sm">Adapta tu equipamiento según las necesidades específicas de cada proyecto</p>
                      </div>
                    </div>
                  </BentoItem>
                  <BentoItem className="bg-background">
                    <div className="flex items-start gap-3">
                      <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-dmac-red mb-1">Cero mantenimiento</h4>
                        <p className="text-muted-foreground text-sm">Olvídate de reparaciones, mantenimiento y almacenamiento de equipos</p>
                      </div>
                    </div>
                  </BentoItem>
                  <BentoItem className="bg-background">
                    <div className="flex items-start gap-3">
                      <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-dmac-red mb-1">Acceso inmediato</h4>
                        <p className="text-muted-foreground text-sm">Herramientas especializadas disponibles cuando las necesitas, sin esperas</p>
                      </div>
                    </div>
                  </BentoItem>
                </BentoGrid>
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas con Steps */}
        <section className="py-16 bg-background" aria-labelledby="stats-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 id="stats-section" className="text-3xl font-bold mb-6 text-dmac-red">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Contamos con profesionales experimentados en construcción, logística y atención al cliente que entienden 
                las demandas del sector. Nuestro equipo técnico garantiza que cada herramienta esté en perfectas condiciones 
                y lista para operar al máximo rendimiento.
              </p>
            </div>
            <Steps>
              {stats.map((stat, index) => (
                <Step
                  key={index}
                  number={stat.number}
                  title={stat.title}
                  description={stat.description}
                  className={`animate-fade-in-up animate-delay-${(index + 2) * 100}`}
                />
              ))}
            </Steps>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dmac-red text-white" aria-labelledby="about-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 id="about-cta" className="text-3xl font-bold mb-4">¿Listo para tu próximo proyecto?</h2>
            <p className="text-xl mb-8 text-white/90">
              Descubre cómo DMAC puede garantizar el avance de tu obra
            </p>
            <Button 
              asChild 
              className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/catalogo">Cotiza aquí</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
