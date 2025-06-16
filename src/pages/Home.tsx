
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { tools, Tool } from '@/data/tools';
import ToolCard from '@/components/ToolCard'; // Import the consolidated ToolCard
import { PhoneCall, CalendarCheck, MapPin, Truck, TrendingUp, Zap, ShieldCheck, Settings, Users, PackageCheck, Wind } from 'lucide-react';

const Home = () => {
  const featuredTools = tools.slice(0, 4); // Show 4 featured tools

  // Data for new sections - could be moved to a separate file or CMS in the future
  const painSolutions = [
    {
      problem: "Evita la Inversión Inicial en Equipos Costosos.",
      solution: "Solución DMAC: Accede a herramientas profesionales solo cuando las necesitas, optimizando tu presupuesto."
    },
    {
      problem: "No Pierdas Tiempo Buscando Herramientas Específicas.",
      solution: "Solución DMAC: Amplio catálogo y asesoría experta para encontrar rápidamente lo que tu obra requiere."
    },
    {
      problem: "Evita Costos de Mantenimiento y Almacenaje.",
      solution: "Solución DMAC: Nosotros nos encargamos del mantenimiento y guardado. Usa las herramientas y despreocúpate."
    },
    {
      problem: "Proyectos Detenidos por Falta de Equipo Adecuado.",
      solution: "Solución DMAC: Entrega coordinada en la Región de Valparaíso para que tu obra no se detenga."
    }
  ];

  const howItWorksSteps = [
    {
      title: "Coordina",
      description: "Contáctanos y cuéntanos qué necesitas. Te asesoramos para encontrar la herramienta perfecta y coordinamos la entrega.",
      icon: PhoneCall
    },
    {
      title: "Retira o Recibe",
      description: "Retira tus herramientas en nuestro punto o recíbelas donde las necesites en la Región de Valparaíso.",
      icon: Truck
    },
    {
      title: "Avanza",
      description: "Con las herramientas adecuadas, tu proyecto avanza sin contratiempos. ¡Estamos para apoyarte!",
      icon: TrendingUp
    }
  ];

  const differentialBenefits = [
    {
      title: "Entrega Coordinada en Toda la Región",
      description: "Llevamos las herramientas donde tu obra lo requiera en Valparaíso.",
      icon: MapPin
    },
    {
      title: "Equipos Verificados y Listos Para Usar",
      description: "Todas nuestras herramientas pasan por un riguroso control de calidad y mantenimiento.",
      icon: ShieldCheck
    },
    {
      title: "Asesoramiento Experto y Personalizado",
      description: "Te ayudamos a elegir la herramienta exacta para tu necesidad específica.",
      icon: Users
    },
    {
      title: "Evita Costos de Mantenimiento y Almacenaje",
      description: "Concéntrate en tu proyecto, nosotros nos encargamos de los equipos.",
      icon: Settings
    }
  ];

  const faqItems = [
    {
      question: "¿Qué cobertura tienen?",
      answer: "Atendemos toda la Región de Valparaíso, coordinando la entrega donde necesites."
    },
    {
      question: "¿Cómo es el proceso de pago?",
      answer: "Aceptamos transferencias y tarjetas. El pago se realiza al confirmar tu arriendo."
    },
    {
      question: "¿Qué pasa si una herramienta falla?",
      answer: "Contáctanos de inmediato. Gestionamos el reemplazo rápido para no detener tu obra."
    },
    {
      question: "¿Necesito crear una cuenta?",
      answer: "No es obligatorio. Puedes cotizar y arrendar directamente con nuestros asesores."
    }
  ];


  return (
    <div className="w-full"> {/* Removed text-white, backgrounds per section */}
      {/* Hero Section */}
      <section className="bg-gris-claro text-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        {/* Optional: Add a subtle background pattern or image if desired, but keep it light */}
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading leading-tight mb-6 text-foreground">
            Arriendo de herramientas para la construcción <br className="hidden sm:block" />
            <span className="text-highlight-red">Región de Valparaíso</span>
          </h1>
          <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-primary font-bold mb-10"> {/* primary is yellow */}
            Avance Garantizado
          </p>
          {/* Default variant: yellow with black text */}
          <Button asChild size="lg" className="text-lg py-6 px-10">
            <Link to="/catalogo">Cotiza aquí</Link>
          </Button>
        </div>
      </section>

      {/* Dolor-Solución (Pain-Solution) Block */}
      <section className="py-12 sm:py-16 md:py-20 bg-blanco"> {/* bg-blanco is 'background' for light theme, or use specific like 'bg-card' if appropriate */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-foreground">
            Simplificamos el Arriendo de Herramientas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {painSolutions.map((item, index) => (
              <div key={index} className="p-6 border border-border rounded-lg shadow-sm bg-background"> {/* Use bg-background or bg-card */}
                <h3 className="text-xl font-semibold mb-3 text-highlight-red">{item.problem}</h3>
                <p className="text-muted-foreground">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propuesta de Valor (Value Proposition) Phrase */}
      <section className="py-12 sm:py-16 bg-secondary"> {/* bg-gris-claro is bg-secondary */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Transforma tus Proyectos con Herramientas Adecuadas, <span className="text-highlight-red">Sin Complicaciones.</span>
          </p>
        </div>
      </section>

      {/* Vista Previa del Catálogo (Catalog Preview) */}
      <section className="py-12 sm:py-16 md:py-20 bg-background"> {/* or bg-blanco */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-foreground">
            Explora Nuestras Herramientas Destacadas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredTools.map((tool) => (
              // Using the ToolCard component for display.
              // onAdd, onRemove, isSelected are not passed, so it will show "Ver Detalles"
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-12">
            {/* Default variant: yellow with black text */}
            <Button asChild size="lg">
              <Link to="/catalogo">Ver Catálogo Completo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary"> {/* bg-gris-claro is bg-secondary */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-foreground">¿Cómo Arrendar con DMAC?</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8"> {/* Removed text-left, already centered by inner div */}
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm"> {/* bg-card or bg-background */}
                <step.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-highlight-red mb-5" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Diferenciales (Differential Benefits) Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background"> {/* or bg-blanco */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-foreground">Ventajas de Elegir DMAC</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Removed text-left */}
            {differentialBenefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-secondary rounded-lg shadow-sm text-center"> {/* bg-secondary (gris-claro), added text-center */}
                <benefit.icon className="w-10 h-10 text-highlight-red mb-4 mx-auto" /> {/* Added mx-auto for icon centering */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary"> {/* bg-gris-claro is bg-secondary */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-foreground">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-border"> {/* Use theme border */}
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-highlight-red text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-primary"> {/* amarillo-seguridad is primary */}
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-primary-foreground"> {/* text-primary-foreground is black */}
            ¿Listo para Avanzar en tu Proyecto?
          </h2>
          {/* Default variant: yellow with black text */}
          <Button asChild size="lg" className="text-lg py-6 px-10">
            <Link to="/catalogo">Cotiza aquí</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
