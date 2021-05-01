import React from 'react'
import Button from '@material-ui/core/Button'

const TarjetaExp = ({ title, img, linkProyect, linkGitHub }) => {
    return (
        <div className='flip'>
            <div className='back'>
                <img className='img__proyect_contrast' src={img} alt="" />
                <Button href={linkProyect} target='_blank' className='btnProyect' size='large' variant="contained" color="primary">
                    Proyecto
                </Button>
                <Button href={linkGitHub} target='_blank' className='btnProyect' size='large' variant="contained" color="secondary">
                    Código
                </Button>
            </div>
            <div className='front'>
                <p className='proyectoTile'>{title}</p>
                <img className='img__proyect' src={img} alt="" />
            </div>
        </div>
    )
}

export default TarjetaExp
