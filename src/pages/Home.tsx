import SimpleParallax from "simple-parallax-js";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Wrench,
  Users,
  Calendar,
  X,
  AlertTriangle,
  Zap,
  DollarSign,
  Settings,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { Steps, Step } from "@/components/Steps";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const Home = () => {
  const tools = [
    { name: "Taladro Percutor", price: 8000, image: "/placeholder.svg" },
    { name: "Sierra Circular", price: 12000, image: "/placeholder.svg" },
    { name: "Amoladora Angular", price: 6000, image: "/placeholder.svg" },
    { name: "Martillo Demoledor", price: 25000, image: "/placeholder.svg" },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
      title: "Ahorro Inmediato",
      description: "Hasta 70% menos que comprar equipos nuevos",
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      title: "Sin Mantenimiento",
      description: "Equipos siempre listos y en perfecto estado",
    },
    {
      icon: <Truck className="w-6 h-6 text-yellow-500" />,
      title: "Entrega Rápida",
      description: "Disponibilidad inmediata en toda la región",
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Soporte 24/7",
      description: "Asistencia técnica cuando la necesites",
    },
  ];

  const problems = [
    {
      problemIcon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      problem: "Inversión inicial alta en herramientas",
      solutionIcon: <CheckCircle className="w-5 h-5 text-green-500" />,
      solution: "Arrienda por días, paga solo lo que usas",
    },
    {
      problemIcon: <Settings className="w-5 h-5 text-red-500" />,
      problem: "Mantenimiento y reparaciones costosas",
      solutionIcon: <Shield className="w-5 h-5 text-green-500" />,
      solution: "Equipos siempre en perfecto estado",
    },
    {
      problemIcon: <X className="w-5 h-5 text-red-500" />,
      problem: "Almacenamiento de equipos pesados",
      solutionIcon: <Zap className="w-5 h-5 text-green-500" />,
      solution: "Sin necesidad de bodegaje ni espacio",
    },
    {
      problemIcon: <Clock className="w-5 h-5 text-red-500" />,
      problem: "Obsolescencia de herramientas",
      solutionIcon: <Star className="w-5 h-5 text-green-500" />,
      solution: "Acceso a tecnología actualizada",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        {/* Hero Section - Modern & Minimalist */}
        <section className="relative isolate overflow-hidden py-20 lg:py-32 text-white">
          {/* Imagen con parallax */}
          <SimpleParallax
            orientation="down left" // diagonal inversa
            scale={1.6}
            delay={0.08}
            maxTransition={45} // ↑ distancia que puede moverse
          >
            <img
              src="/banner.png"
              alt="Herramientas profesionales DMAC"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </SimpleParallax>

          {/* Capa de oscurecimiento para legibilidad */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/60" />

          {/* Contenido centrado */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
                  Herramientas
                  <span className="block text-primary">Profesionales</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300">
                  Sin inversión inicial
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Arriendo de equipos de construcción en la Región de Valparaíso
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-400 mt-4">
                  Avance Garantizado
                </p>
              </div>

              <div className="pt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
                >
                  <Link to="/catalogo">
                    Cotizar Ahora
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions - Bento Grid */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transformamos <span className="text-red-600">Desafíos</span> en
                <span className="text-green-600"> Soluciones</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conocemos los obstáculos de la construcción y tenemos la
                respuesta perfecta
              </p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto">
              {problems.map((item, index) => (
                <BentoItem
                  key={index}
                  className="bg-secondary-foreground border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        {item.problemIcon}
                        <span className="font-semibold text-red-600 text-sm uppercase tracking-wide">
                          Problema
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        {item.solutionIcon}
                        <span className="font-semibold text-green-600 text-sm uppercase tracking-wide">
                          Solución DMAC
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </BentoItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Value Proposition - Minimalist */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Convierte <span className="text-red-600">gastos fijos</span> en
                <span className="text-green-600"> inversión inteligente</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
                Sin compras • Sin mantenimiento • Sin almacenamiento
              </p>
              <div className="text-lg text-gray-500">
                Solo resultados profesionales garantizados
              </div>
            </div>
          </div>
        </section>

        {/* Tools Preview - Modern Cards */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Herramientas{" "}
                <span className="text-yellow-500">Profesionales</span>
              </h2>
              <p className="text-xl text-gray-600">
                Equipos de última generación para cualquier proyecto
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
                >
                  <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-yellow-600 font-bold text-lg">
                    ${tool.price.toLocaleString("es-CL")} / día
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Link to="/catalogo">
                  Ver Catálogo Completo
                  <Wrench className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How it Works - Clean Steps */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cómo <span className="text-yellow-500">Funciona</span>
              </h2>
              <p className="text-xl text-gray-600">
                Proceso simple y rápido en 3 pasos
              </p>
            </div>
            <Steps>
              <Step
                number="01"
                title="Coordina"
                description="Selecciona tus herramientas y fecha de entrega en nuestro catálogo online"
                className="animate-fade-in-up animate-delay-200"
              />
              <Step
                number="02"
                title="Retira"
                description="Recibe el equipamiento en tu obra o retíralo en nuestras instalaciones"
                className="animate-fade-in-up animate-delay-300"
              />
              <Step
                number="03"
                title="Avanza"
                description="Ejecuta tu proyecto con herramientas profesionales y soporte técnico 24/7"
                className="animate-fade-in-up animate-delay-400"
              />
            </Steps>
          </div>
        </section>

        {/* Benefits - Modern Bento */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir <span className="text-yellow-500">DMAC</span>?
              </h2>
            </div>
            <BentoGrid className="max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <BentoItem
                  key={index}
                  className="text-center bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-yellow-100 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </BentoItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA - Modern Design */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                ¿Listo para tu próximo proyecto?
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
                Obtén tu cotización personalizada y descubre cómo DMAC puede
                garantizar el avance de tu obra
              </p>
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
              >
                <Link to="/catalogo">
                  Cotizar Ahora
                  <Calendar className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
