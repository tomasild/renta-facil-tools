import { CheckCircle, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------- DATA ----------
const items = [
  {
    painTitle: "Capital atrapado",
    painDesc: "Cada peso invertido en maquinaria frena tu flujo de caja.",
    solutionTitle: "Caja siempre libre",
    solutionDesc:
      "Arrienda por jornada y paga solo cuando la máquina factura para ti.",
  },
  {
    painTitle: "Mantenciones que sangran tu presupuesto",
    painDesc:
      "Averías y repuestos imprevistos paralizan tu obra y tu bolsillo.",
    solutionTitle: "Cero gastos de taller",
    solutionDesc:
      "Entregamos equipos calibrados y absorbemos todas las reparaciones.",
  },
  {
    painTitle: "Bodega repleta, ganancias ausentes",
    painDesc: "Herramientas quietas ocupan m² valiosos que no generan retorno.",
    solutionTitle: "Espacio que produce",
    solutionDesc:
      "Nosotros guardamos el fierro; tú usas cada metro para lo que vende.",
  },
  {
    painTitle: "Tecnología obsoleta antes de terminar la faena",
    painDesc: "La depreciación corre más rápido que tu proyecto.",
    solutionTitle: "Innovación sin comprar",
    solutionDesc:
      "Estrena modelos de última generación sin inmovilizar capital ni asumir devaluación.",
  },
];

// ---------- CARD ----------
interface CardProps {
  painTitle: string;
  painDesc: string;
  solutionTitle: string;
  solutionDesc: string;
}

const Card = ({
  painTitle,
  painDesc,
  solutionTitle,
  solutionDesc,
}: CardProps) => (
  <article
    className={cn(
      "flex h-full flex-col justify-between rounded-2xl border border-card bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg"
    )}
    itemScope
    itemType="https://schema.org/Question"
  >
    {/* PAIN */}
    <header className="mb-6 text-center">
      <AlertTriangle
        className="mx-auto mb-3 h-6 w-6 text-red-500"
        role="img"
        aria-label="Icono de dolor"
      />
      <h3 className="text-lg font-semibold text-red-500" itemProp="name">
        {painTitle}
      </h3>
      {painDesc && (
        <p className="mt-2 text-sm leading-5 text-gray-300">{painDesc}</p>
      )}
    </header>

    <hr className="my-4 border-gray-500" />

    {/* SOLUTION */}
    <footer
      className="text-center"
      itemProp="acceptedAnswer"
      itemScope
      itemType="https://schema.org/Answer"
    >
      <CheckCircle
        className="mx-auto mb-3 h-6 w-6 text-yellow-400"
        role="img"
        aria-label="Icono de solución"
      />
      <h4 className="text-lg font-semibold text-gray-50">{solutionTitle}</h4>
      <p className="mt-2 text-sm leading-5 text-gray-300" itemProp="text">
        {solutionDesc}
      </p>
    </footer>
  </article>
);

// ---------- GRID WRAPPER ----------
export const ProblemSolutionCards = () => (
  <section
    id="dolores-soluciones"
    aria-label="Dolores y Soluciones de la Construcción"
    className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
  >
    <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
      Elimina tus dolores, acelera tu obra
    </h2>

    <ul className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <li key={item.painTitle} className="h-full">
          <Card {...item} />
        </li>
      ))}
    </ul>
  </section>
);

export default ProblemSolutionCards;
