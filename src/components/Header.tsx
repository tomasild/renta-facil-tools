
import { HardHat } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-brand-dark py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 text-white hover:text-brand-yellow transition-colors">
          <HardHat className="w-8 h-8 sm:w-10 sm:h-10 text-brand-yellow" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-heading uppercase tracking-wider">Arriendos F&C</h1>
            <p className="text-xs sm:text-sm text-gray-400">Soluciones para tu Obra</p>
          </div>
        </a>
        <a href="#cotizador" className="hidden sm:inline-block bg-brand-yellow text-brand-dark font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors text-lg">
          Cotizar Ahora
        </a>
      </div>
    </header>
  );
};

export default Header;
