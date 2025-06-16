
import { ArrowRight, CheckCircle, Clock, Shield, Star, Wrench, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
      icon: <CheckCircle className="w-8 h-8 text-dmac-yellow" />,
      title: 'Ahorro Inmediato',
      description: 'Hasta 70% menos que comprar equipos nuevos'
    },
    {
      icon: <Shield className="w-8 h-8 text-dmac-yellow" />,
      title: 'Sin Mantenimiento',
      description: 'Equipos siempre listos y en perfecto estado'
    },
    {
      icon: <Clock className="w-8 h-8 text-dmac-yellow" />,
      title: 'Entrega Rápida',
      description: 'Disponibilidad inmediata en toda la región'
    },
    {
      icon: <Users className="w-8 h-8 text-dmac-yellow" />,
      title: 'Soporte 24/7',
      description: 'Asistencia técnica cuando la necesites'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Coordina',
      description: 'Selecciona tus herramientas y fecha de entrega'
    },
    {
      number: '02',
      title: 'Retira',
      description: 'Recibe el equipamiento en tu obra o retíralo'
    },
    {
      number: '03',
      title: 'Avanza',
      description: 'Ejecuta tu proyecto con herramientas profesionales'
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative hero-bg text-white py-32 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 text-white">
              Arriendo de herramientas para la construcción
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Región de Valparaíso
            </p>
            <p className="text-3xl md:text-4xl font-bold text-dmac-yellow mb-8">
              Avance Garantizado
            </p>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
              Herramientas profesionales sin inversión inicial. Paga solo por los días que las necesitas.
            </p>
            <Button asChild size="lg" className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold text-lg px-8 py-4 animate-scale-in animate-delay-300">
              <Link to="/catalogo">
                Cotiza aquí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dolor-Solución */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformamos los Desafíos en <span className="text-dmac-yellow">Oportunidades</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((item, index) => (
              <Card key={index} className="bg-card border-border animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-destructive mb-3 text-sm">❌ PROBLEMA:</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{item.problem}</p>
                    <h3 className="font-bold text-green-600 mb-3 text-sm">✅ SOLUCIÓN DMAC:</h3>
                    <p className="text-foreground font-medium text-sm">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Convierte <span className="text-dmac-yellow">gastos fijos</span> en <span className="text-dmac-yellow">inversión inteligente</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Sin compras, sin mantenimiento, sin almacenamiento. Solo resultados profesionales garantizados.
            </p>
          </div>
        </div>
      </section>

      {/* Vista Previa del Catálogo */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Herramientas <span className="text-dmac-yellow">Profesionales</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Equipos de última generación para cualquier proyecto
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-card border-border animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <img src={tool.image} alt={tool.name} className="w-full h-32 object-cover mb-4 rounded bg-muted" />
                  <h3 className="font-bold mb-2">{tool.name}</h3>
                  <p className="text-dmac-yellow font-bold">${tool.price.toLocaleString('es-CL')} / día</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center animate-fade-in-up">
            <Button asChild size="lg" variant="outline" className="border-dmac-yellow text-dmac-yellow hover:bg-dmac-yellow hover:text-black transition-all duration-300">
              <Link to="/catalogo">
                Ver Catálogo Completo
                <Wrench className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cómo <span className="text-dmac-yellow">Funciona</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Proceso simple y rápido en 3 pasos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-dmac-yellow text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Diferenciales */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué elegir <span className="text-dmac-yellow">DMAC</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Final */}
      <section className="py-20 bg-dmac-red text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Obtén tu cotización personalizada y descubre cómo DMAC puede garantizar el avance de tu obra
          </p>
          <Button asChild size="lg" className="bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
            <Link to="/catalogo">
              Cotiza aquí
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
