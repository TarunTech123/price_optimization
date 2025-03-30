
import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import './Table.css'
import { actions, Columns, Product, tableConfigType } from '../../utils/types/Types'

const Table: React.FC<tableConfigType> = (tableConfig) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        setProducts(tableConfig.data)
    }, [tableConfig.data]);

    const bodyTemplate = (item: Columns, rowData: Product) => {
        if (item?.name === 'actions') {
            return renderActions(rowData)
        } else {
            return rowData[item.name as keyof Product] ?? "-"; // Ensure valid access
        }
    }

    const renderActions = (rowData: Product) => {
        return (
            <div className='d-flex gap-3'>
                {tableConfig?.actions?.map((item: actions) => {
                    if (item?.title === 'Delete') {
                        return <i className={item?.icon} title={item?.title} onClick={() => item?.onClick(rowData)} style={{ fontSize: '14px', color: 'red' }} />
                    }
                    return <i className={item?.icon} title={item?.title} onClick={() => item?.onClick(rowData)} style={{ fontSize: '14px' }} />
                })}
            </div>
        )
    }

    return (
        <DataTable value={products} selectionMode={'multiple'}
            selection={selectedProducts!}
            onSelectionChange={(e: {
                value: React.SetStateAction<Product[] | null>;
            }) => { setSelectedProducts(e.value); console.log('e.value', e.value) }} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            {tableConfig.columns.map((item: Columns) => {
                return <Column field={item?.name} header={item?.header} body={(rowData: Product) => bodyTemplate(item, rowData)} />
            })}
        </DataTable>
    );
}

export default Table;