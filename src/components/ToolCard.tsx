
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
    <article className="bg-secondary rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-transparent focus-within:border-brand-yellow focus-within:ring-2 focus-within:ring-brand-yellow flex flex-col">
      <img src={tool.imageUrl} alt={tool.name} className="w-full h-48 object-cover bg-gray-700" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{tool.description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-700/50">
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl font-bold text-brand-yellow">
              ${tool.pricePerDay.toLocaleString('es-CL')}
              <span className="text-sm font-normal text-muted-foreground">/día</span>
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
                <MinusCircle /> Quitar
              </>
            ) : (
              <>
                <PlusCircle /> Añadir
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ToolCard;
