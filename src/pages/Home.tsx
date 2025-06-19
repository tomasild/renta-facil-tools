import SimpleParallax from "simple-parallax-js";
import {
  ArrowRight,
  Shield,
  Wrench,
  Users,
  Calendar,
  DollarSign,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Steps, Step } from "@/components/Steps";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";
import ProblemSolutionCards from "@/components/ProblemSolutionsCards";
import BentoGrid from "@/components/BentoGrid";

const Home = () => {
  const tools = [
    { name: "Taladro Percutor", price: 8000, image: "/placeholder.svg" },
    { name: "Sierra Circular", price: 12000, image: "/placeholder.svg" },
    { name: "Amoladora Angular", price: 6000, image: "/placeholder.svg" },
    { name: "Martillo Demoledor", price: 25000, image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="relative isolate overflow-hidden py-20 lg:py-32 text-white">
          {/* Imagen con parallax (lógica intacta) */}
          <SimpleParallax
            orientation="down left"
            scale={1.6}
            delay={0.08}
            maxTransition={45}
          >
            <img
              src="/banner.png"
              alt="Herramientas profesionales DMAC"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </SimpleParallax>

          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/60" />

          <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
              Herramientas
              <span className="block text-primary">profesionales</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300">
              Sin inversión inicial
            </p>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-200 leading-relaxed">
              Arriendo de equipos de construcción en la Región de Valparaíso
            </p>

            <p className="text-2xl sm:text-3xl font-bold text-yellow-400">
              Avance garantizado
            </p>

            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 rounded-xl shadow-2xl hover:shadow-yellow-400/25 transition-transform duration-300 hover:scale-105"
            >
              <Link to="/catalogo">
                Cotizar ahora
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </section>

        {/* ─────── Problemas & Soluciones ─────── */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-16 text-center">
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Transformamos <span className="text-dmac-red">desafíos</span> de
                obra en progreso real
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-800">
                Conocemos los obstáculos de la construcción y tenemos la
                respuesta perfecta.
              </p>
            </header>

            <ProblemSolutionCards />
          </div>
        </section>

        {/* ──────────── Propuesta de valor ──────────── */}
        <section
          id="value-proposition"
          aria-label="Propuesta de valor DMAC"
          className="relative overflow-hidden bg-card py-16 lg:py-24"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[url('/banner.png')] bg-cover bg-center opacity-5"
            aria-hidden
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mx-auto max-w-5xl text-center">
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-background leading-tight">
                Avance garantizado: arriendo inteligente de herramientas en la
                Región de Valparaíso
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl text-slate-400">
                Logra resultados profesionales y cumple plazos sin compras
                costosas, sin mantención ni bodegas improductivas. Con DMAC, tu
                obra avanza más rápido, con eficiencia, confianza y rapidez
                responsable.
              </p>

              <ul
                role="list"
                className="mx-auto mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                {[
                  "Ahorro inmediato",
                  "Flexibilidad total",
                  "Sin bodegas desocupadas",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-base sm:text-lg text-slate-200"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-yellow-500"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="font-semibold hover:border hover:border-background text-card px-8 py-4 rounded-xl transition-colors duration-300 hover:bg-card hover:text-white"
              >
                <Link to="/catalogo">
                  Cotiza tu equipo ahora
                  <Wrench className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </header>
          </div>
        </section>

        {/* ─────────── Herramientas destacadas ─────────── */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-16 text-center">
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Herramientas <span className="text-yellow-500">profesionales</span>
              </h2>
              <p className="text-xl text-gray-600">
                Equipos de última generación para cualquier proyecto
              </p>
            </header>

            <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <article
                  key={tool.name}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-gray-200 hover:shadow-xl"
                >
                  <figure className="mb-4 overflow-hidden rounded-xl bg-gray-100 aspect-square">
                    <img
                      src={tool.image}
                      alt={`Vista del ${tool.name}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </figure>
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-gray-900">
                    {tool.name}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-yellow-600">
                    ${tool.price.toLocaleString("es-CL")} / día
                  </p>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 px-8 py-4 font-semibold text-gray-900 rounded-xl transition-colors duration-300 hover:bg-gray-900 hover:text-white"
              >
                <Link to="/catalogo">
                  Ver catálogo completo
                  <Wrench className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ─────────────── Pasos de uso ─────────────── */}
        <section className="bg-slate-900 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-16 text-center">
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-background">
                Cómo <span className="text-yellow-500">funciona</span>
              </h2>
              <p className="text-xl text-slate-400">
                Proceso simple y rápido en 3 pasos
              </p>
            </header>

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

        {/* ─────────────── Beneficios (Bento) ─────────────── */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-16 text-center">
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                ¿Por qué elegir <span className="text-dmac-red">DMAC</span>?
              </h2>
            </header>
            <BentoGrid />
          </div>
        </section>

        {/* ─────────────── FAQ ─────────────── */}
        <FAQ />

        {/* ─────────────── CTA final ─────────────── */}
        <section className="bg-gradient-to-r from-gray-900 to-black py-16 lg:py-24 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl font-light leading-relaxed text-gray-300">
              Obtén tu cotización personalizada y descubre cómo DMAC puede
              garantizar el avance de tu obra
            </p>

            <Button
              asChild
              size="lg"
              className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/25"
            >
              <Link to="/catalogo">
                Cotizar ahora
                <Calendar className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
