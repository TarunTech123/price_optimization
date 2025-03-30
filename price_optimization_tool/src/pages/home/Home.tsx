import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'
import logo from '../../assets/logo.png'
import product_management_logo from '../../assets/product_management.png'
import price_optimization_logo from '../../assets/price_optimization.png'
import { InfoCard } from '../../components'
import { CardProps } from '../../utils/types/Types'

const Home: React.FC = () => {

    const navigate = useNavigate(); //navigate to other page
    const cardData: CardProps[] = [
        {
            imageSrc: product_management_logo,
            title: 'Create and Manage Product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            onClick: () => navigate('/product_management')
        },
        {
            imageSrc: price_optimization_logo,
            title: 'Pricing Optimization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            onClick: () => navigate('/price_optimization')
        }
    ]

    return (
        <div className='home_container d-flex flex-column justify-content-center align-items-center'>
            <img src={logo} alt='BCG-X Logo' />
            <h1 className='home_title'>Price Optimization Tool</h1>
            <hr className='home_hr'/>
            <p className='home_desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>

            <div className='d-flex gap-5'>
                {cardData.map((item: CardProps, index: number) => {
                    const { imageSrc, title, description, onClick } = item

                    return (
                        <InfoCard
                            key={index}
                            imageSrc={imageSrc}
                            title={title}
                            description={description}
                            onClick={onClick} />
                    )
                })}
            </div>

        </div>
    )
}

export default Home;