
const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-dmac-red text-dmac-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">
            Sobre <span className="text-dmac-yellow">DMAC</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-dmac-white/90">
            Arriendo de herramientas profesionales para la construcción en la Región de Valparaíso
          </p>
          <p className="text-2xl font-bold text-dmac-yellow mt-4">
            Avance Garantizado
          </p>
        </div>
      </section>

      {/* Descripción de la empresa */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-dmac-red">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              DMAC es la empresa líder en arriendo de herramientas profesionales para la construcción en la Región de Valparaíso. 
              Transformamos la manera en que los profesionales acceden a equipamiento especializado, eliminando las barreras de 
              inversión inicial y garantizando que tengas las herramientas correctas cuando las necesitas.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Con años de experiencia en el sector, entendemos que cada proyecto tiene necesidades únicas. Por eso ofrecemos 
              soluciones flexibles y personalizadas que se adaptan a cualquier tipo de obra, desde pequeñas reparaciones 
              hasta grandes proyectos de construcción.
            </p>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-16 bg-dmac-gray dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up animate-delay-200">
              <div className="bg-dmac-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-dmac-white">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dmac-red">Misión</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Democratizar el acceso a herramientas profesionales de construcción mediante un servicio de arriendo 
                eficiente y confiable que impulse el avance garantizado de cada proyecto en la Región de Valparaíso.
              </p>
            </div>
            <div className="text-center animate-fade-in-up animate-delay-300">
              <div className="bg-dmac-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-dmac-white">V</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dmac-red">Visión</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ser la empresa de referencia en arriendo de herramientas para construcción en la Región de Valparaíso, 
                reconocida por nuestra excelencia operacional, innovación en servicios y compromiso absoluto con el 
                éxito de nuestros clientes.
              </p>
            </div>
            <div className="text-center animate-fade-in-up animate-delay-400">
              <div className="bg-dmac-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-dmac-white">V</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dmac-red">Valores</h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong className="text-dmac-red">Confiabilidad:</strong> Equipos siempre listos y funcionales</p>
                <p><strong className="text-dmac-red">Transparencia:</strong> Precios claros y justos sin sorpresas</p>
                <p><strong className="text-dmac-red">Compromiso:</strong> Tu avance es nuestro compromiso</p>
                <p><strong className="text-dmac-red">Calidad:</strong> Solo herramientas profesionales certificadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-dmac-red">Nuestra Propuesta de Valor</h2>
            <div className="bg-dmac-yellow p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-dmac-red">
                Transforma tus proyectos con nuestro Avance Garantizado:
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-dmac-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dmac-red mb-1">Ahorro inmediato del 40%</h4>
                      <p className="text-gray-800 text-sm">Evita inversiones de capital y reduce costos operativos significativamente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-dmac-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dmac-red mb-1">Flexibilidad total</h4>
                      <p className="text-gray-800 text-sm">Adapta tu equipamiento según las necesidades específicas de cada proyecto</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-dmac-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dmac-red mb-1">Cero mantenimiento</h4>
                      <p className="text-gray-800 text-sm">Olvídate de reparaciones, mantenimiento y almacenamiento de equipos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-dmac-red w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-dmac-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dmac-red mb-1">Acceso inmediato</h4>
                      <p className="text-gray-800 text-sm">Herramientas especializadas disponibles cuando las necesitas, sin esperas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo y Experiencia */}
      <section className="py-16 bg-dmac-gray dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-dmac-red">Nuestro Equipo</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Contamos con profesionales experimentados en construcción, logística y atención al cliente que entienden 
              las demandas del sector. Nuestro equipo técnico garantiza que cada herramienta esté en perfectas condiciones 
              y lista para operar al máximo rendimiento.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up animate-delay-200">
                <div className="bg-dmac-red text-dmac-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  15+
                </div>
                <h4 className="font-bold text-dmac-red mb-2">Años de Experiencia</h4>
                <p className="text-gray-600 dark:text-gray-400">En el sector construcción y arriendo de equipos</p>
              </div>
              <div className="text-center animate-fade-in-up animate-delay-300">
                <div className="bg-dmac-red text-dmac-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  500+
                </div>
                <h4 className="font-bold text-dmac-red mb-2">Proyectos Completados</h4>
                <p className="text-gray-600 dark:text-gray-400">Con nuestras herramientas profesionales</p>
              </div>
              <div className="text-center animate-fade-in-up animate-delay-400">
                <div className="bg-dmac-red text-dmac-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  24h
                </div>
                <h4 className="font-bold text-dmac-red mb-2">Soporte Técnico</h4>
                <p className="text-gray-600 dark:text-gray-400">Para emergencias y consultas urgentes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dmac-red text-dmac-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu próximo proyecto?</h2>
          <p className="text-xl mb-8 text-dmac-white/90">
            Descubre cómo DMAC puede garantizar el avance de tu obra
          </p>
          <a 
            href="/catalogo" 
            className="inline-block bg-dmac-yellow hover:bg-dmac-yellow-hover text-dmac-red font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Cotiza aquí
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
