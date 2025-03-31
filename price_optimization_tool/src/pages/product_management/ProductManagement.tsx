import React, { useContext, useEffect } from 'react'

import './ProductManagement.css';
import { Header, Navbar, Table, ViewData } from '../../components';
import { ContextType, ProductDetails, tableConfigType } from '../../utils/types/Types';
import { getProductsAPI } from '../../services/Price_Optimization_Service';
import { ProviderContext } from '../../context/ContextProvider';
import { DeleteProduct } from '../../services/Product_Management_Service';
import { Alert } from '../../utils/alert';

const ProductManagement: React.FC = () => {

    const { setProducts, products, setViewProduct, setIsViewDialogVisible, setIsAddDialogVisible, setProductsCopy } = useContext<ContextType>(ProviderContext);

    useEffect(() => {
        getProducts();
    }, []);//eslint-disable-line react-hooks/exhaustive-deps

    const getProducts = async () => {
        await getProductsAPI('/products').then((res) => {
            setProducts(res);
            setProductsCopy(res);
        }).catch((err) => {
            console.log('products get err', err)
        })
    }

    const handleDelete = async (data: ProductDetails) => {
        await DeleteProduct('/products', data?.id).then((res) => {
            console.log('delete Response', res);
            Alert('Sucess', 'Deleted Sucessfully', 'success')
        }).catch((err) => {
            console.log('Failed to delete product', err)
        })
    }

    const tableConfig: tableConfigType = {
        data: products,
        columns: [{ name: 'name', header: 'name' }, { name: 'category_name', header: 'Product Category' }, { name: 'cost_price', header: 'Cost Price' },
        { name: 'selling_price', header: 'Selling Price' }, { name: 'description', header: 'description' },
        { name: 'stock_available', header: 'Available Stock' }, { name: 'units_sold', header: 'Units Sold' }, { name: 'actions', header: 'Action' }
        ],
        actions: [
            { title: 'View', icon: 'bi bi-eye-fill', onClick: (data: ProductDetails) => { setViewProduct(data); setIsViewDialogVisible(true) } },
            { title: 'Edit', icon: 'bi bi-pencil-fill', onClick: (data: ProductDetails) => { setViewProduct(data); setIsAddDialogVisible(true) } },
            { title: 'Delete', icon: 'bi bi-trash-fill', onClick: (data: ProductDetails) => { handleDelete(data) } }
        ],
        isSelectable: true
    }

    return (
        <div className='product_management_container d-flex flex-column' style={{ height: '100vh' }}>
            <Header title='Price Optimization Tool' />
            <Navbar />
            <Table {...tableConfig} />
            <ViewData />{/* Data view on eye icon click on table */}
        </div>
    )
}

export default ProductManagement;