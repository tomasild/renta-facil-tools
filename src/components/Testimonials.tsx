
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Juan Pérez",
    title: "Jefe de Obra",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    comment: "La plataforma nos ahorró incontables horas de llamadas y correos. Encontramos todo lo que necesitábamos y al mejor precio. ¡Totalmente recomendado!",
  },
  {
    name: "Constructora Solida",
    title: "Gerente de Compras",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    comment: "Una herramienta indispensable para cualquier proyecto de construcción. La variedad de proveedores y la transparencia en los precios es fantástica.",
  },
  {
    name: "Carlos Gutiérrez",
    title: "Contratista Independiente",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    comment: "Pude acceder a herramientas que antes eran difíciles de encontrar para proyectos pequeños. El soporte es rápido y muy profesional.",
  },
    {
    name: "Inmobiliaria Futuro",
    title: "Director de Proyectos",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
    comment: "La eficiencia que ganamos con Arriendos F&C es notable. La gestión de arriendos es simple y el ahorro es real. Lo usamos para todos nuestros proyectos.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-secondary border-gray-700/50 h-full flex flex-col">
                    <CardContent className="flex flex-col items-center text-center justify-center p-6 flex-grow">
                      <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.comment}"</p>
                      <Avatar className="w-16 h-16 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-brand-yellow">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-secondary hover:bg-gray-700 border-gray-600" />
          <CarouselNext className="text-white bg-secondary hover:bg-gray-700 border-gray-600" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
