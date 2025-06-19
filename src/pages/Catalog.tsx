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
import { Search, Calendar } from "lucide-react";
import { tools, getCategories } from "@/data/tools";
import { useQuote } from "@/contexts/QuoteContext";
import ToolCard from "@/components/ToolCard";
import QuoteCalculator from "@/components/QuoteCalculator";

const Catalog: React.FC = () => {
  // --- Estados de búsqueda, categoría y orden ---
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  // --- Contexto de cotización ---
  const { selectedTools, addTool, removeTool, isToolSelected } = useQuote();
  const categories = getCategories();

  // --- FILTRADO + ORDENAMIENTO ---
  const filteredTools = tools
    .filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (tool) => selectedCategory === "all" || tool.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.pricePerDay - b.pricePerDay;
        case "price-high":
          return b.pricePerDay - a.pricePerDay;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <main id="main-content">
        {/* --------- HERO --------- */}
        <section
          className="bg-gray-900 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8"
          role="banner"
          aria-labelledby="catalog-hero-heading"
        >
          <div className="container mx-auto text-center animate-fade-in-up">
            <h1
              id="catalog-hero-heading"
              className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl"
            >
              Catálogo de <span className="text-yellow-400">Herramientas</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl">
              Encuentra las herramientas profesionales que necesitas para tu
              proyecto
            </p>
          </div>
        </section>

        {/* --------- CONTENIDO PRINCIPAL --------- */}
        <div className="container mx-auto space-y-8 px-4 py-8 sm:px-6 lg:px-8">
          {/* ----- Barra de búsqueda, filtro y orden ----- */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Buscador */}
            <div className="relative w-full sm:w-1/3">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar herramienta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-2 pl-10 pr-4"
                aria-label="Buscar herramientas"
              />
            </div>

            {/* Categorías */}
            <div className="w-full sm:w-1/3">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full rounded-lg border-gray-300">
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
                <SelectTrigger className="w-full rounded-lg border-gray-300">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                  <SelectItem value="price-low">
                    Precio: Menor → Mayor
                  </SelectItem>
                  <SelectItem value="price-high">
                    Precio: Mayor → Menor
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* ----- Grid de herramientas o mensaje de vacío ----- */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-6">
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
            <div className="py-12 text-center">
              <Search className="mx-auto mb-4 h-12 w-12 text-gray-400" />
              <h3 className="mb-2 text-lg font-semibold">
                No se encontraron herramientas
              </h3>
              <p className="mb-4 text-gray-600">
                Ajusta tu búsqueda o filtros.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSortBy("name");
                }}
                variant="outline"
                className="border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white"
              >
                Limpiar filtros
              </Button>
            </div>
          )}

          {/* ----- Separador + Sección Cotizador ----- */}
          <Separator className="my-12" />
          <div className="animate-fade-in-up">
            <h2 className="mb-8 flex items-center justify-center gap-2 text-center text-2xl font-bold sm:text-3xl">
              <Calendar className="h-6 w-6 text-red-600 sm:h-8 sm:w-8" />
              Calculadora de Cotización
            </h2>

            {selectedTools.length > 0 ? (
              /* --- Con herramientas seleccionadas --- */
              <QuoteCalculator />
            ) : (
              /* --- Sin herramientas seleccionadas --- */
              <div className="text-center text-gray-600">
                <p className="mb-4 text-lg font-semibold">
                  Aún no has añadido herramientas a tu cotización
                </p>
                <p>
                  Explora el catálogo y haz clic en&nbsp;
                  <span className="font-bold">“Añadir”</span> para ver aquí el
                  cálculo.
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
