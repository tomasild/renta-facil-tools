
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Tool } from '@/data/tools';

interface QuoteContextType {
  selectedTools: Tool[];
  addTool: (tool: Tool) => void;
  removeTool: (tool: Tool) => void;
  clearTools: () => void;
  isToolSelected: (tool: Tool) => boolean;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

interface QuoteProviderProps {
  children: ReactNode;
}

export const QuoteProvider = ({ children }: QuoteProviderProps) => {
  const [selectedTools, setSelectedTools] = useState<Tool[]>([]);

  const addTool = (tool: Tool) => {
    setSelectedTools(prev => {
      if (prev.some(t => t.id === tool.id)) {
        return prev; // Tool already exists
      }
      return [...prev, tool];
    });
  };

  const removeTool = (tool: Tool) => {
    setSelectedTools(prev => prev.filter(t => t.id !== tool.id));
  };

  const clearTools = () => {
    setSelectedTools([]);
  };

  const isToolSelected = (tool: Tool) => {
    return selectedTools.some(t => t.id === tool.id);
  };

  return (
    <QuoteContext.Provider value={{
      selectedTools,
      addTool,
      removeTool,
      clearTools,
      isToolSelected
    }}>
      {children}
    </QuoteContext.Provider>
  );
};
