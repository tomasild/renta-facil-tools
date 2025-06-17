import { Tool } from '@/data/tools';
import { Button } from '@/components/ui/button';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { formatCurrencyCLP } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useQuote } from '@/contexts/QuoteContext'; // Import useQuote

interface ToolCardProps {
  tool: Tool;
  // onAdd, onRemove, isSelected props are removed as context will be used
}

const ToolCard = ({ tool }: ToolCardProps) => { // Props simplified
  const { addToQuote, removeFromQuote, isToolInQuote } = useQuote();
  const isSelected = isToolInQuote(tool.id); // Get status from context

  const handleToggle = () => {
    if (isSelected) {
      removeFromQuote(tool.id);
    } else {
      addToQuote(tool); // tool object itself
    }
  };

  return (
    <article className="bg-card rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg flex flex-col border border-border focus-within:ring-2 focus-within:ring-ring animate-fade-in-up">
      <img
        src={tool.imageUrl || '/placeholder.svg'}
        alt={`${tool.name} - herramienta-arriendo-valparaiso`}
        className="w-full h-48 object-contain bg-muted hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2">{tool.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {tool.description || 'Descripción no disponible.'}
        </p>
        
        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-bold text-highlight-red">
              {formatCurrencyCLP(tool.pricePerDayCLP)}
              <span className="text-sm text-muted-foreground font-normal"> / día</span>
            </p>
          </div>
          {/* Button now uses context directly */}
          <Button
            onClick={handleToggle}
            variant={isSelected ? "outline" : "default"}
            className="w-full font-semibold flex items-center justify-center gap-2"
            size="default"
            aria-label={isSelected ? `Quitar ${tool.name} de la cotización` : `Añadir ${tool.name} a la cotización`}
          >
            {isSelected ? (
              <>
                <MinusCircle /> Quitar de Cotización
              </>
            ) : (
              <>
                <PlusCircle /> Agregar a Cotización
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ToolCard;
