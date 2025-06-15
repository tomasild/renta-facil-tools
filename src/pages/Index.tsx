
import QuoteCalculator from '@/components/QuoteCalculator';

const Index = () => {
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
          <a href="#cotizador" className="inline-block bg-brand-yellow text-brand-dark font-bold py-4 px-10 rounded-lg hover:bg-yellow-400 transition-transform hover:scale-105 text-xl animate-[fade-in_1s_ease-out_1s]">
            Comenzar a Cotizar
          </a>
        </div>
      </section>
      <QuoteCalculator />
    </div>
  );
};

export default Index;
