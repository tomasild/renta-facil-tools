
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      <section className="bg-brand-dark text-white text-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight mb-4 animate-[fade-in_1s_ease-out]">
            La Herramienta Correcta, <br className="hidden sm:block" />
            <span className="text-brand-yellow">Justo a Tiempo.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-[fade-in_1s_ease-out_0.5s]">
            Cotiza el arriendo de herramientas para construcción de forma rápida y sencilla. Selecciona lo que necesitas y obtén tu presupuesto al instante.
          </p>
          <Link to="/catalogo" className="inline-block bg-brand-yellow text-brand-dark font-bold py-4 px-10 rounded-lg hover:bg-yellow-400 transition-transform hover:scale-105 text-xl animate-[fade-in_1s_ease-out_1s]">
            Comenzar a Cotizar
          </Link>
        </div>
      </section>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left text-white">
            <div className="p-6 border border-gray-700/50 rounded-lg">
              <h3 className="text-xl font-bold text-brand-yellow mb-2">Calidad Garantizada</h3>
              <p className="text-muted-foreground">Todas nuestras herramientas son de marcas reconocidas y se encuentran en perfecto estado de mantenimiento.</p>
            </div>
            <div className="p-6 border border-gray-700/50 rounded-lg">
              <h3 className="text-xl font-bold text-brand-yellow mb-2">Precios Competitivos</h3>
              <p className="text-muted-foreground">Ofrecemos las mejores tarifas del mercado para que tu proyecto no se salga de presupuesto.</p>
            </div>
            <div className="p-6 border border-gray-700/50 rounded-lg">
              <h3 className="text-xl font-bold text-brand-yellow mb-2">Soporte Experto</h3>
              <p className="text-muted-foreground">Nuestro equipo está listo para asesorarte y ayudarte a elegir la herramienta adecuada para tu trabajo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
