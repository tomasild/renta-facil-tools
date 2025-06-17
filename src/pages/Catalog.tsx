
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Search, Filter, ShoppingCart, Calendar } from 'lucide-react';
import { tools, Tool, categories } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import QuoteCalculator from '@/components/QuoteCalculator';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTools, setSelectedTools] = useState<Tool[]>([]);
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredTools = tools
    .filter(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(tool => selectedCategory === 'all' || tool.category === selectedCategory)
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

  const handleAddTool = (tool: Tool) => {
    setSelectedTools(prev => [...prev, tool]);
  };

  const handleRemoveTool = (tool: Tool) => {
    setSelectedTools(prev => prev.filter(t => t.id !== tool.id));
  };

  const isToolSelected = (tool: Tool) => {
    return selectedTools.some(t => t.id === tool.id);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="bg-dmac-red text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
          role="banner"
          aria-labelledby="catalog-hero-heading"
        >
          <div className="container mx-auto text-center animate-fade-in-up">
            <h1 id="catalog-hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading mb-4">
              Catálogo de <span className="text-dmac-yellow">Herramientas</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Encuentra las herramientas profesionales que necesitas para tu proyecto
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filtros y Búsqueda */}
            <aside className="lg:col-span-1" role="complementary" aria-label="Filtros de búsqueda">
              <Card className="sticky top-24 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    <Filter className="h-5 w-5" aria-hidden="true" />
                    Filtros
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Búsqueda */}
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium mb-2 text-black">
                      Buscar herramientas
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" aria-hidden="true" />
                      <Input
                        id="search"
                        type="search"
                        placeholder="Buscar por nombre o descripción..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                        aria-describedby="search-help"
                      />
                    </div>
                    <p id="search-help" className="text-xs text-gray-500 mt-1">
                      Busca por nombre o descripción de la herramienta
                    </p>
                  </div>

                  {/* Categoría */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-2 text-black">
                      Categoría
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas las categorías</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Ordenar */}
                  <div>
                    <label htmlFor="sort" className="block text-sm font-medium mb-2 text-black">
                      Ordenar por
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sort">
                        <SelectValue placeholder="Ordenar por" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Nombre A-Z</SelectItem>
                        <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                        <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Resumen de selección */}
                  {selectedTools.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2 flex items-center gap-2 text-black">
                        <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                        Herramientas Seleccionadas
                      </h3>
                      <Badge variant="secondary" className="bg-gray-200 text-black">
                        {selectedTools.length} herramienta{selectedTools.length !== 1 ? 's' : ''}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </aside>

            {/* Lista de Herramientas */}
            <main className="lg:col-span-3">
              {/* Información de resultados */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-black">
                    {filteredTools.length} herramienta{filteredTools.length !== 1 ? 's' : ''} encontrada{filteredTools.length !== 1 ? 's' : ''}
                  </h2>
                  {searchTerm && (
                    <p className="text-gray-600">
                      Resultados para "{searchTerm}"
                    </p>
                  )}
                </div>
                {selectedCategory !== 'all' && (
                  <Badge variant="outline" className="mt-2 sm:mt-0 border-dmac-red text-dmac-red">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </Badge>
                )}
              </div>

              {/* Grid de herramientas */}
              {filteredTools.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                  {filteredTools.map((tool, index) => (
                    <div 
                      key={tool.id} 
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <ToolCard
                        tool={tool}
                        onAdd={handleAddTool}
                        onRemove={handleRemoveTool}
                        isSelected={isToolSelected(tool)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold mb-2 text-black">No se encontraron herramientas</h3>
                  <p className="text-gray-600 mb-4">
                    Intenta ajustar tus filtros o términos de búsqueda
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    variant="outline"
                    className="border-dmac-red text-dmac-red hover:bg-dmac-red hover:text-white"
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}

              {/* Separador antes del calculador */}
              {selectedTools.length > 0 && (
                <>
                  <Separator className="my-12" />
                  <div className="animate-fade-in-up">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-black">
                      <Calendar className="h-6 sm:h-8 w-6 sm:w-8 text-dmac-red" aria-hidden="true" />
                      Calculadora de Cotización
                    </h2>
                    <QuoteCalculator selectedTools={selectedTools} />
                  </div>
                </>
              )}
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Catalog;
