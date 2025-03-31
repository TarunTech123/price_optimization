import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Navbar.css'
import { AddProduct, ButtonField, Dropdown, Forecast, InputField, Seperator, Switch, Title } from '../index';
import { ContextType } from '../../utils/types/Types';
import { ProviderContext } from '../../context/ContextProvider';
import { GetCategories } from '../../services/Product_Management_Service';

const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const { setIsAddDialogVisible, setIsForecastDialogVisible, handleSearch, categories, setCategories, handleFilterProductsByCategory } = useContext<ContextType>(ProviderContext);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        getCategoryData();
    }, []);//eslint-disable-line react-hooks/exhaustive-deps

    const getCategoryData = async () => {
        await GetCategories('/categories').then((res) => {
            console.log(res);
            setCategories(res);
        }).catch((err) => {
            console.log('products get err', err)
        })
    }

    return (
        <div className="navbar">
            {/* Back Button */}
            <ButtonField label='Back' icon='bi bi-chevron-double-left' onClick={() => navigate(-1)} />
            {/* Seperator */}
            <Seperator />
            {/* Page Title */}
            <Title title={window.location.pathname !== '/price_optimization' ? 'Create and Manage Product' : 'Pricing Optimization'} />

            {/* Toggle Switch */}
            <Switch />
            {/* Seperator */}
            <Seperator />
            {/* Search Box */}
            <InputField
                icon='bi bi-search'
                placeholder='Search'
                value={searchText}
                onChange={(e) => { setSearchText(e.target.value); handleSearch('/products/search', e.target.value) }}
                isPrimary={true}
            />

            {/* Category Dropdown */}
            <label className="category-label">Category:</label>
            <Dropdown
                placeholder='Select'
                onChange={(e) => { handleFilterProductsByCategory('/products', Number(e.target.value)) }}
                options={categories}
            />

            {/* Filter Button */}
            <ButtonField label='Filter' icon='bi bi-funnel-fill' />
            {/* Seperator */}
            <Seperator />
            {/* Action Buttons */}
            {window.location.pathname === '/price_optimization' ? null : <><ButtonField label='Add New Products' icon='bi bi-plus-circle-fill' isPrimary={true} onClick={() => setIsAddDialogVisible(true)} />
                <ButtonField label='Demand Forecast' icon='bi bi-file-bar-graph-fill' isPrimary={true} onClick={() => { setIsForecastDialogVisible(true) }} /></>}

            {/* Add Product Dialog */}
            <AddProduct title='Add New Product' />
            {/* Forecast */}
            <Forecast />
        </div>
    )
}

export default Navbar;