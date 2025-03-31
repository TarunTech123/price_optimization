export type CardProps = {
    imageSrc: string;
    title: string;
    description: string;
    onClick: () => void;
}

export type HeaderProps = {
    title: string
}

export type ButtonProps = {
    label: string;
    type?: "button" | "reset" | "submit" | undefined;
    icon?: string;
    onClick?: () => void;
    isPrimary?: boolean;
    isDisabled?: boolean
}

export type InputProps = {
    icon?: string;
    value: string | number | undefined;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDisabled?: boolean;
    placeholder: string;
    isPrimary?: boolean
}

export type Product = {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}
export type Columns = {
    name: string;
    header: string
}
export type actions = {
    title: string;
    icon: string;
    onClick: (rowData: ProductDetails) => void
}
export type tableConfigType = {
    data: ProductDetails[] | undefined | null;
    columns: Columns[];
    actions?: actions[];
    isSelectable?: boolean
}

export type LoaderProps = {
    isVisible: boolean | undefined
}

export type LoginAPI = {
    email: string;
    password: string
}

export type LoginSignupResponse = {
    message: string;
    token: string
}

export type SignupRequest = {
    email: string;
    password: string;
    role_id?: number
}

export type CategoryType = {
    id: number;
    name: string
}

export type ContextType = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    products: ProductDetails[] | null | undefined;
    setProducts: React.Dispatch<React.SetStateAction<ProductDetails[] | null | undefined>>;
    productsCopy: ProductDetails[] | null | undefined;
    setProductsCopy: React.Dispatch<React.SetStateAction<ProductDetails[] | null | undefined>>;
    selectedProducts: ProductDetails[] | null | undefined;
    setSelectedProducts: React.Dispatch<React.SetStateAction<ProductDetails[] | null | undefined>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isAddDialogVisible: boolean;
    setIsAddDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isForecastDialogVisible: boolean;
    setIsForecastDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
    viewProduct: ProductDetails;
    setViewProduct: React.Dispatch<React.SetStateAction<ProductDetails>>;
    isViewDialogVisible: boolean;
    setIsViewDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleSearch: (url: string, value: string) => void;
    categories: CategoryType[] | null | undefined;
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[] | null | undefined>>;
    handleFilterProductsByCategory: (url: string, value: number) => void;
}

export type ProductDetails = {
    id?: number;
    name?: string;
    category_name?: string;
    cost_price?: number;
    selling_price?: number;
    description?: string;
    stock_available?: number;
    units_sold?: number;
    customer_rating?: number;
    demand_forecast?: number;
    optimized_price?: number
}