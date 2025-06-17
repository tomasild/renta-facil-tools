
import { ArrowRight, CheckCircle, Clock, Shield, Star, Wrench, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoItem } from '@/components/BentoGrid';
import { Steps, Step } from '@/components/Steps';
import FAQ from '@/components/FAQ';
import { Link } from 'react-router-dom';

const Home = () => {
  const tools = [
    { name: 'Taladro Percutor', price: 8000, image: '/placeholder.svg' },
    { name: 'Sierra Circular', price: 12000, image: '/placeholder.svg' },
    { name: 'Amoladora Angular', price: 6000, image: '/placeholder.svg' },
    { name: 'Martillo Demoledor', price: 25000, image: '/placeholder.svg' },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-dmac-red" />,
      title: 'Ahorro Inmediato',
      description: 'Hasta 70% menos que comprar equipos nuevos'
    },
    {
      icon: <Shield className="w-8 h-8 text-dmac-red" />,
      title: 'Sin Mantenimiento',
      description: 'Equipos siempre listos y en perfecto estado'
    },
    {
      icon: <Clock className="w-8 h-8 text-dmac-red" />,
      title: 'Entrega Rápida',
      description: 'Disponibilidad inmediata en toda la región'
    },
    {
      icon: <Users className="w-8 h-8 text-dmac-red" />,
      title: 'Soporte 24/7',
      description: 'Asistencia técnica cuando la necesites'
    }
  ];

  const problems = [
    {
      problem: 'Inversión inicial alta en herramientas',
      solution: 'Arrienda por días, paga solo lo que usas'
    },
    {
      problem: 'Mantenimiento y reparaciones costosas',
      solution: 'Equipos siempre en perfecto estado'
    },
    {
      problem: 'Almacenamiento de equipos pesados',
      solution: 'Sin necesidad de bodegaje ni espacio'
    },
    {
      problem: 'Obsolescencia de herramientas',
      solution: 'Acceso a tecnología actualizada'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative hero-bg text-white py-20 sm:py-32 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center"
          role="banner"
          aria-labelledby="hero-heading"
        >
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-heading mb-6 text-white">
                Arriendo de herramientas para la construcción
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-4 text-white">
                Región de Valparaíso
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-dmac-yellow mb-8">
                Avance Garantizado
              </p>
              <p className="text-lg sm:text-xl mb-12 text-white max-w-2xl mx-auto">
                Herramientas profesionales sin inversión inicial. Paga solo por los días que las necesitas.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold text-lg px-8 py-4 animate-scale-in animate-delay-300"
              >
                <Link to="/catalogo">
                  Cotiza aquí
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dolor-Solución con Bento Grid */}
        <section className="py-16 sm:py-20 bg-gray-100" aria-labelledby="solutions-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 id="solutions-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
                Transformamos los Desafíos en <span className="text-dmac-red">Oportunidades</span>
              </h2>
            </div>
            <BentoGrid>
              {problems.map((item, index) => (
                <BentoItem key={index} className="animate-fade-in-up bg-white border border-gray-300 hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-4">
                    <h3 className="font-bold text-dmac-red mb-3 text-sm">❌ PROBLEMA:</h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.problem}</p>
                    <h3 className="font-bold text-green-600 mb-3 text-sm">✅ SOLUCIÓN DMAC:</h3>
                    <p className="text-black font-medium text-sm">{item.solution}</p>
                  </div>
                </BentoItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Propuesta de Valor */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="value-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h2 id="value-heading" className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 text-black">
                Convierte <span className="text-dmac-red">gastos fijos</span> en <span className="text-dmac-red">inversión inteligente</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Sin compras, sin mantenimiento, sin almacenamiento. Solo resultados profesionales garantizados.
              </p>
            </div>
          </div>
        </section>

        {/* Vista Previa del Catálogo con Bento Grid */}
        <section className="py-16 sm:py-20 bg-gray-100" aria-labelledby="catalog-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 id="catalog-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
                Herramientas <span className="text-dmac-red">Profesionales</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Equipos de última generación para cualquier proyecto
              </p>
            </div>
            <BentoGrid className="mb-12">
              {tools.map((tool, index) => (
                <BentoItem key={index} className="animate-fade-in-up bg-white border border-gray-300 hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                  <img 
                    src={tool.image} 
                    alt={`${tool.name} - Herramienta profesional para arriendo`}
                    className="w-full h-32 object-cover mb-4 rounded bg-gray-200" 
                  />
                  <h3 className="font-bold mb-2 text-black">{tool.name}</h3>
                  <p className="text-dmac-red font-bold">${tool.price.toLocaleString('es-CL')} / día</p>
                </BentoItem>
              ))}
            </BentoGrid>
            <div className="text-center animate-fade-in-up">
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <Link to="/catalogo">
                  Ver Catálogo Completo
                  <Wrench className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cómo Funciona con Steps */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
                Cómo <span className="text-dmac-red">Funciona</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Proceso simple y rápido en 3 pasos
              </p>
            </div>
            <Steps>
              <Step
                number="01"
                title="Coordina"
                description="Selecciona tus herramientas y fecha de entrega"
                className="animate-fade-in-up animate-delay-200"
              />
              <Step
                number="02"
                title="Retira"
                description="Recibe el equipamiento en tu obra o retíralo"
                className="animate-fade-in-up animate-delay-300"
              />
              <Step
                number="03"
                title="Avanza"
                description="Ejecuta tu proyecto con herramientas profesionales"
                className="animate-fade-in-up animate-delay-400"
              />
            </Steps>
          </div>
        </section>

        {/* Beneficios Diferenciales con Bento Grid */}
        <section className="py-16 sm:py-20 bg-gray-100" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
                ¿Por qué elegir <span className="text-dmac-red">DMAC</span>?
              </h2>
            </div>
            <BentoGrid>
              {benefits.map((benefit, index) => (
                <BentoItem key={index} className="text-center animate-fade-in-up bg-white border border-gray-300 hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </BentoItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA Final */}
        <section className="py-16 sm:py-20 bg-gray-900 text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Obtén tu cotización personalizada y descubre cómo DMAC puede garantizar el avance de tu obra
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              <Link to="/catalogo">
                Cotiza aquí
                <Calendar className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
