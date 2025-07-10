
export interface Tool {
  id: string;
  brand: string;
  name: string;
  category: string;
  pricePerDay: number;
  description: string;
  features: string[];
  image: string;
}

export const tools: Tool[] = [
  {
    "id": "D002722",
    "brand": "Einhell",
    "name": "Esmeril angular 4½″ 750 W",
    "category": "Herramientas de Corte",
    "pricePerDay": 12000,
    "description": "Corte ligero en metal y hormigón.",
    "features": ["Potencia 750 W", "Disco 115 mm", "11 000 rpm", "Empuñadura antideslizante"],
    "image": "https://d2c5rvsfjg2eub.cloudfront.net/image/208244749100/image_59lupuke5d5otbn8n21is57l38/-FJPG-FWEBP-B800"
  },
  {
    "id": "D0421022",
    "brand": "Bosch",
    "name": "Esmeril angular 4½″ 720 W",
    "category": "Herramientas de Corte",
    "pricePerDay": 13000,
    "description": "Corte y desbaste precisos.",
    "features": ["Potencia 720 W", "Disco 115 mm", "11 000 rpm", "Cuerpo ergonómico"],
    "image": "https://www.bosch-professional.com/ge/en/ocsmedia/67036-54/application-image/1434x828/angle-grinder-gws-7-115-0601388106.png"
  },
  {
    "id": "D0510223",
    "brand": "Bosch",
    "name": "Esmeril angular 9″ 2400 W",
    "category": "Herramientas de Corte Pesado",
    "pricePerDay": 18000,
    "description": "Corte pesado en acero y hormigón.",
    "features": ["Potencia 2400 W", "Disco 230 mm", "6500 rpm", "Antivibración"],
    "image": "https://www.bosch-professional.com/eg/en/ocsmedia/354644-54/application-image/1434x828/angle-grinder-gws-24-230-06018C30K0.png"
  },
  {
    "id": "D008722",
    "brand": "Bosch",
    "name": "Rotomartillo GBH 2-28 880 W",
    "category": "Herramientas de Percusión",
    "pricePerDay": 20000,
    "description": "Perforación y cincelado.",
    "features": ["Potencia 880 W", "3,2 J impacto", "4-28 mm", "KickBack Control"],
    "image": "https://www.bosch-professional.com/gb/en/ocsmedia/376087-54/application-image/1434x828/rotary-hammer-with-sds-plus-gbh-2-28-0611267561.png"
  },
  {
    "id": "D018722",
    "brand": "Einhell",
    "name": "Rotomartillo TC-RH 900 900 W",
    "category": "Herramientas de Percusión",
    "pricePerDay": 18000,
    "description": "Taladro percutor 3-en-1.",
    "features": ["Potencia 900 W", "3 J impacto", "hasta 4000 ipm", "Función cincel"],
    "image": "https://d2c5rvsfjg2eub.cloudfront.net/image/208244749100/image_66sqqmiluh4pjbvv5qmifl5d27/-FJPG-FWEBP-B800"
  },
  {
    "id": "D048023",
    "brand": "Bosch",
    "name": "Demoledor GSH 5 CE 1150 W",
    "category": "Herramientas de Demolición",
    "pricePerDay": 28000,
    "description": "Demolición con control de vibración.",
    "features": ["Potencia 1150 W", "8,3 J impacto", "SDS-max", "Vario-Lock"],
    "image": "https://www.bosch-professional.com/sa/en/ocsmedia/379697-54/application-image/1434x828/demolition-hammer-with-sds-max-gsh-5-ce-0611321060.png"
  },
  {
    "id": "D024822",
    "brand": "Bosch",
    "name": "Aspiradora GAS 15 PS 1100 W",
    "category": "Limpieza Industrial",
    "pricePerDay": 15000,
    "description": "Seco/húmedo 15 L.",
    "features": ["Potencia 1100 W", "15 L", "270 mbar", "Filtro semiauto"],
    "image": "https://www.bosch-professional.com/ao/en/ocsmedia/455245-54/application-image/1434x828/wet-dry-extractor-gas-15-ps-06019E5100.png"
  }
]



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
