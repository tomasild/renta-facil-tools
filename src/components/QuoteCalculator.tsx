
import { useState, useEffect } from 'react'; // Added useEffect for potential calculations based on context
import { Tool } from '@/data/tools'; // Tool is enough, tools list will be on Catalog page
import { useQuote } from '@/contexts/QuoteContext'; // Import useQuote
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
import { formatCurrencyCLP } from '@/lib/utils'; // For displaying price in summary

const QuoteCalculator = () => { // This component will now be more of a "QuoteFormAndSummary"
  const {
    quoteItems,
    removeFromQuote,
    updateQuantity, // Added for potential quantity adjustments in summary
    getQuoteTotal,
    clearQuote
  } = useQuote();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 4), // Default to 5 days rental
  });

  const rentalDays = date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : 0;

  // Calculate total based on context items and selected rental days
  const currentQuoteTotal = quoteItems.reduce((total, item) => total + (item.pricePerDayCLP * item.quantity), 0);
  const finalTotal = currentQuoteTotal * rentalDays;

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

    // Reset form fields, selected tools (now context based), and date
    e.currentTarget.reset();
    clearQuote(); // Clear items from context
    setDate({ from: new Dtate(), to: addDays(new Date(), 4) });
  };

  if (quoteItems.length === 0) {
    return (
      <div className="py-12 sm:py-16 md:py-20 text-center">
        <p className="text-muted-foreground text-lg">Tu cotización está vacía.</p>
        <p className="text-muted-foreground">Agrega herramientas del catálogo para continuar.</p>
        {/* Optionally, a button to go back to the main catalog tool list if this component is separate */}
      </div>
    );
  }

  return (
    // This component no longer lists all tools, only the quote form and summary.
    // It will be rendered by Catalog.tsx page.
    // The outer div and title like "Catálogo y Cotizador" will be part of Catalog.tsx itself.
    <section aria-labelledby="quote-summary-title" className="mt-12 sm:mt-16 sticky top-10"> {/* Reduced top margin */}
        <div className="bg-card rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl border border-border">
            <h2 id="quote-summary-title" className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-card-foreground">2. Revisa y Envía tu Cotización</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                <div>
                    <h3 className="text-xl font-semibold mb-3 sm:mb-4 text-card-foreground">Resumen de Herramientas</h3>
                    <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 max-h-60 overflow-y-auto"> {/* Added max-height and scroll */}
                        {quoteItems.map(item => ( // Using quoteItems from context
                            <li key={item.id} className="flex justify-between items-center bg-background p-3 rounded-md border border-border">
                                <div>
                                  <span className="text-foreground font-medium">{item.name}</span>
                                  <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                                  {/* TODO: Add quantity controls using updateQuantity */}
                                </div>
                                <div className="flex items-center gap-2"> {/* Reduced gap */}
                                  <span className="font-semibold text-foreground text-sm">
                                    {formatCurrencyCLP(item.pricePerDayCLP * item.quantity)} / día
                                  </span>
                                  <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 h-8 w-8" onClick={() => removeFromQuote(item.id)} aria-label={`Quitar ${item.name} de la cotización`}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-semibold mb-4 mt-6 text-card-foreground">Fechas de Arriendo</h3>
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
                                    <span className="font-bold text-foreground">{formatCurrencyCLP(currentQuoteTotal)}</span>
                                </div>
                                 <div className="flex justify-between text-base sm:text-lg">
                                    <span className="text-muted-foreground">Días de arriendo:</span>
                                    <span className="font-bold text-foreground">{rentalDays > 0 ? rentalDays : "-"}</span>
                                </div>
                                <div className="flex justify-between items-baseline text-xl sm:text-2xl md:text-3xl">
                                    <span className="font-bold text-foreground">Total Estimado:</span>
                                    <span className="font-bold text-highlight-red">{formatCurrencyCLP(finalTotal)}</span>
                                </div>
                            </div>
                            
                            <Button type="submit" size="lg" className="w-full mt-6 sm:mt-8 text-base sm:text-lg py-5 sm:py-6 md:py-7 bg-primary text-primary-foreground hover:bg-primary/90" disabled={rentalDays <= 0 || quoteItems.length === 0}>
                                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5"/>
                                Enviar Cotización
                            </Button>
                        </div>
                    </form>
                {/* )} */} {/* This closing parenthesis was for the old selectedTools.length check, now handled by quoteItems at the top */}
            </div>
        </section>
  );
};

export default QuoteCalculator;
  );
};

export default QuoteCalculator;
