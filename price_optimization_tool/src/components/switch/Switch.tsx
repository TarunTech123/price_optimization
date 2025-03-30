import React from 'react'

import './Switch.css'

const Switch: React.FC = () => {

    return (
        <>
            <label className="toggle-switch">
                <input type="checkbox" id="forecast-toggle" />
                <span className="slider"></span>
                <span className="toggle-label">With Demand Forecast</span>
            </label>
        </>
    )
}

export default Switch;