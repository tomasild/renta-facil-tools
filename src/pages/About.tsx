
import { Users, Shield, CheckCircle, Calendar, Target, Award, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoItem } from '@/components/BentoGrid';
import { Steps, Step } from '@/components/Steps';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: 'Confiabilidad',
      description: 'Equipos siempre listos y funcionales para tu tranquilidad'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      title: 'Transparencia',
      description: 'Precios claros y justos sin sorpresas ni costos ocultos'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'Compromiso',
      description: 'Tu avance es nuestro compromiso, tu éxito es nuestra misión'
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: 'Calidad',
      description: 'Solo herramientas profesionales certificadas y de primera línea'
    }
  ];

  const stats = [
    { 
      number: '15+', 
      title: 'Años de Experiencia', 
      description: 'Especializados en el sector construcción y arriendo de equipos profesionales',
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    { 
      number: '500+', 
      title: 'Proyectos Completados', 
      description: 'Obras exitosas realizadas con nuestras herramientas de alta calidad',
      icon: <Target className="w-8 h-8 text-yellow-500" />
    },
    { 
      number: '24h', 
      title: 'Soporte Técnico', 
      description: 'Disponibilidad completa para emergencias y consultas urgentes',
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    }
  ];

  const benefits = [
    {
      title: 'Ahorro inmediato del 70%',
      description: 'Evita inversiones de capital y reduce costos operativos significativamente'
    },
    {
      title: 'Flexibilidad total',
      description: 'Adapta tu equipamiento según las necesidades específicas de cada proyecto'
    },
    {
      title: 'Cero mantenimiento',
      description: 'Olvídate de reparaciones, mantenimiento y almacenamiento de equipos'
    },
    {
      title: 'Acceso inmediato',
      description: 'Herramientas especializadas disponibles cuando las necesitas, sin esperas'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        {/* Hero Section - Modern */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
                  Sobre <span className="text-yellow-400">DMAC</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300">
                  Líderes en arriendo de herramientas profesionales
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Región de Valparaíso • Chile
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-400 mt-4">
                  Avance Garantizado
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Description - Clean */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                ¿Quiénes <span className="text-yellow-500">Somos</span>?
              </h2>
              
              <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                <p>
                  DMAC es la empresa líder en arriendo de herramientas profesionales para la construcción en la Región de Valparaíso. 
                  Transformamos la manera en que los profesionales acceden a equipamiento especializado, eliminando las barreras de 
                  inversión inicial y garantizando que tengas las herramientas correctas cuando las necesitas.
                </p>
                <p>
                  Con años de experiencia en el sector, entendemos que cada proyecto tiene necesidades únicas. Por eso ofrecemos 
                  soluciones flexibles y personalizadas que se adaptan a cualquier tipo de obra, desde pequeñas reparaciones 
                  hasta grandes proyectos de construcción.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values - Modern Steps */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nuestra <span className="text-yellow-500">Filosofía</span>
              </h2>
            </div>
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

        {/* Values - Modern Bento Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nuestros <span className="text-yellow-500">Valores</span>
              </h2>
            </div>
            <BentoGrid className="max-w-4xl mx-auto">
              {values.map((value, index) => (
                <BentoItem key={index} className="text-center bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-yellow-100 transition-colors duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </BentoItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Value Proposition - Highlighted */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-yellow-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center space-y-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Nuestra Propuesta de <span className="text-yellow-600">Valor</span>
              </h2>
              
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-yellow-200">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Transforma tus proyectos con nuestro <span className="text-yellow-600">Avance Garantizado</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 text-left hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Team - Modern Cards */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Nuestro <span className="text-yellow-500">Equipo</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Contamos con profesionales experimentados en construcción, logística y atención al cliente que entienden 
                  las demandas del sector. Nuestro equipo técnico garantiza que cada herramienta esté en perfectas condiciones 
                  y lista para operar al máximo rendimiento.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-yellow-300 group">
                    <div className="space-y-4 text-center">
                      <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-yellow-100 transition-colors duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-gray-900">{stat.number}</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{stat.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Modern */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                ¿Listo para tu próximo proyecto?
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
                Descubre cómo DMAC puede garantizar el avance de tu obra
              </p>
              <Button 
                asChild 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
              >
                <Link to="/catalogo">Cotizar Ahora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
