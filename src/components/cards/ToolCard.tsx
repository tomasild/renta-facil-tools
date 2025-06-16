import React from 'react';
import { Tool } from '@/data/tools';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
      <img
        src={tool.imageUrl || '/placeholder.svg'} // Fallback if imageUrl is empty
        alt={`${tool.name} - herramienta-arriendo-valparaiso`}
        className="w-full h-48 object-contain mb-4 rounded bg-gray-100" // Increased height a bit
      />
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{tool.name}</h3>
      <p className="text-sm text-gray-500 mb-3 h-10 overflow-hidden">
        {/* Fixed height for description, overflow hidden */}
        {tool.description ? tool.description.substring(0, 60) + (tool.description.length > 60 ? '...' : '') : 'Descripción no disponible.'}
      </p>
      <p className="text-rojo-dmac font-bold mb-4 text-lg">
        ${tool.pricePerDay ? tool.pricePerDay.toLocaleString('es-CL') : 'N/A'} / día
      </p>
      <Button asChild variant="outline" className="border-rojo-dmac text-rojo-dmac hover:bg-rojo-dmac hover:text-blanco w-full">
        {/* Ideally, link to a specific tool page: /catalogo/${tool.id} */}
        <Link to="/catalogo">Ver Detalles</Link>
      </Button>
    </div>
  );
};

export default ToolCard;
