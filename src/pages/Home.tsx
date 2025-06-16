
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wrench, Clock, Shield, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import FAQ from '@/components/FAQ';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dmac-red to-dmac-red-hover text-dmac-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092916322-3c1a52b1aaa4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight mb-4 animate-fade-in-up">
            Arriendo de herramientas para la construcción —{' '}
            <span className="text-dmac-yellow">Región de Valparaíso</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-dmac-yellow mb-6 animate-fade-in-up animate-delay-200">
            Avance Garantizado
          </p>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 animate-fade-in-up animate-delay-300">
            Evita inversiones costosas. Accede a herramientas profesionales cuando las necesitas, 
            con entrega coordinada en toda la región.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-dmac-red font-bold text-lg py-6 px-10 animate-fade-in-up animate-delay-400"
          >
            <Link to="/catalogo">Cotiza aquí</Link>
          </Button>
        </div>
      </section>

      {/* Dolor-Solución Section */}
      <section className="py-20 bg-dmac-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-dmac-red animate-fade-in-up">
              ¿Te suena familiar?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up animate-delay-200">
                <div className="flex items-start gap-4">
                  <div className="bg-dmac-red/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-dmac-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-dmac-red">Proyectos detenidos</h3>
                    <p className="text-gray-700">Esperas días para conseguir la herramienta específica que necesitas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-dmac-red/10 p-3 rounded-lg">
                    <Wrench className="w-6 h-6 text-dmac-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-dmac-red">Inversión excesiva</h3>
                    <p className="text-gray-700">Compras equipos costosos que usarás pocas veces</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-dmac-red/10 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-dmac-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-dmac-red">Mantenimiento y almacenaje</h3>
                    <p className="text-gray-700">Gastos constantes en reparaciones y espacio de bodega</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-dmac-red/10 p-3 rounded-lg">
                    <Truck className="w-6 h-6 text-dmac-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-dmac-red">Logística complicada</h3>
                    <p className="text-gray-700">Pierdes tiempo trasladando herramientas entre obras</p>
                  </div>
                </div>
              </div>
              <div className="bg-dmac-yellow p-8 rounded-xl animate-fade-in-up animate-delay-400">
                <h3 className="text-2xl font-bold mb-6 text-dmac-red">DMAC es tu solución</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-dmac-red" />
                    <span className="font-medium text-dmac-red">Herramientas disponibles cuando las necesitas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-dmac-red" />
                    <span className="font-medium text-dmac-red">Sin inversión inicial ni mantenimiento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-dmac-red" />
                    <span className="font-medium text-dmac-red">Entrega y retiro coordinado en tu obra</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-dmac-red" />
                    <span className="font-medium text-dmac-red">Cobertura completa Región de Valparaíso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-20 bg-dmac-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dmac-red">
              Transforma tu forma de trabajar
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              De proyectos interrumpidos por falta de herramientas a{' '}
              <span className="font-bold text-dmac-red">avance garantizado</span> con el equipamiento exacto 
              que necesitas, cuando lo necesitas, sin inversiones ni complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Vista Previa Catálogo */}
      <section className="py-20 bg-dmac-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dmac-red">
              Herramientas Profesionales
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Equipos de construcción de última generación, siempre listos y en perfectas condiciones
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Taladros y Rotomartillos', image: 'taladro-profesional-dmac' },
              { name: 'Compresores y Herramientas Neumáticas', image: 'compresor-construccion-dmac' },
              { name: 'Generadores y Equipos Eléctricos', image: 'generador-obra-dmac' }
            ].map((tool, index) => (
              <div 
                key={tool.name}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-dmac-gray to-dmac-yellow/20 flex items-center justify-center">
                  <Wrench className="w-16 h-16 text-dmac-red" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-dmac-red mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">Equipos profesionales para cualquier tipo de obra</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up animate-delay-500">
            <Button 
              asChild 
              size="lg" 
              className="bg-dmac-red hover:bg-dmac-red-hover text-dmac-white font-bold"
            >
              <Link to="/catalogo" className="inline-flex items-center gap-2">
                Ver catálogo completo <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-dmac-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dmac-red">¿Cómo Funciona?</h2>
            <p className="text-xl text-gray-700">Tres pasos simples para tu avance garantizado</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Coordina',
                description: 'Revisa nuestro catálogo y solicita cotización con las herramientas que necesitas',
                icon: <Wrench className="w-8 h-8" />
              },
              {
                step: '2', 
                title: 'Retira',
                description: 'Coordinamos entrega directa en tu obra sin costos adicionales en la región',
                icon: <Truck className="w-8 h-8" />
              },
              {
                step: '3',
                title: 'Avanza',
                description: 'Usa las herramientas profesionales y mantén tu proyecto en marcha',
                icon: <CheckCircle className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div 
                key={item.step}
                className={`text-center p-6 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-dmac-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-dmac-red">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dmac-red">{item.step}. {item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Diferenciales */}
      <section className="py-20 bg-dmac-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dmac-red">¿Por qué elegir DMAC?</h2>
            <p className="text-xl text-gray-700">Ventajas que marcan la diferencia en tus proyectos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ahorro Inmediato',
                description: 'Reduce costos operativos hasta 40% vs. compra de equipos',
                icon: <CheckCircle className="w-8 h-8 text-dmac-yellow" />
              },
              {
                title: 'Flexibilidad Total',
                description: 'Adapta tu equipamiento según cada proyecto específico',
                icon: <Wrench className="w-8 h-8 text-dmac-yellow" />
              },
              {
                title: 'Cobertura Regional',
                description: 'Entrega y retiro sin costo en toda la Región de Valparaíso',
                icon: <Truck className="w-8 h-8 text-dmac-yellow" />
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-dmac-red p-3 rounded-lg w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dmac-red">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Final */}
      <section className="py-20 bg-dmac-red text-dmac-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para garantizar el avance de tu proyecto?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solicita tu cotización ahora y recibe las herramientas que necesitas mañana mismo
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-dmac-red font-bold text-lg py-6 px-10"
            >
              <Link to="/catalogo">Cotiza aquí</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
