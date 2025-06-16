
import { useState } from 'react';
import { tools, Tool, calculateDiscount, getDiscountText } from '@/data/tools';
import ToolCard from './ToolCard';
import { DateRange } from 'react-day-picker';
import { addDays, format, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon, Send, Trash2, Tag } from 'lucide-react';
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
  const discount = calculateDiscount(rentalDays);
  const discountAmount = subtotal * rentalDays * discount;
  const total = (subtotal * rentalDays) - discountAmount;
  const discountText = getDiscountText(rentalDays);

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
      subtotal,
      discount: discountAmount,
      total,
    });

    toast({
      title: "Cotización Enviada",
      description: "Gracias por cotizar con nosotros. Nos pondremos en contacto contigo a la brevedad.",
    });

    e.currentTarget.reset();
  };

  return (
    <div id="cotizador" className="py-16 sm:py-24 animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="tool-selection-title">
            <h2 id="tool-selection-title" className="text-3xl sm:text-4xl font-bold text-center mb-4">1. Elige tus Herramientas</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Selecciona los equipos que necesitas. Puedes agregar o quitar herramientas en cualquier momento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={tool.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <ToolCard
                    tool={tool}
                    onAdd={handleAddTool}
                    onRemove={handleRemoveTool}
                    isSelected={selectedTools.some((t) => t.id === tool.id)}
                  />
                </div>
              ))}
            </div>
        </section>

        <section aria-labelledby="quote-summary-title" className="mt-24">
            <div className="bg-card border border-border rounded-xl p-8 shadow-2xl animate-fade-in-up">
                <h2 id="quote-summary-title" className="text-3xl sm:text-4xl font-bold text-center mb-8">2. Revisa y Envía tu Cotización</h2>
                
                {selectedTools.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-4">Aún no has seleccionado herramientas.</p>
                      <p className="text-muted-foreground">Tu cotización aparecerá aquí una vez que selecciones al menos una herramienta.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Resumen de Herramientas</h3>
                            <ul className="space-y-3 mb-6">
                                {selectedTools.map(tool => (
                                    <li key={tool.id} className="flex justify-between items-center bg-muted p-3 rounded-md animate-fade-in">
                                        <span className="font-medium">{tool.name}</span>
                                        <div className="flex items-center gap-4">
                                          <span className="font-semibold text-dmac-yellow">${tool.pricePerDay.toLocaleString('es-CL')} / día</span>
                                          <Button 
                                            type="button"
                                            variant="ghost" 
                                            size="icon" 
                                            className="text-destructive hover:bg-destructive/10 hover:scale-110 transition-all duration-200" 
                                            onClick={() => handleRemoveTool(tool)}
                                          >
                                            <Trash2 className="h-4 w-4" />
                                          </Button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                             <h3 className="text-xl font-bold mb-4 mt-8">Fechas de Arriendo</h3>
                            <Popover>
                                <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant={"outline"}
                                    className={cn(
                                    "w-full justify-start text-left font-normal text-lg p-6 hover:scale-[1.02] transition-transform duration-200",
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
                        <div className="bg-muted p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-6">Completa tus datos</h3>
                            <div className="space-y-6 mb-6">
                                <div>
                                    <Label htmlFor="name" className="text-lg">Nombre Completo</Label>
                                    <Input 
                                      id="name" 
                                      name="name" 
                                      type="text" 
                                      placeholder="Tu nombre y apellido" 
                                      required 
                                      className="text-lg p-6 transition-all duration-200 focus:scale-[1.02]"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-lg">Correo Electrónico</Label>
                                    <Input 
                                      id="email" 
                                      name="email" 
                                      type="email" 
                                      placeholder="tu.correo@ejemplo.com" 
                                      required 
                                      className="text-lg p-6 transition-all duration-200 focus:scale-[1.02]"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-border pt-6 space-y-4">
                                <div className="flex justify-between text-lg">
                                    <span className="text-muted-foreground">Subtotal diario:</span>
                                    <span className="font-bold">${subtotal.toLocaleString('es-CL')}</span>
                                </div>
                                 <div className="flex justify-between text-lg">
                                    <span className="text-muted-foreground">Días de arriendo:</span>
                                    <span className="font-bold">{rentalDays}</span>
                                </div>
                                {discount > 0 && (
                                  <>
                                    <div className="flex justify-between text-lg">
                                        <span className="text-muted-foreground">Subtotal sin descuento:</span>
                                        <span>${(subtotal * rentalDays).toLocaleString('es-CL')}</span>
                                    </div>
                                    <div className="flex justify-between text-lg text-green-600 dark:text-green-400">
                                        <span className="flex items-center gap-2">
                                          <Tag className="h-4 w-4" />
                                          Descuento ({(discount * 100)}%):
                                        </span>
                                        <span className="font-bold">-${discountAmount.toLocaleString('es-CL')}</span>
                                    </div>
                                  </>
                                )}
                                <div className="flex justify-between items-baseline text-2xl sm:text-3xl border-t border-border pt-4">
                                    <span className="font-bold">Total Estimado:</span>
                                    <span className="font-bold text-dmac-yellow">${total.toLocaleString('es-CL')}</span>
                                </div>
                                {discountText && (
                                  <div className="text-center bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 animate-fade-in">
                                    <p className="text-green-700 dark:text-green-400 text-sm font-semibold">{discountText}</p>
                                  </div>
                                )}
                            </div>
                            
                            <Button 
                              type="submit" 
                              size="lg" 
                              className="w-full mt-8 text-lg py-7 bg-dmac-yellow hover:bg-dmac-yellow-hover text-black hover:scale-[1.02] transition-all duration-300"
                            >
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
