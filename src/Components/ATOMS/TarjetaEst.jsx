import React from 'react'

const TarjetaEst = ({ img, title }) => {
    return (
        <div className='container'>
            <div className='container__img_est'>
                <img className='img_est' src={img} alt="" />
            </div>
            <div className='container__est'>
                <p className='title__est__tarjeta'>{title}</p>
            </div>
        </div>
    )
}

export default TarjetaEst
