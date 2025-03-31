import React, { useContext, useEffect, useState } from 'react';

import CustomDialog from '../dialog/Dialog';
import InputField from '../input/InputField';
import { ContextType } from '../../utils/types/Types';
import { ProviderContext } from '../../context/ContextProvider';
import { AddProductAPI } from '../../services/Product_Management_Service';
import Loader from '../loader/Loader';
import { Alert } from '../../utils/alert';

type addProduct = {
    title: string;
}

const AddProduct: React.FC<addProduct> = ({ title }) => {

    const { isAddDialogVisible, setIsAddDialogVisible, isLoading, setIsLoading, viewProduct, setViewProduct } = useContext<ContextType>(ProviderContext);

    useEffect(() => {
        if (viewProduct?.id) {
            setProductName(viewProduct?.name);
            setProductCategory(0);
            setCostPrice(viewProduct?.cost_price);
            setSellingPrice(viewProduct?.selling_price);
            setDescription(viewProduct?.description);
            setAvailableStock(viewProduct?.stock_available);
            setUnitsSold(viewProduct?.units_sold)
        }
    }, [viewProduct])


    const [productName, setProductName] = useState<string | undefined>('');
    const [productCategory, setProductCategory] = useState<number | undefined>(0);
    const [costPrice, setCostPrice] = useState<number | undefined>(0);
    const [sellingPrice, setSellingPrice] = useState<number | undefined>(0);
    const [description, setDescription] = useState<string | undefined>('');
    const [availableStock, setAvailableStock] = useState<number | undefined>(0);
    const [unitsSold, setUnitsSold] = useState<number | undefined>(0);

    const handleSubmit = async () => {
        setIsLoading(true);
        if (!viewProduct?.id) {
            try {
                // Prepare the data to send to the API
                const productData = {
                    name: productName,
                    category_id: productCategory,
                    cost_price: costPrice,
                    selling_price: sellingPrice,
                    description: description,
                    stock_available: availableStock,
                    units_sold: unitsSold,
                    optimized_price: 0,
                    demand_forecast: 0,
                    customer_rating: 0
                };

                // Send a POST request to your API endpoint
                await AddProductAPI('/products', productData).then((res) => {
                    setIsLoading(false);
                    console.log('Product added successfully!', res);
                    // Clear the form fields
                    setProductName('');
                    setProductCategory(0);
                    setCostPrice(0);
                    setSellingPrice(0);
                    setDescription('');
                    setAvailableStock(0);
                    setUnitsSold(0);
                    //Success Alert
                    Alert('Success', 'Product Created Successfully', 'success')

                    // Close the dialog
                    setIsAddDialogVisible(false);
                }).catch((err) => {
                    setIsLoading(false);
                    console.log('err adding product', err);
                })


            } catch (error) {
                // Handle network errors or API errors here
                console.error('Error adding product:', error);
                // Optionally, show an error message to the user
            }
        } else {
            setIsLoading(false);
            setIsAddDialogVisible(false);
            Alert('Success', 'Product Updated Successfully', 'success')
        }
    };

    return (
        <CustomDialog
            title={!viewProduct?.id ? title : 'Edit Product Details'}
            visible={isAddDialogVisible}
            onHide={() => { setIsAddDialogVisible(false); setViewProduct({}) }}
            onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
        >
            <div style={{ padding: "15px" }}>
                <Loader isVisible={isLoading} />
                <div className="mb-3">
                    <label>Product Name:</label>
                    <InputField placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label>Product Category:</label>
                    <InputField placeholder="Enter product category" value={productCategory} onChange={(e) => setProductCategory(Number(e.target.value))} />
                </div>

                <div className="row">
                    <div className="col-6 mb-3">
                        <label>Cost Price:</label>
                        <InputField placeholder="Enter cost price" value={costPrice} onChange={(e) => setCostPrice(Number(e.target.value))} />
                    </div>
                    <div className="col-6 mb-3">
                        <label>Selling Price:</label>
                        <InputField placeholder="Enter selling price" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))} />
                    </div>
                </div>

                <div className="mb-3">
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter description' className='search-container w-100' />
                </div>

                <div className="row">
                    <div className="col-6 mb-3">
                        <label>Available Stock:</label>
                        <InputField placeholder="Enter available stock" value={availableStock} onChange={(e) => setAvailableStock(Number(e.target.value))} />
                    </div>
                    <div className="col-6 mb-3">
                        <label>Units Sold:</label>
                        <InputField placeholder="Enter units sold" value={unitsSold} onChange={(e) => setUnitsSold(Number(e.target.value))} />
                    </div>
                </div>
            </div>

        </CustomDialog>
    );
};

export default AddProduct;