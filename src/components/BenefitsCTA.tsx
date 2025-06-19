// src/components/BenefitsCTA.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitItem {
  text: string;
}

const benefits: BenefitItem[] = [
  { text: "Ahorro inmediato" },
  { text: "Flexibilidad total" },
  { text: "Sin bodegas desocupadas" },
];

export const BenefitsCTA = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <section
    id="beneficios-clave"
    aria-label="Beneficios clave de DMAC"
    className={cn(
      "py-16 lg:py-24 bg-white",
      className // permite sobreescribir estilos desde el padre
    )}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* Beneficios */}
        <ul className="mx-auto mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {benefits.map(({ text }) => (
            <li
              key={text}
              className="flex items-center gap-2 text-base text-slate-600 sm:text-lg"
            >
              <Check
                className="h-5 w-5 flex-none text-yellow-500"
                aria-hidden
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          variant="default"
          className="font-semibold text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
        >
          <Link to="/catalogo">
            Cotiza tu equipo ahora
            <Wrench className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default BenefitsCTA;
