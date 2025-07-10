import { Tool } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle } from "lucide-react";

interface ToolCardProps {
  tool: Tool;

  /** Solo necesarios si se muestran los controles */
  onAdd?: (tool: Tool) => void;
  onRemove?: (tool: Tool) => void;
  isSelected?: boolean;

  /** Oculta el precio */
  hidePrice?: boolean;
  /** Oculta el botón Añadir/Quitar (y el contenedor si también se oculta el precio) */
  hideControls?: boolean;
}

const ToolCard = ({
  tool,
  onAdd,
  onRemove,
  isSelected = false,
  hidePrice = false,
  hideControls = false,
}: ToolCardProps) => {
  const handleToggle = () => {
    if (hideControls) return;
    if (isSelected) onRemove?.(tool);
    else onAdd?.(tool);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-slate-700 bg-card shadow-md transition-shadow duration-300 hover:shadow-xl">
      {/* Imagen */}
      <div className="relative w-full aspect-square bg-muted">
        <img
          src={tool.image}
          alt={tool.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-3">
        <h3 className="mb-1 text-base font-bold text-slate-200 sm:text-lg">
          {tool.name}
        </h3>
        {/* Marca debajo del nombre */}
        <p className="mb-2 text-sm text-slate-400">{tool.brand}</p>

        {/* Descripción corta opcional */}
        {tool.description && (
          <p className="mb-4 flex-grow text-sm text-slate-400 text-preety">
            {tool.description}
          </p>
        )}

        {/* Precio y / o controles */}
        {(!hidePrice || !hideControls) && (
          <div className="mt-auto border-t border-slate-700 pt-4">
            {!hidePrice && (
              <p className="mb-4 text-lg font-bold text-dmac-yellow">
                ${tool.pricePerDay.toLocaleString("es-CL")}
                <span className="ml-1 text-sm font-normal text-slate-200">
                  /día
                </span>
              </p>
            )}

            {!hideControls && (
              <Button
                onClick={handleToggle}
                variant={isSelected ? "secondary" : "default"}
                size="lg"
                className="w-full font-bold"
                aria-label={
                  isSelected
                    ? `Quitar ${tool.name} de la cotización`
                    : `Añadir ${tool.name} a la cotización`
                }
              >
                {isSelected ? (
                  <>
                    <MinusCircle className="mr-2 h-4 w-4" /> Quitar
                  </>
                ) : (
                  <>
                    <PlusCircle className="mr-2 h-4 w-4" /> Añadir
                  </>
                )}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ToolCard;
