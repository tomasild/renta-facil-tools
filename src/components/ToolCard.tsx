
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
    <article className="bg-secondary rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-transparent focus-within:border-brand-yellow focus-within:ring-2 focus-within:ring-brand-yellow">
      <img src={tool.imageUrl} alt={tool.name} className="w-full h-48 object-cover bg-gray-700" />
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{tool.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-2xl font-bold text-brand-yellow">
            ${tool.pricePerDay.toLocaleString('es-CL')}
            <span className="text-sm font-normal text-muted-foreground">/día</span>
          </p>
          <Button
            onClick={handleToggle}
            variant={isSelected ? "secondary" : "default"}
            className="rounded-full w-12 h-12 p-0 text-2xl"
            aria-label={isSelected ? `Quitar ${tool.name} de la cotización` : `Añadir ${tool.name} a la cotización`}
          >
            {isSelected ? <MinusCircle size={28} /> : <PlusCircle size={28} />}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ToolCard;
