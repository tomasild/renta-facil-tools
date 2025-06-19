
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addDays, format, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon, Send, Trash2, Tag, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useQuote } from '@/contexts/QuoteContext';
import { calculateDiscount, getDiscountText } from '@/data/tools';

const QuoteCalculator = () => {
  const { selectedTools, removeTool } = useQuote();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 4),
  });

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
    <div id="cotizador" className="py-16 lg:py-24 bg-transparent">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 ">
        <section aria-labelledby="quote-summary-title">
          <div className="bg-card rounded-3xl shadow-xl border border-slate-600 overflow-hidden">
            <div className="bg-dmac-yellow p-6 lg:p-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calculator className="w-8 h-8 text-gray-900" />
                  <h2 id="quote-summary-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Tu Cotización
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="p-6 lg:p-8">
              {selectedTools.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Sin herramientas seleccionadas</h3>
                  <p className="text-slate-600 mb-4">Aún no has seleccionado herramientas.</p>
                  <p className="text-slate-600">Tu cotización aparecerá aquí una vez que selecciones al menos una herramienta.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-8">
                    {/* Tools Summary */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-6 flex items-center gap-4">
                        <Tag className="w-6 h-6 text-yellow-500" />
                        Herramientas Seleccionadas
                      </h3>
                      <div className="space-y-3">
                        {selectedTools.map(tool => (
                          <div key={tool.id} className="flex justify-between items-center bg-background p-4 rounded-xl border border-slate-900 hover:border-slate-300 transition-colors duration-200">
                            <div>
                              <span className="font-semibold text-slate-900">{tool.name}</span>
                              <p className="text-sm text-slate-700">{tool.category}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-dmac-red text-lg">
                                ${tool.pricePerDay.toLocaleString('es-CL')} / día
                              </span>
                              <Button 
                                type="button"
                                variant="ghost" 
                                size="icon" 
                                className="text-dmac-red hover:bg-dmac-red-hover hover:text-background transition-all duration-200" 
                                onClick={() => removeTool(tool)}
                              >
                                <Trash2 className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <CalendarIcon className="w-6 h-6 text-black" />
                        Fechas de Arriendo
                      </h3>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal text-lg p-6 border-2 hover:border-yellow-400 rounded-xl transition-all duration-200",
                              !date && "text-black"
                            )}
                          >
                            <CalendarIcon className="mr-4 h-6 w-6 text-black" />
                            {date?.from ? (
                              date.to ? (
                                <>
                                  {format(date.from, "dd MMM yyyy", { locale: es })} -{" "}
                                  {format(date.to, "dd MMM yyyy", { locale: es })}
                                </>
                              ) : (
                                format(date.from, "dd MMM yyyy", { locale: es })
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
                  </div>

                  {/* Quote Details & Form */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 space-y-8">
                    {/* Contact Form */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Datos de Contacto</h3>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="name" className="text-base font-semibold text-gray-800">Nombre Completo</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="Tu nombre y apellido" 
                            required 
                            className="bg-background mt-2 text-lg p-4 border-2 focus:border-x-dmac-red-hover rounded-xl transition-all duration-200"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-base font-semibold text-gray-800">Correo Electrónico</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="tu.correo@ejemplo.com" 
                            required 
                            className="bg-background mt-2 text-lg p-4 border-2 focus:border-x-dmac-red-hover rounded-xl transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Price Summary */}
                    <div className="border-t-2 border-gray-800 pt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Resumen de Cotización</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between text-base">
                          <span className="text-gray-800">Subtotal diario:</span>
                          <span className="font-semibold text-gray-900">${subtotal.toLocaleString('es-CL')}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-gray-800">Días de arriendo:</span>
                          <span className="font-semibold text-gray-900">{rentalDays}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-gray-800">Subtotal total:</span>
                          <span className="font-semibold text-gray-900">${(subtotal * rentalDays).toLocaleString('es-CL')}</span>
                        </div>
                        
                        {discount > 0 && (
                          <div className="flex justify-between text-base text-background bg-dmac-red p-3 rounded-lg">
                            <span className="flex items-center gap-2 font-semibold">
                              <Tag className="h-4 w-4" />
                              Descuento ({(discount * 100)}%):
                            </span>
                            <span className="font-bold">-${discountAmount.toLocaleString('es-CL')}</span>
                          </div>
                        )}
                        
                        <div className="border-t border-gray-300 pt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-xl sm:text-2xl font-bold text-gray-900">Total Estimado:</span>
                            <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                              ${total.toLocaleString('es-CL')}
                            </span>
                          </div>
                        </div>
                        
                        {/* {discountText && (
                          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 text-center">
                            <p className="text-yellow-800 font-semibold">{discountText}</p>
                          </div>
                        )} */}
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full mt-8 text-lg py-6 bg-dmac-yellow hover:bg-dmac-yellow-hover text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        <Send className="mr-3 h-6 w-6"/>
                        Enviar Cotización
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuoteCalculator;
