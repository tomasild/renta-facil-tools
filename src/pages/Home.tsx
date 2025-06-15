
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GitCompareArrows, SendHorizonal, Clock, BadgePercent, Users } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

const Home = () => {
  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <section className="bg-brand-dark text-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092916322-3c1a52b1aaa4?q=80&w=2070&auto=format&fit=crop')"}}></div>
        <div className="container mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight mb-4 animate-[fade-in_1s_ease-out]">
            Cotiza todas tus herramientas <br className="hidden sm:block" />
            <span className="text-brand-yellow">en un solo lugar.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-[fade-in_1s_ease-out_0.5s]">
            Encuentra, compara y arrienda el equipo que necesitas para tu obra de forma rápida y sencilla.
          </p>
          <Button asChild size="lg" className="animate-[fade-in_1s_ease-out_1s] text-lg py-6 px-10">
            <Link to="/catalogo">Solicita tu cotización</Link>
          </Button>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">¿Cómo Funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-center text-center p-6">
              <Search className="w-16 h-16 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">1. Busca tu Herramienta</h3>
              <p className="text-muted-foreground">Utiliza nuestro catálogo para encontrar exactamente lo que necesitas.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <GitCompareArrows className="w-16 h-16 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">2. Compara y Elige</h3>
              <p className="text-muted-foreground">Compara precios y disponibilidad de múltiples proveedores locales.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <SendHorizonal className="w-16 h-16 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">3. Solicita tu Cotización</h3>
              <p className="text-muted-foreground">Añade a tu cotización y envía tu solicitud con un solo clic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nuestros Beneficios</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left text-white">
            <div className="p-6 border border-gray-700/50 rounded-lg bg-secondary">
              <Clock className="w-10 h-10 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">Ahorro de Tiempo</h3>
              <p className="text-muted-foreground">Centraliza tus cotizaciones y reduce horas de gestión.</p>
            </div>
            <div className="p-6 border border-gray-700/50 rounded-lg bg-secondary">
              <BadgePercent className="w-10 h-10 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">Precios Competitivos</h3>
              <p className="text-muted-foreground">Accede a las mejores tarifas y ahorra hasta un 20% en arriendos.</p>
            </div>
            <div className="p-6 border border-gray-700/50 rounded-lg bg-secondary">
              <Users className="w-10 h-10 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">Soporte Local</h3>
              <p className="text-muted-foreground">Conecta con proveedores de confianza en tu zona. CSAT: 98%.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Secundario Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Mantente Informado</h2>
          <p className="text-muted-foreground mb-8">
            Suscríbete a nuestro newsletter para recibir consejos, noticias y las mejores ofertas directamente en tu correo.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Tu correo electrónico" className="bg-brand-dark border-gray-700 h-12 text-base" />
            <Button type="submit" size="lg" className="h-12">Suscribirme</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
