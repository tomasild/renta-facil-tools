import { DollarSign, Shield, Truck, Users } from "lucide-react";

const BentoGrid = ({ className = "" }: { className?: string }) => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-slate-950" />,
      title: "Ahorro inmediato",
      description: "Hasta 70 % menos que comprar equipos nuevos",
    },
    {
      icon: <Shield className="h-6 w-6 text-slate-950" />,
      title: "Sin mantenimiento",
      description: "Equipos siempre listos y en perfecto estado",
    },
    {
      icon: <Truck className="h-6 w-6 text-slate-950" />,
      title: "Entrega rápida",
      description: "Disponibilidad inmediata en toda la región",
    },
    {
      icon: <Users className="h-6 w-6 text-slate-950" />,
      title: "Soporte 24/7",
      description: "Asistencia técnica cuando la necesites",
    },
  ];

  return (
    <div
      className={
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 " + className
      }
    >
      {benefits.map(({ icon, title, description }) => (
        <article
          key={title}
          className="group rounded-2xl border border-slate-200 bg-card p-6 text-center shadow-sm transition-shadow hover:border-yellow-300 hover:shadow-xl"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dmac-yellow transition-colors duration-300 group-hover:bg-dmac-yellow-hover0">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-bold text-slate-400">{title}</h3>
          <p className="text-slate-200 leading-relaxed">{description}</p>
        </article>
      ))}
    </div>
  );
};

export default BentoGrid;
