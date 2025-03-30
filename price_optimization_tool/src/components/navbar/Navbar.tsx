import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Navbar.css'
import { ButtonField, CustomDialog, Dropdown, InputField, Seperator, Switch, Title } from '../index';

const Navbar: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            {/* Back Button */}
            <ButtonField label='Back' icon='bi bi-chevron-double-left' onClick={() => navigate(-1)} />
            {/* Seperator */}
            <Seperator />
            {/* Page Title */}
            <Title title='Create and Manage Product' />

            {/* Toggle Switch */}
            <Switch />
            {/* Seperator */}
            <Seperator />
            {/* Search Box */}
            <InputField
                icon='bi bi-search'
                placeholder='Search'
                value={''}
                onChange={() => { }}
                isPrimary={true}
            />

            {/* Category Dropdown */}
            <label className="category-label">Category:</label>
            <Dropdown
                placeholder='Select'
                value={''}
                onChange={() => { }}
                options={['Stationary']}
            />

            {/* Filter Button */}
            <ButtonField label='Filter' icon='bi bi-funnel-fill' />
            {/* Seperator */}
            <Seperator />
            {/* Action Buttons */}
            <ButtonField label='Add New Products' icon='bi bi-plus-circle-fill' isPrimary={true} onClick={() => { }} />
            <ButtonField label='Demand Forecast' icon='bi bi-file-bar-graph-fill' isPrimary={true} onClick={() => { }} />
            <CustomDialog
                title='Add New Product'
                visible={true}
                onHide={() => { }}
                onSubmit={() => { }}
            >
                <div style={{ padding: "15px" }}>
                    <div className="mb-3">
                        <label>Product Name:</label>
                        <InputField placeholder="Search" value={""} onChange={() => { }} />
                    </div>

                    <div className="mb-3">
                        <label>Product Category:</label>
                        <InputField placeholder="Search" value={""} onChange={() => { }} />
                    </div>

                    <div className="row">
                        <div className="col-6 mb-3">
                            <label>Cost Price:</label>
                            <InputField placeholder="Search" value={""} onChange={() => { }} />
                        </div>
                        <div className="col-6 mb-3">
                            <label>Selling Price:</label>
                            <InputField placeholder="Search" value={""} onChange={() => { }} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Description:</label>
                        <textarea value="" onChange={() => { }} placeholder='Description' className='search-container w-100' />
                    </div>

                    <div className="row">
                        <div className="col-6 mb-3">
                            <label>Available Stock:</label>
                            <InputField placeholder="Search" value={""} onChange={() => { }} />
                        </div>
                        <div className="col-6 mb-3">
                            <label>Units Sold:</label>
                            <InputField placeholder="Search" value={""} onChange={() => { }} />
                        </div>
                    </div>
                </div>

            </CustomDialog>
        </div>
    )
}

export default Navbar;