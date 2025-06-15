
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
    setSelectedTools((prev) => [...prev, tool]);
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
    });

    e.currentTarget.reset();
  };

  return (
    <div id="cotizador" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <section aria-labelledby="tool-selection-title">
            <h2 id="tool-selection-title" className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">1. Elige tus Herramientas</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Selecciona los equipos que necesitas. Puedes agregar o quitar herramientas en cualquier momento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onAdd={handleAddTool}
                  onRemove={handleRemoveTool}
                  isSelected={selectedTools.some((t) => t.id === tool.id)}
                />
              ))}
            </div>
        </section>

        <section aria-labelledby="quote-summary-title" className="mt-24 sticky top-10">
            <div className="bg-secondary rounded-xl p-8 shadow-2xl border border-gray-800">
                <h2 id="quote-summary-title" className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">2. Revisa y Envía tu Cotización</h2>
                
                {selectedTools.length === 0 ? (
                    <p className="text-center text-muted-foreground py-12">Aún no has seleccionado herramientas. Tu cotización aparecerá aquí.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Resumen de Herramientas</h3>
                            <ul className="space-y-3 mb-6">
                                {selectedTools.map(tool => (
                                    <li key={tool.id} className="flex justify-between items-center bg-brand-dark p-3 rounded-md">
                                        <span className="text-white">{tool.name}</span>
                                        <div className="flex items-center gap-4">
                                          <span className="font-semibold text-white">${tool.pricePerDay.toLocaleString('es-CL')} / día</span>
                                          <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-900/50" onClick={() => handleRemoveTool(tool)}>
                                            <Trash2 className="h-5 w-5" />
                                          </Button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                             <h3 className="text-xl font-bold mb-4 mt-8 text-white">Fechas de Arriendo</h3>
                            <Popover>
                                <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant={"outline"}
                                    className={cn(
                                    "w-full justify-start text-left font-normal text-lg p-6",
                                    !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-4 h-6 w-6" />
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
                                <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                    locale={es}
                                    disabled={{ before: new Date() }}
                                />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="bg-brand-dark p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-6 text-white">Completa tus datos</h3>
                            <div className="space-y-6 mb-6">
                                <div>
                                    <Label htmlFor="name" className="text-lg">Nombre Completo</Label>
                                    <Input id="name" name="name" type="text" placeholder="Tu nombre y apellido" required className="text-lg p-6"/>
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-lg">Correo Electrónico</Label>
                                    <Input id="email" name="email" type="email" placeholder="tu.correo@ejemplo.com" required className="text-lg p-6"/>
                                </div>
                            </div>

                            <div className="border-t border-gray-700 pt-6 space-y-4">
                                <div className="flex justify-between text-lg">
                                    <span className="text-muted-foreground">Subtotal diario:</span>
                                    <span className="font-bold text-white">${subtotal.toLocaleString('es-CL')}</span>
                                </div>
                                 <div className="flex justify-between text-lg">
                                    <span className="text-muted-foreground">Días de arriendo:</span>
                                    <span className="font-bold text-white">{rentalDays}</span>
                                </div>
                                <div className="flex justify-between items-baseline text-2xl sm:text-3xl">
                                    <span className="font-bold text-white">Total Estimado:</span>
                                    <span className="font-bold text-brand-yellow">${total.toLocaleString('es-CL')}</span>
                                </div>
                            </div>
                            
                            <Button type="submit" size="lg" className="w-full mt-8 text-lg py-7">
                                <Send className="mr-2 h-5 w-5"/>
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
