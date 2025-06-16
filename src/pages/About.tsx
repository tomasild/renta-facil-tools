
const About = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#BF0411] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">
            Sobre <span className="text-[#FEF800]">DMAC</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Arriendo de herramientas profesionales para la construcción en la Región de Valparaíso
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-[#BF0411]">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-700 mb-6">
              DMAC es tu socio estratégico en la Región de Valparaíso para el arriendo de herramientas y equipos de construcción profesionales. Eliminamos la necesidad de grandes inversiones iniciales y garantizamos que tengas las herramientas correctas, cuando las necesitas.
            </p>
            <p className="text-lg text-gray-700">
              Con años de experiencia en el sector, entendemos los desafíos únicos de cada proyecto y ofrecemos soluciones integrales que se adaptan a tus necesidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up [animation-delay:0.2s]">
              <div className="bg-[#BF0411] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#BF0411]">Misión</h3>
              <p className="text-gray-700">
                Facilitar el acceso a herramientas profesionales de construcción mediante un servicio de arriendo eficiente, confiable y económico que impulse el éxito de cada proyecto en la Región de Valparaíso.
              </p>
            </div>
            <div className="text-center animate-fade-in-up [animation-delay:0.4s]">
              <div className="bg-[#BF0411] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#BF0411]">Visión</h3>
              <p className="text-gray-700">
                Ser la empresa líder en arriendo de herramientas para construcción en la Región de Valparaíso, reconocida por nuestra excelencia operacional, innovación tecnológica y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
            <div className="text-center animate-fade-in-up [animation-delay:0.6s]">
              <div className="bg-[#BF0411] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">V</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#BF0411]">Valores</h3>
              <p className="text-gray-700">
                <strong>Confiabilidad:</strong> Equipos siempre listos.<br/>
                <strong>Transparencia:</strong> Precios claros y justos.<br/>
                <strong>Compromiso:</strong> Tu éxito es nuestro éxito.<br/>
                <strong>Calidad:</strong> Solo herramientas profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-[#BF0411]">Nuestra Propuesta de Valor</h2>
            <div className="bg-[#FEF800] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#BF0411]">Transforma tus proyectos con:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-[#BF0411] mb-2">✓ Ahorro inmediato</h4>
                  <p className="text-gray-800">Evita inversiones de capital y reduce costos operativos hasta en un 40%.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#BF0411] mb-2">✓ Flexibilidad total</h4>
                  <p className="text-gray-800">Adapta tu equipamiento según las necesidades específicas de cada proyecto.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#BF0411] mb-2">✓ Mantenimiento incluido</h4>
                  <p className="text-gray-800">Olvídate de reparaciones, mantenimiento y almacenamiento de equipos.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#BF0411] mb-2">✓ Acceso inmediato</h4>
                  <p className="text-gray-800">Herramientas especializadas disponibles cuando las necesitas, sin esperas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 text-[#BF0411]">Nuestro Equipo</h2>
            <p className="text-lg text-gray-700 mb-6">
              Contamos con profesionales experimentados en construcción y logística que entienden las demandas del sector. Nuestro equipo técnico garantiza que cada herramienta esté en perfectas condiciones y lista para operar.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-[#BF0411] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">15+</div>
                <h4 className="font-bold text-[#BF0411]">Años de Experiencia</h4>
                <p className="text-gray-600">En el sector construcción</p>
              </div>
              <div className="text-center">
                <div className="bg-[#BF0411] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">500+</div>
                <h4 className="font-bold text-[#BF0411]">Proyectos Completados</h4>
                <p className="text-gray-600">Con nuestras herramientas</p>
              </div>
              <div className="text-center">
                <div className="bg-[#BF0411] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">24h</div>
                <h4 className="font-bold text-[#BF0411]">Soporte Técnico</h4>
                <p className="text-gray-600">Para emergencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#BF0411] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu próximo proyecto?</h2>
          <p className="text-xl mb-8 text-white/90">Cotiza con nosotros y descubre la diferencia DMAC</p>
          <a href="/catalogo" className="bg-[#FEF800] hover:bg-[#E6DF00] text-[#BF0411] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
            Cotiza aquí
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
