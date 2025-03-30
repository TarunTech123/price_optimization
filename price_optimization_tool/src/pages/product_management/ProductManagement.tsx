import React, { useEffect, useState } from 'react'

import './ProductManagement.css';
import { Header, Navbar, Table } from '../../components';
import { ProductService } from '../../components/table/ProductService';
import { Product, tableConfigType } from '../../utils/types/Types';

const ProductManagement: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const tableConfig: tableConfigType = {
        data: products,
        columns: [{ name: 'id', header: 'id' }, { name: 'code', header: 'code' }, { name: 'name', header: 'name' },
        { name: 'description', header: 'description' }, { name: 'image', header: 'image' }, { name: 'price', header: 'price' },
        { name: 'category', header: 'category' }, { name: 'quantity', header: 'quantity' }, { name: 'actions', header: 'Action' }
        ],
        actions: [
            { title: 'View', icon: 'bi bi-eye-fill', onClick: () => { } },
            { title: 'Edit', icon: 'bi bi-pencil-fill', onClick: () => { } },
            { title: 'Delete', icon: 'bi bi-trash-fill', onClick: () => { } }
        ]
    }

    return (
        <div className='product_management_container d-flex flex-column' style={{ height: '100vh' }}>
            <Header title='Price Optimization Tool' />
            <Navbar />
            <Table {...tableConfig} />
        </div>
    )
}

export default ProductManagement;