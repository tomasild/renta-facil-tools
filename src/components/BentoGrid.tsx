
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  large?: boolean;
  tall?: boolean;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn("bento-grid", className)}>
      {children}
    </div>
  );
};

export const BentoItem = ({ children, className, large = false, tall = false }: BentoItemProps) => {
  return (
    <div 
      className={cn(
        "bento-item",
        large && "bento-item-large",
        tall && "bento-item-tall",
        className
      )}
    >
      {children}
    </div>
  );
};
