
import { useState } from 'react';
import { tools, Tool } from '@/data/tools';
import ToolCard from './ToolCard';
import { DateRange } from 'react-day-picker';
import { addDays, format, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon, Send, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const QuoteCalculator = () => {
  const [selectedTools, setSelectedTools] = useState<Tool[]>([]);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 4),
  });

  const handleAddTool = (tool: Tool) => {
    // Prevent adding duplicates, could also increment quantity in a more complex state
    if (!selectedTools.find(t => t.id === tool.id)) {
      setSelectedTools((prev) => [...prev, tool]);
    }
  };

  const handleRemoveTool = (tool: Tool) => {
    setSelectedTools((prev) => prev.filter((t) => t.id !== tool.id));
  };

  const rentalDays = date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : 0;
  const subtotal = selectedTools.reduce((acc, tool) => acc + tool.pricePerDay, 0);
  const total = subtotal * rentalDays;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    
    console.log({
      name,
      email,
      tools: selectedTools.map(t => t.name),
      startDate: date?.from,
      endDate: date?.to,
      total,
    });

    toast({
      title: "Cotización Enviada",
      description: "Gracias por cotizar con nosotros. Nos pondremos en contacto contigo a la brevedad.",
      variant: "default" // Ensure toast uses new theme
    });

    // Reset form fields, selected tools, and date
    e.currentTarget.reset();
    setSelectedTools([]);
    setDate({ from: new Date(), to: addDays(new Date(), 4) });
  };

  return (
    // Removed animate-fade-in-up, main background will be page default (e.g. bg-blanco or bg-gris-claro)
    <div id="cotizador" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-center mb-8 sm:mb-10 md:mb-12 text-gray-800">
          Catálogo y Cotizador de Herramientas
        </h1>
        <section aria-labelledby="tool-selection-title">
            <h2 id="tool-selection-title" className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-700">1. Elige tus Herramientas</h2>
            <p className="text-center text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Selecciona los equipos que necesitas. Puedes agregar o quitar herramientas en cualquier momento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {tools.map((tool) => ( // Removed animation delay from map
                <div key={tool.id}>
                  <ToolCard
                    tool={tool}
                    // onAdd and onRemove are not props of ToolCard. Assuming ToolCard has its own Add button.
                    // This part needs clarification on how ToolCard interacts with selection.
                    // For now, I'll assume ToolCard's button might add to a global state or this component needs a button per card.
                    // Let's add a simple "Agregar" button here for now if not part of ToolCard.
                  />
                   <Button
                      onClick={() => handleAddTool(tool)}
                      className="w-full mt-2 bg-rojo-dmac hover:bg-rojo-dmac-darker text-blanco"
                      disabled={selectedTools.some(t => t.id === tool.id)}
                    >
                      {selectedTools.some(t => t.id === tool.id) ? "Agregada" : "Agregar a Cotización"}
                    </Button>
                </div>
              ))}
            </div>
        </section>

        <section aria-labelledby="quote-summary-title" className="mt-16 sm:mt-24 sticky top-10">
            {/* Using bg-card (which is blanco) and text-card-foreground (dark gray) from new theme */}
            <div className="bg-card rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl border border-border">
                <h2 id="quote-summary-title" className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-card-foreground">2. Revisa y Envía tu Cotización</h2>
                
                {selectedTools.length === 0 ? (
                    <p className="text-center text-muted-foreground py-10 sm:py-12">Aún no has seleccionado herramientas. Tu cotización aparecerá aquí.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-3 sm:mb-4 text-card-foreground">Resumen de Herramientas</h3>
                            <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                                {selectedTools.map(tool => (
                                    <li key={tool.id} className="flex justify-between items-center bg-background p-3 rounded-md border border-border">
                                        <span className="text-foreground">{tool.name}</span>
                                        <div className="flex items-center gap-4">
                                          <span className="font-semibold text-foreground">${tool.pricePerDay.toLocaleString('es-CL')} / día</span>
                                          <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleRemoveTool(tool)} aria-label={`Quitar ${tool.name} de la cotización`}>
                                            <Trash2 className="h-5 w-5" />
                                          </Button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                             <h3 className="text-xl font-bold mb-4 mt-8 text-card-foreground">Fechas de Arriendo</h3>
                            <Popover>
                                <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant={"outline"}
                                    className={cn(
                                    "w-full justify-start text-left font-normal text-lg p-6 text-foreground border-input bg-background hover:bg-accent/10 hover:text-accent-foreground",
                                    !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-4 h-6 w-6 text-rojo-dmac" /> {/* Icon color */}
                                    {date?.from ? (
                                    date.to ? (
                                        <>
                                        {format(date.from, "LLL dd, y", { locale: es })} -{" "}
                                        {format(date.to, "LLL dd, y", { locale: es })}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y", { locale: es })
                                    )
                                    ) : (
                                    <span>Elige un rango de fechas</span>
                                    )}
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={1}
                                    locale={es}
                                    disabled={{ before: new Date() }}
                                    className="bg-card text-card-foreground" // Calendar theming
                                    classNames={{
                                        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                        day_today: "text-accent-foreground bg-accent/20",
                                    }}
                                />
                                </PopoverContent>
                            </Popover>
                        </div>
                        {/* Using bg-background for the form section for slight differentiation, or could be bg-card too */}
                        <div className="bg-background p-8 rounded-lg border border-border">
                            <h3 className="text-xl font-bold mb-6 text-foreground">Completa tus datos</h3>
                            <div className="space-y-5 sm:space-y-6 mb-5 sm:mb-6">
                                <div>
                                    <Label htmlFor="name" className="text-base sm:text-lg text-foreground">Nombre Completo</Label>
                                    <Input id="name" name="name" type="text" placeholder="Tu nombre y apellido" required className="text-base sm:text-lg p-3 sm:p-4 md:p-6 bg-input text-foreground border-border focus:ring-ring"/>
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-base sm:text-lg text-foreground">Correo Electrónico</Label>
                                    <Input id="email" name="email" type="email" placeholder="tu.correo@ejemplo.com" required className="text-base sm:text-lg p-3 sm:p-4 md:p-6 bg-input text-foreground border-border focus:ring-ring"/>
                                </div>
                            </div>

                            <div className="border-t border-border pt-5 sm:pt-6 space-y-3 sm:space-y-4">
                                <div className="flex justify-between text-base sm:text-lg">
                                    <span className="text-muted-foreground">Subtotal diario:</span>
                                    <span className="font-bold text-foreground">${subtotal.toLocaleString('es-CL')}</span>
                                </div>
                                 <div className="flex justify-between text-base sm:text-lg">
                                    <span className="text-muted-foreground">Días de arriendo:</span>
                                    <span className="font-bold text-foreground">{rentalDays}</span>
                                </div>
                                <div className="flex justify-between items-baseline text-xl sm:text-2xl md:text-3xl">
                                    <span className="font-bold text-foreground">Total Estimado:</span>
                                    {/* Using text-rojo-dmac for total, consistent with primary color */}
                                    <span className="font-bold text-rojo-dmac">${total.toLocaleString('es-CL')}</span>
                                </div>
                            </div>
                            
                            {/* Primary button style from new theme */}
                            <Button type="submit" size="lg" className="w-full mt-6 sm:mt-8 text-base sm:text-lg py-5 sm:py-6 md:py-7 bg-primary text-primary-foreground hover:bg-primary/90">
                                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5"/>
                                Enviar Cotización
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </section>
      </div>
    </div>
  );
};

export default QuoteCalculator;
