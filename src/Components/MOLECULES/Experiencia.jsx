import { Grid } from '@material-ui/core'
import React from 'react'
import TarjetaExp from '../ATOMS/TarjetaExp'

const Experiencia = () => {
    return (
        <section className='seccion__exp'>
            <h3 className='title__exp'>¿Experiencia? ¡Claro que si!</h3>
            <p className='p__exp'>Además de este portafolio tengo mucho que mostrarte</p>
            <Grid container spacing={6}>
                <Grid item item xs={12}>

                    <TarjetaExp
                        title='PODCATS CHANNEL'
                        img='https://portfolioifra.s3.amazonaws.com/PODCATS.jpg'
                    />

                </Grid>
                <Grid item item xs={12}>

                    <TarjetaExp
                        title='GIFOS'
                        img='https://portfolioifra.s3.amazonaws.com/GIFOS.jpg'
                    />

                </Grid>
                <Grid item item xs={12}>

                    <TarjetaExp
                        title='DATA WEREHOUSE'
                        img='https://portfolioifra.s3.amazonaws.com/DATA.jpg'
                    />

                </Grid>
                <Grid item item xs={12}>

                    <TarjetaExp
                        title='DELILAH RESTÓ'
                        img='https://portfolioifra.s3.amazonaws.com/DELILAH.jpg'
                    />

                </Grid>
                <Grid item item xs={12}>

                    <TarjetaExp
                        title='PUENTE DIGITAL'
                        img='https://portfolioifra.s3.amazonaws.com/PUENTE.jpg'
                    />

                </Grid>
                <Grid item item xs={12}>

                    <TarjetaExp
                        title='CLEAR PEOPLE'
                        img='https://portfolioifra.s3.amazonaws.com/CLEAR.jpg'
                    />

                </Grid>
                <Grid item item xs={12}>

                    <TarjetaExp
                        title='CLEAT GROUP'
                        img='https://portfolioifra.s3.amazonaws.com/CLEARG.jpg'
                    />

                </Grid>

            </Grid>
        </section>
    )
}

export default Experiencia
