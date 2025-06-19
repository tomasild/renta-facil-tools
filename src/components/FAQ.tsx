
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cuáles son los tiempos mínimos y máximos de arriendo?",
    answer: "Mínimo 1 día, máximo según disponibilidad. Ofrecemos descuentos por arriendos prolongados."
  },
  {
    question: "¿Incluyen entrega y retiro en la Región de Valparaíso?",
    answer: "Sí, coordinamos entrega y retiro sin costo adicional en toda la región."
  },
  {
    question: "¿Qué pasa si una herramienta se daña durante el arriendo?",
    answer: "Contamos con seguro incluido. Solo pagas deducible en casos de mal uso."
  },
  {
    question: "¿Puedo modificar mi cotización después de enviarla?",
    answer: "Sí, contáctanos y ajustaremos tu cotización según tus nuevas necesidades."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-background animate-fade-in-up">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 rounded-lg"
                >
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{item.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-dmac-red flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-dmac-red flex-shrink-0 ml-4" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
