import React, { useContext } from 'react'

import './ViewData.css'
import CustomDialog from '../dialog/Dialog';
import { ContextType } from '../../utils/types/Types';
import { ProviderContext } from '../../context/ContextProvider';

const ViewData: React.FC = () => {

    const { viewProduct, setViewProduct, isViewDialogVisible, setIsViewDialogVisible } = useContext<ContextType>(ProviderContext);

    return (
        <CustomDialog
            title={'Product Details'}
            visible={isViewDialogVisible}
            onHide={() => { setViewProduct({}); setIsViewDialogVisible(false) }}
            onSubmit={() => null} // Call handleSubmit when the form is submitted
        >
            <div className='p-5'>
                {Object.entries(viewProduct!).map(([key, value]) => {
                    return <div className='mb-2 fs-5'><b>{key.toUpperCase()}</b>: {value}</div>
                })}

            </div>
        </CustomDialog>
    )
}

export default ViewData;