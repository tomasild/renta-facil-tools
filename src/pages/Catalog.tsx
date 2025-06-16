
import { tools, Tool } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import QuoteCalculator from '@/components/QuoteCalculator'; // This is now the QuoteForm/Summary

const Catalog = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-center mb-10 sm:mb-14 text-foreground">
        Nuestro Catálogo de Herramientas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Divider or more spacing could be added here if needed */}
      <div className="my-12 sm:my-16 md:my-20 border-t border-border pt-8 sm:pt-12">
         {/* The QuoteCalculator component now acts as the summary and form section */}
        <QuoteCalculator />
      </div>
    </div>
  );
};

export default Catalog;
