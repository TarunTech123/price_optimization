import React, { createContext, ReactNode, useState } from 'react';

import { Product } from '../utils/types/Types';

// Define the shape of the context
interface ContextType {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    products: Product[] | null;
    setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
    selectedProducts: Product[] | null;
    setSelectedProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
}

// Create context with a default null value
const ProviderContext = createContext<ContextType | null>(null);

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>("Initial Value");
    const [products, setProducts] = useState<Product[] | null>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);

    return (
        <ProviderContext.Provider value={{ value, setValue, products, setProducts, selectedProducts, setSelectedProducts }}>
            {children}
        </ProviderContext.Provider>
    );
};

export { ContextProvider };