import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Search, Calendar, PlusCircle } from "lucide-react";
import { tools, getCategories } from "@/data/tools";
import { useQuote } from "@/contexts/QuoteContext";
import ToolCard from "@/components/ToolCard";
import QuoteCalculator from "@/components/QuoteCalculator";

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const { selectedTools, addTool, removeTool, isToolSelected } = useQuote();
  const categories = getCategories();

  const filteredTools = tools
    .filter((tool) =>
      [tool.name, tool.description]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter(
      (tool) => selectedCategory === "all" || tool.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.pricePerDay - b.pricePerDay;
      if (sortBy === "price-high") return b.pricePerDay - a.pricePerDay;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <main id="main-content">
        {/* HERO */}
        <section
          className="bg-gray-900 px-2 py-4 text-white sm:px-4 sm:py-6 lg:px-6 lg:py-8"
          role="banner"
          aria-labelledby="catalog-hero-heading"
        >
          <div className="container mx-auto text-center animate-fade-in-up">
            <h1
              id="catalog-hero-heading"
              className="mb-2 text-2xl font-extrabold sm:text-3xl md:text-4xl"
            >
              Catálogo de <span className="text-yellow-400">Herramientas</span>
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-300 sm:text-lg">
              Encuentra las herramientas profesionales que necesitas
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <div className="container mx-auto space-y-4 p-1 sm:p-4 lg:p-6">
          {/* BARRA DE FILTROS */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Buscador */}
            <div className="relative w-full sm:w-1/3">
              <Search className="absolute left-2 top-2 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar herramienta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-1 pl-8 pr-3"
                aria-label="Buscar herramientas"
              />
            </div>

            {/* Categorías */}
            <div className="w-full sm:w-1/3">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full rounded-lg border-gray-300 py-1">
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Orden */}
            <div className="w-full sm:w-1/3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full rounded-lg border-gray-300 py-1">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                  <SelectItem value="price-low">Precio ↑</SelectItem>
                  <SelectItem value="price-high">Precio ↓</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* GRID */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 md:gap-3 xl:grid-cols-4 xl:gap-4">
              {filteredTools.map((tool, idx) => (
                <div
                  key={tool.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
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
            <div className="py-6 text-center">
              <Search className="mx-auto mb-2 h-8 w-8 text-gray-400" />
              <h3 className="mb-1 text-base font-semibold">
                No se encontraron herramientas
              </h3>
              <p className="text-gray-600">
                Ajusta búsqueda o filtros para continuar.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSortBy("name");
                }}
                variant="outline"
                className="mt-3 border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white py-1 px-3 text-sm"
              >
                Limpiar filtros
              </Button>
            </div>
          )}

         {/* COTIZADOR */}
        <Separator className="my-6" />
        <div className="animate-fade-in-up">
          <h2 className="mb-4 flex items-center justify-center gap-1 text-xl font-bold sm:text-2xl">
            <Calendar className="h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
            Calculadora de Cotización
          </h2>
          {selectedTools.length > 0 ? (
            <QuoteCalculator />
          ) : (
            <div className="bg-gray-900 text-white p-6 rounded-lg text-center space-y-2">
              <PlusCircle className="mx-auto mb-2 h-8 w-8 text-yellow-400" />
              <p className="mb-1 text-base font-semibold">
                Añade herramientas para ver cálculo
              </p>
              <p>
                Haz clic en{" "}
                <span className="text-yellow-400 font-bold">“Añadir”</span> en
                el catálogo.
              </p>
            </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Catalog;
