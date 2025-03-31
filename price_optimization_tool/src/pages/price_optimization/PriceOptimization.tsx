import React, { useContext, useEffect } from 'react'

import './PriceOptimization.css';
import { Header, Navbar, Table } from '../../components';
import { ContextType, ProductDetails, tableConfigType } from '../../utils/types/Types';
import { ProviderContext } from '../../context/ContextProvider';
import { getProductsAPI } from '../../services/Price_Optimization_Service';

const PriceOptimization: React.FC = () => {
    const { setProducts, products,setProductsCopy } = useContext<ContextType>(ProviderContext);

    useEffect(() => {
        getProducts()
    }, []);//eslint-disable-line react-hooks/exhaustive-deps

    const getProducts = async () => {
        await getProductsAPI('/products').then((res) => {
            setProducts(res);
            setProductsCopy(res);
        }).catch((err) => {
            console.log('products get err', err)
        })
    }

    const tableConfig: tableConfigType = {
        data: products,
        columns: [{ name: 'name', header: 'name' }, { name: 'category_name', header: 'Product Category' }, { name: 'description', header: 'description' },
        { name: 'cost_price', header: 'Cost Price' },
        { name: 'selling_price', header: 'Selling Price' },
        { name: 'optimized_price', header: 'Optimized Price' }
        ],
        actions: [
            { title: 'View', icon: 'bi bi-eye-fill', onClick: (data: ProductDetails) => { alert(JSON.stringify(data)) } },
            { title: 'Edit', icon: 'bi bi-pencil-fill', onClick: () => { } },
            { title: 'Delete', icon: 'bi bi-trash-fill', onClick: () => { } }
        ],
    }
    return (
        <div className='product_management_container d-flex flex-column' style={{ height: '100vh' }}>
            <Header title='Price Optimization Tool' />
            <Navbar />
            <Table {...tableConfig} />
        </div>
    )
}

export default PriceOptimization;