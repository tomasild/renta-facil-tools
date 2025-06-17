
export interface Tool {
  id: string;
  name: string;
  category: string;
  pricePerDay: number;
  description: string;
  features: string[];
  image: string;
}

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Taladro Percutor HD',
    category: 'Herramientas Eléctricas',
    pricePerDay: 8000,
    description: 'Taladro percutor profesional para concreto y mampostería',
    features: ['800W de potencia', 'Función percutor', 'Mandril SDS-Plus', 'Incluye brocas'],
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Sierra Circular Pro',
    category: 'Herramientas de Corte',
    pricePerDay: 12000,
    description: 'Sierra circular profesional para madera y materiales diversos',
    features: ['1200W de potencia', 'Disco 7 1/4"', 'Guía láser', 'Base ajustable'],
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Amoladora Angular',
    category: 'Herramientas de Desbaste',
    pricePerDay: 6000,
    description: 'Amoladora angular para corte y desbaste de metales',
    features: ['900W de potencia', 'Disco 4 1/2"', 'Empuñadura antivibración', 'Protector ajustable'],
    image: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'Martillo Demoledor',
    category: 'Herramientas de Demolición',
    pricePerDay: 25000,
    description: 'Martillo demoledor pesado para trabajos de demolición',
    features: ['1500W de potencia', 'Sistema SDS-Max', 'Control de vibración', 'Incluye cinceles'],
    image: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Compresor de Aire',
    category: 'Equipos Neumáticos',
    pricePerDay: 15000,
    description: 'Compresor de aire portátil para herramientas neumáticas',
    features: ['50L de capacidad', '8 bar de presión', 'Motor 2HP', 'Ruedas para transporte'],
    image: '/placeholder.svg'
  },
  {
    id: '6',
    name: 'Soldadora Eléctrica',
    category: 'Equipos de Soldadura',
    pricePerDay: 18000,
    description: 'Soldadora eléctrica por arco para trabajos de metal',
    features: ['200A de corriente', 'Electrodo 2-4mm', 'Control digital', 'Incluye careta'],
    image: '/placeholder.svg'
  }
];

// Función para calcular descuentos por duración
export const calculateDiscount = (days: number): number => {
  if (days >= 180) return 0.15; // 6 meses o más: 15% descuento
  if (days >= 90) return 0.10; // 3 meses o más: 10% descuento
  if (days >= 30) return 0.05; // 1 mes o más: 5% descuento
  return 0; // Menos de 1 mes: sin descuento
};

// Función para obtener texto descriptivo del descuento
export const getDiscountText = (days: number): string => {
  if (days >= 180) return '🎉 ¡Descuento del 15% por arriendo de 6+ meses!';
  if (days >= 90) return '🎉 ¡Descuento del 10% por arriendo de 3+ meses!';
  if (days >= 30) return '🎉 ¡Descuento del 5% por arriendo de 1+ mes!';
  if (days >= 25) return '⏰ ¡Solo 5 días más para obtener descuento del 5%!';
  if (days >= 85) return '⏰ ¡Solo 5 días más para obtener descuento del 10%!';
  if (days >= 175) return '⏰ ¡Solo 5 días más para obtener descuento del 15%!';
  return '';
};

// Función para obtener herramientas por categoría
export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter(tool => tool.category === category);
};

// Función para obtener todas las categorías
export const getCategories = (): string[] => {
  return Array.from(new Set(tools.map(tool => tool.category)));
};

// Función para buscar herramientas
export const searchTools = (query: string): Tool[] => {
  const lowerQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery)
  );
};
