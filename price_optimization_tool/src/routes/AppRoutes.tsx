import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, PriceOptimization, ProductManagement } from '../pages';

const AppRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/product_management' element={<ProductManagement />} />
                <Route path='/price_optimization' element={<PriceOptimization />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;