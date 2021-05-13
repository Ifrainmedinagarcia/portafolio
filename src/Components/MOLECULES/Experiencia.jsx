import { Grid } from '@material-ui/core'
import React from 'react'
import TarjetaExp from '../ATOMS/TarjetaExp'


const Experiencia = () => {
    return (
        <section className='seccion__exp' id='proyectos'>
            <h3 className='title__exp'>¿Experiencia? ¡Claro que si!</h3>
            <p className='p__exp'>Además de este portafolio tengo mucho que mostrarte</p>
            <Grid container spacing={6}>
                <Grid item xs={12}>

                    <TarjetaExp
                        title='PODCATS CHANNEL'
                        img='https://portfolioifra.s3.amazonaws.com/PODCATS.jpg'
                        linkGitHub='https://github.com/Ifrainmedinagarcia/Podcastchannel-acamica'
                        linkProyect='https://ifrainmedinagarcia.github.io/Podcastchannel-acamica/'
                    />

                </Grid>
                <Grid item xs={12}>

                    <TarjetaExp
                        title='GIFOS'
                        img='https://portfolioifra.s3.amazonaws.com/GIFOSS.jpg'
                        linkGitHub='https://github.com/Ifrainmedinagarcia/proyectoGIFOS-acamica'
                        linkProyect='https://ifrainmedinagarcia.github.io/proyectoGIFOS-acamica/'
                    />

                </Grid>
                <Grid item xs={12}>

                    <TarjetaExp
                        title='DATA WEREHOUSE (Solo Desktop)'
                        img='https://portfolioifra.s3.amazonaws.com/DATA.jpg'
                        linkGitHub='https://github.com/Ifrainmedinagarcia/datawerehousefront'
                        linkProyect='https://tidyup.netlify.app/'
                    />

                </Grid>
                <Grid item xs={12}>

                    <TarjetaExp
                        title='DELILAH RESTÓ'
                        img='https://portfolioifra.s3.amazonaws.com/DELILAH.jpg'
                        linkGitHub='https://github.com/Ifrainmedinagarcia/delilah-resto'
                        linkProyect='https://github.com/Ifrainmedinagarcia/delilah-resto'
                    />

                </Grid>
                <Grid item xs={12}>

                    <TarjetaExp
                        title='PUENTE DIGITAL'
                        img='https://portfolioifra.s3.amazonaws.com/PUENTE.jpg'
                        linkGitHub='https://github.com/Ifrainmedinagarcia/landing-puente-digital'
                        linkProyect='https://puente.digital/'
                    />

                </Grid>
                <Grid item xs={12}>

                    <TarjetaExp
                        title='CLEAR PEOPLE'
                        img='https://portfolioifra.s3.amazonaws.com/CLEAR.jpg'
                        linkGitHub='https://github.com/Ifrainmedinagarcia/peopleclear'
                        linkProyect='https://clearpeople.cl/'
                    />

                </Grid>
                <Grid item xs={12}>

                    <TarjetaExp
                        title='CLEAR GROUP'
                        img='https://portfolioifra.s3.amazonaws.com/CLEARG.jpg'
                        linkProyect='https://www.cgroup.ai/'
                        linkGitHub='https://github.com/Ifrainmedinagarcia/groupClear'
                    />

                </Grid>

            </Grid>
        </section>
    )
}

export default Experiencia
