
import { Tool } from '@/data/tools';
import { Button } from '@/components/ui/button';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  onAdd: (tool: Tool) => void;
  onRemove: (tool: Tool) => void;
  isSelected: boolean;
}

const ToolCard = ({ tool, onAdd, onRemove, isSelected }: ToolCardProps) => {
  const handleToggle = () => {
    if (isSelected) {
      onRemove(tool);
    } else {
      onAdd(tool);
    }
  };

  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up flex flex-col">
      <img 
        src={tool.image} 
        alt={tool.name} 
        className="w-full h-auto object-cover bg-muted" 
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base xl:text-xl font-bold text-slate-200 mb-2">{tool.name}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow text-balance">{tool.description}</p>
        
        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg xl:text-2xl font-bold text-dmac-yellow">
              ${tool.pricePerDay.toLocaleString('es-CL')}
              <span className="text-sm font-normal text-slate-200">/día</span>
            </p>
          </div>
          <Button
            onClick={handleToggle}
            variant={isSelected ? "secondary" : "default"}
            className="w-full font-bold"
            size="lg"
            aria-label={isSelected ? `Quitar ${tool.name} de la cotización` : `Añadir ${tool.name} a la cotización`}
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
        </div>
      </div>
    </article>
  );
};

export default ToolCard;
