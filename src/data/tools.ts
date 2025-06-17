
export interface Tool {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  category: string;
  image: string;
  specifications?: string[];
  available: boolean;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export const categories: Category[] = [
  { id: 'drilling', name: 'Perforación y Taladrado' },
  { id: 'cutting', name: 'Corte y Sierra' },
  { id: 'grinding', name: 'Amolado y Lijado' },
  { id: 'demolition', name: 'Demolición' },
  { id: 'measuring', name: 'Medición y Nivel' },
  { id: 'safety', name: 'Seguridad' }
];

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Taladro Percutor Profesional',
    description: 'Taladro percutor de alta potencia para concreto y mampostería',
    pricePerDay: 8000,
    category: 'drilling',
    image: '/placeholder.svg',
    specifications: ['800W', 'SDS-Plus', 'Velocidad variable'],
    available: true
  },
  {
    id: '2',
    name: 'Sierra Circular 7¼"',
    description: 'Sierra circular profesional para cortes precisos en madera',
    pricePerDay: 12000,
    category: 'cutting',
    image: '/placeholder.svg',
    specifications: ['1800W', 'Disco 7¼"', 'Corte biselado'],
    available: true
  },
  {
    id: '3',
    name: 'Amoladora Angular 4½"',
    description: 'Amoladora angular para corte y desbaste de metales',
    pricePerDay: 6000,
    category: 'grinding',
    image: '/placeholder.svg',
    specifications: ['900W', 'Disco 4½"', 'Empuñadura auxiliar'],
    available: true
  },
  {
    id: '4',
    name: 'Martillo Demoledor',
    description: 'Martillo demoledor eléctrico para trabajos pesados',
    pricePerDay: 25000,
    category: 'demolition',
    image: '/placeholder.svg',
    specifications: ['1500W', 'SDS-Max', '15 kg'],
    available: true
  },
  {
    id: '5',
    name: 'Nivel Láser Rotativo',
    description: 'Nivel láser profesional para nivelación y alineación',
    pricePerDay: 15000,
    category: 'measuring',
    image: '/placeholder.svg',
    specifications: ['Rango 100m', 'Precisión ±1mm', 'IP54'],
    available: true
  },
  {
    id: '6',
    name: 'Casco de Seguridad',
    description: 'Casco de protección certificado para obras',
    pricePerDay: 2000,
    category: 'safety',
    image: '/placeholder.svg',
    specifications: ['Norma ANSI', 'Ajuste universal', 'Ventilación'],
    available: true
  }
];

export const getDiscountPercentage = (months: number): number => {
  if (months > 6) return 25;
  if (months > 3) return 15;
  if (months > 1) return 10;
  return 0;
};
