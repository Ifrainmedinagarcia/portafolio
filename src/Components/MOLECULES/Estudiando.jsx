import { Grid } from '@material-ui/core'
import React from 'react'
import TarjetaEst from '../ATOMS/TarjetaEst'

const Estudiando = () => {
    return (
        <section className='seccion__est' id='est'>
            <h3 className='title__est'>Siempre en constante aprendizaje</h3>
            <p className='p__est'>Actualmente estoy estudiando para obtener las siguientes habilidades</p>
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    <TarjetaEst
                        title='INGLÉS'
                        img='https://portfolioifra.s3.amazonaws.com/INGLES.jpg'
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TarjetaEst
                        title='TYPESCRIPT'
                        img='https://portfolioifra.s3.amazonaws.com/PROGRAMMING.jpg'
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TarjetaEst
                        title='JAVA'
                        img='https://portfolioifra.s3.amazonaws.com/JAVA.jpg'
                    />
                </Grid>
            </Grid>
        </section>
    )
}

export default Estudiando
