
import React, { useState, useEffect, useContext } from 'react';
import { Chart } from 'primereact/chart';

import './Forecast.css';
import CustomDialog from '../dialog/Dialog';
import { ContextType, ProductDetails, tableConfigType } from '../../utils/types/Types';
import { ProviderContext } from '../../context/ContextProvider';
import Table from '../table/Table';

const Forecast: React.FC = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const { isForecastDialogVisible, setIsForecastDialogVisible, selectedProducts } = useContext<ContextType>(ProviderContext);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: selectedProducts?.map((item: ProductDetails) => item?.name),
            datasets: [
                {
                    label: 'Demand',
                    data: selectedProducts?.map((item:ProductDetails)=>item.demand_forecast),
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4,
                },
                {
                    label: 'Selling Price',
                    data: selectedProducts?.map((item:ProductDetails)=>item.selling_price),
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                       color: 'white'
                    },
                    grid: {
                        color: 'gray'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'gray'
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [selectedProducts]);

    const tableConfig: tableConfigType = {
        data: selectedProducts,
        columns: [{ name: 'name', header: 'name' }, { name: 'category_name', header: 'Product Category' }, { name: 'cost_price', header: 'Cost Price' },
        { name: 'selling_price', header: 'Selling Price' }, { name: 'description', header: 'description' },
        { name: 'stock_available', header: 'Available Stock' }, { name: 'units_sold', header: 'Units Sold' },
        { name: 'demand_forecast', header: 'Calculated Demand Forecast' }
        ]
    }

    return (
        <CustomDialog
            title={'Demand Forecast'}
            visible={isForecastDialogVisible}
            onHide={() => { setIsForecastDialogVisible(false); }}
            onSubmit={() => { }} // Call handleSubmit when the form is submitted
        >
            <Chart type="line" data={chartData} options={chartOptions} />
            <Table {...tableConfig} />
        </CustomDialog>
    )
}

export default Forecast;