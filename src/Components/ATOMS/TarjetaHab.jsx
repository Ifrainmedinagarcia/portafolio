import React from 'react'

const TarjetaHab = ({ titleTech, img, alt }) => {
    return (
        <div onclick="return true" className='container__tarjeta'>
            <div className='container__img__habiliades'>
                <img className='img__habilidades' src={img} alt={alt} />
            </div>
            <p className='tecnología'>{titleTech}</p>
        </div>
    )
}

export default TarjetaHab
