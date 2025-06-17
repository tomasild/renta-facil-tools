
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StepsProps {
  children: ReactNode;
  className?: string;
}

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const Steps = ({ children, className }: StepsProps) => {
  return (
    <div className={cn("grid gap-8 md:grid-cols-3 relative", className)}>
      {/* Connector line for desktop */}
      <div className="step-connector" aria-hidden="true" />
      {children}
    </div>
  );
};

export const Step = ({ number, title, description, icon, className }: StepProps) => {
  return (
    <div className={cn("text-center relative z-10", className)}>
      <div className="step-number mx-auto mb-6" aria-label={`Paso ${number}`}>
        {icon || number}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
