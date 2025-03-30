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
    value: string | number;
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
    onClick: (rowData: Product) => void
}
export type tableConfigType = {
    data: Product[];
    columns: Columns[];
    actions?: actions[]
}

export type LoaderProps = {
    isVisible: boolean
}

export type LoginAPI = {
    email: string;
    password: string
}