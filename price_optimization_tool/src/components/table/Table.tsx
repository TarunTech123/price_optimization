
import React, { useContext } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import './Table.css'
import { actions, Columns, ContextType, ProductDetails, tableConfigType } from '../../utils/types/Types'
import { ProviderContext } from '../../context/ContextProvider'

const Table: React.FC<tableConfigType> = (tableConfig) => {
    const { selectedProducts, setSelectedProducts } = useContext<ContextType>(ProviderContext);
    const { data, columns, actions, isSelectable } = tableConfig;

    const bodyTemplate = (item: Columns, rowData: ProductDetails) => {
        if (item?.name === 'actions') {
            return renderActions(rowData)
        } else {
            return rowData[item.name as keyof ProductDetails] ?? "-"; // Ensure valid access
        }
    }

    const renderActions = (rowData: ProductDetails) => {
        return (
            <div className='d-flex gap-3'>
                {actions?.map((item: actions, index: number) => {
                    if (item?.title === 'Delete') {
                        return <i className={item?.icon} title={item?.title} onClick={() => item?.onClick(rowData)} style={{ fontSize: '14px', color: 'red' }} key={index} />
                    }
                    return <i className={item?.icon} title={item?.title} onClick={() => { item?.onClick(rowData) }} style={{ fontSize: '14px' }} key={index} />
                })}
            </div>
        )
    }

    return (
        <DataTable value={data!} selectionMode={'multiple'}
            selection={selectedProducts!}
            onSelectionChange={(e: {
                value: React.SetStateAction<ProductDetails[] | null | undefined>;
            }) => { setSelectedProducts(e.value); }} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
            {isSelectable ? <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column> : null}
            {columns?.map((item: Columns) => {
                return <Column field={item?.name} header={item?.header} body={(rowData: ProductDetails) => bodyTemplate(item, rowData)} />
            })}
        </DataTable>
    );
}

export default Table;