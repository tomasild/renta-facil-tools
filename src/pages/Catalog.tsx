import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Search, Calendar } from 'lucide-react';
import { tools, getCategories } from '@/data/tools';
import { useQuote } from '@/contexts/QuoteContext';
import ToolCard from '@/components/ToolCard';
import QuoteCalculator from '@/components/QuoteCalculator';

const Catalog: React.FC = () => {
  // Estados para búsqueda, categoría y orden
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Contexto de cotización
  const { selectedTools, addTool, removeTool, isToolSelected } = useQuote();
  const categories = getCategories();

  // --- FILTRADO y ORDENAMIENTO ---
  const filteredTools = tools
    // 1) busca por nombre o descripción
    .filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // 2) filtra por categoría si no es "all"
    .filter(tool =>
      selectedCategory === 'all' || tool.category === selectedCategory
    )
    // 3) ordena según la opción seleccionada
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.pricePerDay - b.pricePerDay;
        case 'price-high':
          return b.pricePerDay - a.pricePerDay;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <main id="main-content">
        {/* Hero */}
        <section
          className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
          role="banner"
          aria-labelledby="catalog-hero-heading"
        >
          <div className="container mx-auto text-center animate-fade-in-up">
            <h1
              id="catalog-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            >
              Catálogo de <span className="text-yellow-400">Herramientas</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Encuentra las herramientas profesionales que necesitas para tu proyecto
            </p>
          </div>
        </section>

        {/* Contenedor principal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          
          {/* Barra de búsqueda, filtro y orden */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Input de búsqueda */}
            <div className="relative w-full sm:w-1/3">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar herramienta..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border-gray-300 rounded-lg w-full"
                aria-label="Buscar herramientas"
              />
            </div>
            {/* Select de categoría */}
            <div className="w-full sm:w-1/3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full border-gray-300 rounded-lg">
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Select de orden */}
            <div className="w-full sm:w-1/3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full border-gray-300 rounded-lg">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                  <SelectItem value="price-low">Precio: Menor → Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor → Menor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Grid de resultados */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool, idx) => (
                <div
                  key={tool.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <ToolCard
                    tool={tool}
                    onAdd={addTool}
                    onRemove={removeTool}
                    isSelected={isToolSelected(tool)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No se encontraron herramientas</h3>
              <p className="text-gray-600 mb-4">Ajusta tu búsqueda o filtros.</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('name');
                }}
                variant="outline"
                className="border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white"
              >
                Limpiar filtros
              </Button>
            </div>
          )}

          {/* Separador + Cotizador */}
          {selectedTools.length > 0 && (
            <>
              <Separator className="my-12" />
              <div className="animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                  <Calendar className="h-6 sm:h-8 w-6 sm:w-8 text-red-600" />
                  Calculadora de Cotización
                </h2>
                <QuoteCalculator />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Catalog;
