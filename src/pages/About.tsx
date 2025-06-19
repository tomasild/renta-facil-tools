// src/components/About.tsx
import React from "react";
import {
  Users,
  Shield,
  CheckCircle,
  Calendar,
  Target,
  Award,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Steps, Step } from "@/components/Steps";
import { Link } from "react-router-dom";
import BentoGrid from "@/components/BentoGrid";

const About: React.FC = () => {
  // ──────────────────────────────────────────────────────────────────────────────
  // Valores
  // ──────────────────────────────────────────────────────────────────────────────
  const values = [
    {
      icon: <Shield className="w-8 h-8" />, // color hereda del contenedor
      title: "Confiabilidad",
      description: "Equipos siempre listos y funcionales para tu tranquilidad",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Transparencia",
      description: "Precios claros y justos sin sorpresas ni costos ocultos",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Compromiso",
      description:
        "Tu avance es nuestro compromiso, tu éxito es nuestra misión",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Calidad",
      description:
        "Solo herramientas profesionales certificadas y de primera línea",
    },
  ];

  // ──────────────────────────────────────────────────────────────────────────────
  // Estadísticas
  // ──────────────────────────────────────────────────────────────────────────────
  const stats = [
    {
      number: "15+",
      title: "Años de Experiencia",
      description:
        "Especializados en el sector construcción y arriendo de equipos profesionales",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "500+",
      title: "Proyectos Completados",
      description:
        "Obras exitosas realizadas con nuestras herramientas de alta calidad",
      icon: <Target className="w-8 h-8" />,
    },
    {
      number: "24h",
      title: "Soporte Técnico",
      description:
        "Disponibilidad completa para emergencias y consultas urgentes",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        {/* ────────────────────────── HERO ────────────────────────── */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
              Sobre <span className="text-yellow-400">DMAC</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-light text-slate-300">
              Líderes en arriendo de herramientas profesionales
            </p>
            <p className="mt-6 text-lg sm:text-xl text-slate-200">
              Región de Valparaíso • Chile
            </p>
            <p className="mt-2 text-2xl sm:text-3xl font-bold text-yellow-400">
              Avance Garantizado
            </p>
          </div>
        </section>

        {/* ─────────────────────── QUIÉNES SOMOS ─────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              ¿Quiénes Somos?
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-slate-800">
              <p>
                DMAC es la empresa líder en arriendo de herramientas profesionales para la
                construcción en la Región de Valparaíso. Transformamos la manera en que
                los profesionales acceden a equipamiento especializado, eliminando las
                barreras de inversión inicial y garantizando que tengas las herramientas
                correctas cuando las necesitas.
              </p>
              <p>
                Con años de experiencia en el sector, entendemos que cada proyecto tiene
                necesidades únicas. Por eso ofrecemos soluciones flexibles y
                personalizadas que se adaptan a cualquier tipo de obra, desde pequeñas
                reparaciones hasta grandes proyectos de construcción.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────── FILOSOFÍA ───────────────────────── */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-8">
              Nuestra <span className="text-dmac-yellow">Filosofía</span>
            </h2>
            <Steps>
              <Step
                number="M"
                title="Misión"
                description="Democratizar el acceso a herramientas profesionales de construcción mediante un servicio de arriendo eficiente y confiable que impulse el avance garantizado de cada proyecto en la Región de Valparaíso."
              />
              <Step
                number="V"
                title="Visión"
                description="Ser la empresa de referencia en arriendo de herramientas para construcción en la Región de Valparaíso, reconocida por nuestra excelencia operacional, innovación en servicios y compromiso absoluto con el éxito de nuestros clientes."
              />
              <Step
                number="V"
                title="Valores"
                description="Confiabilidad en equipos siempre listos, transparencia en precios claros, compromiso con tu avance y calidad en herramientas profesionales certificadas."
              />
            </Steps>
          </div>
        </section>

        {/* ───────────────────────── VALORES ───────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <article
                  key={idx}
                  className="bg-card group rounded-2xl border border-slate-200 p-6 text-center shadow-sm hover:border-yellow-300 hover:shadow-xl transition-all"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dmac-yellow text-slate-900">
                    {value.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-background">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────── BENEFICIOS (BENTO) ─────────────────────── */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-yellow-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8">
              Beneficios Clave
            </h2>
            <BentoGrid className="max-w-4xl mx-auto" />
          </div>
        </section>

        {/* ───────────────────────── EQUIPO / STATS ───────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-lg sm:text-xl text-slate-800 mb-12">
              Contamos con profesionales experimentados en construcción, logística y
              atención al cliente que entienden las demandas del sector. Nuestro equipo
              técnico garantiza que cada herramienta esté en perfectas condiciones y lista
              para operar al máximo rendimiento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <article
                  key={i}
                  className="bg-card rounded-2xl border border-slate-200 p-8 text-center shadow-sm hover:border-yellow-300 hover:shadow-xl transition-all"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dmac-yellow text-slate-900">
                    {stat.icon}
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-dmac-yellow">
                    {stat.number}
                  </div>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-background">
                    {stat.title}
                  </h3>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── CTA FINAL ───────────────────────── */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-900 to-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 font-light mb-8">
              Descubre cómo DMAC puede garantizar el avance de tu obra
            </p>
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
            >
              <Link to="/catalogo">Cotizar Ahora</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
