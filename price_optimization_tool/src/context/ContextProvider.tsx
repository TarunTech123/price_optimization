import React, { createContext, ReactNode, useState } from 'react';

import { CategoryType, ContextType, ProductDetails } from '../utils/types/Types';
import { SearchProduct, SearchProductByCategory } from '../services/Product_Management_Service';

// Create context with a default null value
const ProviderContext = createContext<ContextType>({
    value: '',
    setValue: () => { },
    products: [],
    setProducts: () => { },
    productsCopy: [],
    setProductsCopy: () => { },
    selectedProducts: null,
    setSelectedProducts: () => { },
    isLoading: false,
    setIsLoading: () => { },
    isAddDialogVisible: true,
    setIsAddDialogVisible: () => { },
    isForecastDialogVisible: true,
    setIsForecastDialogVisible: () => { },
    viewProduct: {},
    setViewProduct: () => { },
    isViewDialogVisible: true,
    setIsViewDialogVisible: () => { },
    handleSearch: () => { },
    categories: null,
    setCategories: () => { },
    handleFilterProductsByCategory:()=>{}
});

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>("Initial Value");
    const [products, setProducts] = useState<ProductDetails[] | null | undefined>(null);
    const [productsCopy, setProductsCopy] = useState<ProductDetails[] | null | undefined>(null);
    const [selectedProducts, setSelectedProducts] = useState<ProductDetails[] | null | undefined>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isAddDialogVisible, setIsAddDialogVisible] = useState<boolean>(false);
    const [isForecastDialogVisible, setIsForecastDialogVisible] = useState<boolean>(false);
    const [viewProduct, setViewProduct] = useState<ProductDetails>({});
    const [isViewDialogVisible, setIsViewDialogVisible] = useState<boolean>(false);
    const [categories, setCategories] = useState<CategoryType[] | null | undefined>(null);

    const handleSearch = async (url: string, value: string) => {
        if (value?.length > 0) {
            await SearchProduct(url, value).then((res) => {
                console.log(res);
                setProducts(res);
            }).catch((err) => {
                console.log('Search err', err)
            })
        } else {
            setProducts(productsCopy);
        }
    }

    const handleFilterProductsByCategory = async (url: string, id: number) => {
        if (id) {
            await SearchProductByCategory(url, id).then((res) => {
                setProducts(res);
            }).catch((err) => {
                console.log('handleFilterProductsByCategory err', err)
            })
        } else {
            setProducts(productsCopy)
        }
    }

    return (
        <ProviderContext.Provider value={{
            value, setValue, products, setProducts,
            selectedProducts, setSelectedProducts, productsCopy, setProductsCopy,
            isLoading, setIsLoading,
            isAddDialogVisible, setIsAddDialogVisible,
            isForecastDialogVisible, setIsForecastDialogVisible,
            viewProduct, setViewProduct,
            isViewDialogVisible, setIsViewDialogVisible,
            handleSearch,
            categories, setCategories,handleFilterProductsByCategory
        }}
        >
            {children}
        </ProviderContext.Provider>
    );
};

export { ContextProvider, ProviderContext };