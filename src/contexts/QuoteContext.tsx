"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Tool } from '@/data/tools'; // Assuming Tool interface is in data/tools.ts

// Interface for a tool item within the quote
export interface ToolInQuote extends Tool {
  quantity: number;
}

// Interface for the context state and methods
interface QuoteContextType {
  quoteItems: ToolInQuote[];
  addToQuote: (tool: Tool) => void;
  removeFromQuote: (toolId: number) => void;
  updateQuantity: (toolId: number, quantity: number) => void;
  isToolInQuote: (toolId: number) => boolean;
  clearQuote: () => void;
  getQuoteTotal: () => number;
}

// Create the context with a default undefined value
const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

// Props for the QuoteProvider
interface QuoteProviderProps {
  children: ReactNode;
}

// Implementation of the QuoteProvider
export const QuoteProvider: React.FC<QuoteProviderProps> = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState<ToolInQuote[]>([]);

  const addToQuote = useCallback((tool: Tool) => {
    setQuoteItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === tool.id);
      if (existingItem) {
        // If item exists, update its quantity (e.g., increment or set to a specific value if needed)
        // For now, let's assume adding means quantity 1 if not present, or keep existing if already there.
        // Or, if we want to increment:
        // return prevItems.map(item =>
        //   item.id === tool.id ? { ...item, quantity: item.quantity + 1 } : item
        // );
        // For this iteration, let's just add if not present, quantity 1.
        return prevItems; // No change if already there, use updateQuantity for changes
      }
      return [...prevItems, { ...tool, quantity: 1 }];
    });
  }, []);

  const removeFromQuote = useCallback((toolId: number) => {
    setQuoteItems((prevItems) => prevItems.filter(item => item.id !== toolId));
  }, []);

  const updateQuantity = useCallback((toolId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuote(toolId);
    } else {
      setQuoteItems((prevItems) =>
        prevItems.map(item =>
          item.id === toolId ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromQuote]);

  const isToolInQuote = useCallback((toolId: number): boolean => {
    return quoteItems.some(item => item.id === toolId);
  }, [quoteItems]);

  const clearQuote = useCallback(() => {
    setQuoteItems([]);
  }, []);

  const getQuoteTotal = useCallback((): number => {
    return quoteItems.reduce((total, item) => total + (item.pricePerDayCLP * item.quantity), 0);
  }, [quoteItems]);

  return (
    <QuoteContext.Provider value={{
        quoteItems,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        isToolInQuote,
        clearQuote,
        getQuoteTotal
      }}>
      {children}
    </QuoteContext.Provider>
  );
};

// Custom hook for easy context consumption
export const useQuote = (): QuoteContextType => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
