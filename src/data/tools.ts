
export interface Tool {
  id: string;
  name: string;
  category: string;
  pricePerDay: number;
  description: string;
  image: string;
}

export const tools: Tool[] = [
  // Herramientas de Perforación
  {
    id: '1',
    name: 'Taladro Percutor Profesional',
    category: 'Perforación',
    pricePerDay: 8000,
    description: 'Ideal para perforación en concreto y mampostería',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Rotomartillo SDS-Plus',
    category: 'Perforación',
    pricePerDay: 15000,
    description: 'Potente rotomartillo para trabajos pesados',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Taladro de Columna',
    category: 'Perforación',
    pricePerDay: 12000,
    description: 'Precisión perfecta para perforaciones exactas',
    image: '/placeholder.svg'
  },

  // Herramientas de Corte
  {
    id: '4',
    name: 'Sierra Circular 7 1/4"',
    category: 'Corte',
    pricePerDay: 12000,
    description: 'Cortes precisos en madera y materiales similares',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Amoladora Angular 9"',
    category: 'Corte',
    pricePerDay: 6000,
    description: 'Versátil para corte y desbaste de metales',
    image: '/placeholder.svg'
  },
  {
    id: '6',
    name: 'Sierra Caladora Profesional',
    category: 'Corte',
    pricePerDay: 8000,
    description: 'Cortes curvos y rectos con máxima precisión',
    image: '/placeholder.svg'
  },
  {
    id: '7',
    name: 'Cortadora de Azulejos',
    category: 'Corte',
    pricePerDay: 18000,
    description: 'Cortes limpios en cerámica y porcelanato',
    image: '/placeholder.svg'
  },

  // Herramientas de Demolición
  {
    id: '8',
    name: 'Martillo Demoledor 15kg',
    category: 'Demolición',
    pricePerDay: 25000,
    description: 'Para demolición de muros y pavimentos',
    image: '/placeholder.svg'
  },
  {
    id: '9',
    name: 'Compresor de Aire 100L',
    category: 'Demolición',
    pricePerDay: 22000,
    description: 'Potencia neumática para múltiples herramientas',
    image: '/placeholder.svg'
  },
  {
    id: '10',
    name: 'Martillo Neumático',
    category: 'Demolición',
    pricePerDay: 20000,
    description: 'Demolición eficiente con aire comprimido',
    image: '/placeholder.svg'
  },

  // Herramientas de Lijado
  {
    id: '11',
    name: 'Lijadora Orbital',
    category: 'Lijado',
    pricePerDay: 7000,
    description: 'Acabados perfectos en superficies de madera',
    image: '/placeholder.svg'
  },
  {
    id: '12',
    name: 'Lijadora de Banda',
    category: 'Lijado',
    pricePerDay: 9000,
    description: 'Lijado rápido de grandes superficies',
    image: '/placeholder.svg'
  },
  {
    id: '13',
    name: 'Pulidora de Piso',
    category: 'Lijado',
    pricePerDay: 35000,
    description: 'Pulido profesional de pisos de concreto',
    image: '/placeholder.svg'
  },

  // Herramientas de Medición
  {
    id: '14',
    name: 'Nivel Láser Rotativo',
    category: 'Medición',
    pricePerDay: 16000,
    description: 'Nivelación precisa en 360 grados',
    image: '/placeholder.svg'
  },
  {
    id: '15',
    name: 'Detector de Metales',
    category: 'Medición',
    pricePerDay: 5000,
    description: 'Localiza tuberías y cables en muros',
    image: '/placeholder.svg'
  },

  // Equipos de Elevación
  {
    id: '16',
    name: 'Montacargas Manual 1T',
    category: 'Elevación',
    pricePerDay: 18000,
    description: 'Elevación segura de materiales pesados',
    image: '/placeholder.svg'
  },
  {
    id: '17',
    name: 'Andamio Móvil 3m',
    category: 'Elevación',
    pricePerDay: 25000,
    description: 'Trabajo seguro en altura con movilidad',
    image: '/placeholder.svg'
  },

  // Herramientas Eléctricas Especializadas
  {
    id: '18',
    name: 'Pistola de Calor Industrial',
    category: 'Especializada',
    pricePerDay: 6000,
    description: 'Aplicaciones de calor controlado',
    image: '/placeholder.svg'
  },
  {
    id: '19',
    name: 'Soldadora MIG 200A',
    category: 'Especializada',
    pricePerDay: 28000,
    description: 'Soldadura profesional de metales',
    image: '/placeholder.svg'
  },
  {
    id: '20',
    name: 'Generador Eléctrico 5KW',
    category: 'Especializada',
    pricePerDay: 32000,
    description: 'Energía portátil para cualquier lugar',
    image: '/placeholder.svg'
  }
];

export const calculateDiscount = (days: number): number => {
  if (days >= 180) return 0.25; // 25% para más de 6 meses
  if (days >= 90) return 0.15;  // 15% para más de 3 meses
  if (days >= 30) return 0.10;  // 10% para más de 1 mes
  return 0;
};

export const getDiscountText = (days: number): string => {
  if (days >= 180) return '¡25% de descuento por arriendo de más de 6 meses!';
  if (days >= 90) return '¡15% de descuento por arriendo de más de 3 meses!';
  if (days >= 30) return '¡10% de descuento por arriendo de más de 1 mes!';
  return '';
};
