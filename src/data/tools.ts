
export interface Tool {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;
  imageUrl: string;
  category: string;
}

export const tools: Tool[] = [
  // Herramientas de Demolición
  {
    id: 1,
    name: 'Martillo Demoledor',
    description: 'Potente martillo para trabajos de demolición pesada.',
    pricePerDay: 50000,
    imageUrl: '/placeholder.svg',
    category: 'Demolición'
  },
  {
    id: 2,
    name: 'Martillo Neumático',
    description: 'Herramienta neumática para romper concreto y asfalto.',
    pricePerDay: 45000,
    imageUrl: '/placeholder.svg',
    category: 'Demolición'
  },
  {
    id: 3,
    name: 'Compresor de Aire 185 CFM',
    description: 'Compresor portátil de alta capacidad para herramientas neumáticas.',
    pricePerDay: 65000,
    imageUrl: '/placeholder.svg',
    category: 'Compresores'
  },

  // Herramientas de Mezcla
  {
    id: 4,
    name: 'Betonera 150L',
    description: 'Mezcladora de concreto de alta capacidad.',
    pricePerDay: 35000,
    imageUrl: '/placeholder.svg',
    category: 'Mezcla'
  },
  {
    id: 5,
    name: 'Betonera 350L Industrial',
    description: 'Mezcladora industrial para grandes volúmenes de concreto.',
    pricePerDay: 75000,
    imageUrl: '/placeholder.svg',
    category: 'Mezcla'
  },
  {
    id: 6,
    name: 'Mezcladora de Mortero',
    description: 'Mezcladora especializada para mortero y adhesivos.',
    pricePerDay: 30000,
    imageUrl: '/placeholder.svg',
    category: 'Mezcla'
  },

  // Andamios y Acceso
  {
    id: 7,
    name: 'Andamio Modular',
    description: 'Estructura segura y versátil para trabajos en altura.',
    pricePerDay: 25000,
    imageUrl: '/placeholder.svg',
    category: 'Andamios'
  },
  {
    id: 8,
    name: 'Escalera Telescópica 6m',
    description: 'Escalera extensible de aluminio para múltiples usos.',
    pricePerDay: 15000,
    imageUrl: '/placeholder.svg',
    category: 'Andamios'
  },
  {
    id: 9,
    name: 'Plataforma Elevadora Manual',
    description: 'Plataforma de trabajo elevable hasta 4 metros.',
    pricePerDay: 85000,
    imageUrl: '/placeholder.svg',
    category: 'Andamios'
  },

  // Generadores y Energía
  {
    id: 10,
    name: 'Generador Eléctrico 5KW',
    description: 'Fuente de energía fiable para sitios de obra.',
    pricePerDay: 60000,
    imageUrl: '/placeholder.svg',
    category: 'Generadores'
  },
  {
    id: 11,
    name: 'Generador Silencioso 10KW',
    description: 'Generador de bajo ruido para zonas residenciales.',
    pricePerDay: 95000,
    imageUrl: '/placeholder.svg',
    category: 'Generadores'
  },
  {
    id: 12,
    name: 'Torre de Iluminación LED',
    description: 'Iluminación portátil de alta potencia para trabajo nocturno.',
    pricePerDay: 55000,
    imageUrl: '/placeholder.svg',
    category: 'Iluminación'
  },

  // Herramientas de Corte
  {
    id: 13,
    name: 'Sierra Circular',
    description: 'Cortes precisos y rápidos en madera y otros materiales.',
    pricePerDay: 20000,
    imageUrl: '/placeholder.svg',
    category: 'Corte'
  },
  {
    id: 14,
    name: 'Cortadora de Concreto',
    description: 'Sierra especializada para cortar concreto y asfalto.',
    pricePerDay: 85000,
    imageUrl: '/placeholder.svg',
    category: 'Corte'
  },
  {
    id: 15,
    name: 'Amoladora Angular 9"',
    description: 'Amoladora de gran tamaño para cortes y desbaste.',
    pricePerDay: 25000,
    imageUrl: '/placeholder.svg',
    category: 'Corte'
  },

  // Compactación
  {
    id: 16,
    name: 'Compactadora Placa',
    description: 'Ideal para compactar suelos y asfalto.',
    pricePerDay: 45000,
    imageUrl: '/placeholder.svg',
    category: 'Compactación'
  },
  {
    id: 17,
    name: 'Rodillo Compactador Manual',
    description: 'Compactador de tambor para espacios reducidos.',
    pricePerDay: 65000,
    imageUrl: '/placeholder.svg',
    category: 'Compactación'
  },
  {
    id: 18,
    name: 'Pisón Neumático',
    description: 'Compactador neumático para zanjas y espacios estrechos.',
    pricePerDay: 40000,
    imageUrl: '/placeholder.svg',
    category: 'Compactación'
  },

  // Soldadura
  {
    id: 19,
    name: 'Soldadora Inverter 200A',
    description: 'Equipo de soldadura eléctrica de alta eficiencia.',
    pricePerDay: 35000,
    imageUrl: '/placeholder.svg',
    category: 'Soldadura'
  },
  {
    id: 20,
    name: 'Soldadora MIG/MAG',
    description: 'Soldadura de alambre continuo para trabajos profesionales.',
    pricePerDay: 50000,
    imageUrl: '/placeholder.svg',
    category: 'Soldadura'
  },

  // Movimiento de Tierra
  {
    id: 21,
    name: 'Vibrador de Concreto',
    description: 'Vibrador de inmersión para compactación de concreto.',
    pricePerDay: 30000,
    imageUrl: '/placeholder.svg',
    category: 'Concreto'
  },
  {
    id: 22,
    name: 'Bomba de Agua Centrífuga',
    description: 'Bomba para drenaje y evacuación de agua.',
    pricePerDay: 40000,
    imageUrl: '/placeholder.svg',
    category: 'Bombas'
  },
  {
    id: 23,
    name: 'Bomba Sumergible',
    description: 'Bomba para agua sucia y lodos.',
    pricePerDay: 45000,
    imageUrl: '/placeholder.svg',
    category: 'Bombas'
  },
  {
    id: 24,
    name: 'Taladro Percutor Industrial',
    description: 'Taladro de alta potencia para concreto y mampostería.',
    pricePerDay: 28000,
    imageUrl: '/placeholder.svg',
    category: 'Perforación'
  }
];

export const calculateDiscount = (days: number): number => {
  if (days >= 180) return 0.25; // 25% para más de 6 meses
  if (days >= 90) return 0.15;  // 15% para más de 3 meses
  if (days >= 30) return 0.10;  // 10% para más de 1 mes
  return 0; // Sin descuento para menos de 1 mes
};

export const getDiscountText = (days: number): string => {
  const discount = calculateDiscount(days);
  if (discount > 0) {
    return `¡${discount * 100}% de descuento aplicado!`;
  }
  return '';
};
