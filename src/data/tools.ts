
export interface Tool {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;
  imageUrl: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: 'Martillo Demoledor',
    description: 'Potente martillo para trabajos de demolición pesada.',
    pricePerDay: 50,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Betonera 150L',
    description: 'Mezcladora de concreto de alta capacidad.',
    pricePerDay: 35,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Andamio Modular',
    description: 'Estructura segura y versátil para trabajos en altura.',
    pricePerDay: 25,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 4,
    name: 'Generador Eléctrico',
    description: 'Fuente de energía fiable para cualquier sitio de obra.',
    pricePerDay: 60,
    imageUrl: '/placeholder.svg',
  },
    {
    id: 5,
    name: 'Sierra Circular',
    description: 'Cortes precisos y rápidos en madera y otros materiales.',
    pricePerDay: 20,
    imageUrl: '/placeholder.svg',
  },
  {
    id: 6,
    name: 'Compactadora Placa',
    description: 'Ideal para compactar suelos y asfalto.',
    pricePerDay: 45,
    imageUrl: '/placeholder.svg',
  },
];
