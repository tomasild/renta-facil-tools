
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
    id: 'ESM-45',
    name: 'Esmeril Angular 4 ½″ 750 W',
    category: 'Herramientas de Corte',
    pricePerDay: 13000,
    description: 'Esmeril compacto de 4 ½″ ideal para corte y desbaste ligero en metal y hormigón.',
    features: ['Potencia 750 W', 'Disco 115 mm', '11 000 rpm', 'Empuñadura lateral antideslizante'],
    image: 'https://olateferreteria.cl/wp-content/uploads/2023/02/TG10711556-600x600.png'
  },
  {
    id: 'ESM-90',
    name: 'Esmeril Angular 9″ 2200 W',
    category: 'Herramientas de Corte',
    pricePerDay: 3000,
    description: 'Esmeril de 9″ de alto torque para corte pesado y pulido industrial exigente.',
    features: ['Potencia 2200 W', 'Disco 230 mm', 'Hasta 8 500 rpm', 'Empuñadura 3 posiciones'],
    image: 'https://comercialfoch.cl/cdn/shop/files/image_2.png?v=1741705027&width=1946'
  },
  {
    id: 'ROT-26',
    name: 'Rotomartillo SDS-Plus 26 mm',
    category: 'Herramientas de Percusión',
    pricePerDay: 4500,
    description: 'Rotomartillo 26 mm SDS-Plus para perforar hormigón con opción rotación y percusión.',
    features: ['Motor 800 W', 'Energía 2,6 J', '1 500 rpm', 'Golpes 5 400 bpm'],
    image: 'https://comercialfoch.cl/cdn/shop/files/image.png?v=1741704671&width=1445'
  },
  {
    id: 'BOR-40',
    name: 'Borhammer SDS-Max 40 mm',
    category: 'Percusión Pesada',
    pricePerDay: 6000,
    description: 'Borhammer SDS-Max para perforaciones profundas y cincelado continuo en concreto armado.',
    features: ['Potencia 1 150 W', 'Energía 8,8 J', '1 500-3 050 bpm', 'Control de vibración'],
    image: 'https://brsgroup.cl/wp-content/uploads/2022/09/Martillo-perforador-GBH-5-40-DCe-Bosch.jpg'
  },
  {
    id: 'DEM-32',
    name: 'Martillo Demoledor 32 J',
    category: 'Herramientas de Demolición',
    pricePerDay: 10000,
    description: 'Demoledor pesado de 32 J para derribo de muros, losas y cimientos con mínima vibración.',
    features: ['Potencia 1 500 W', 'Sistema SDS-Max', '32 J de impacto', 'Incluye cinceles'],
    image: 'https://comercialfoch.cl/cdn/shop/files/image_5.png?v=1741705596&width=1445'
  },
  {
    id: 'ASP-30',
    name: 'Aspiradora Industrial 30 L',
    category: 'Equipos de Limpieza',
    pricePerDay: 7000,
    description: 'Aspiradora polvo/agua de 30 L en acero inox para talleres y obras de construcción.',
    features: ['Motor 1 000 W', 'Estanque 30 L', 'Función soplado', 'Ruedas de transporte'],
    image: 'https://brsgroup.cl/wp-content/uploads/2022/09/Aspiradora-Agua-Polvo-30-litros-1-500x500.jpg'
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
