import { Grid } from '@material-ui/core'
import React from 'react'
import TarjetaEst from '../ATOMS/TarjetaEst'

const Hobbies = () => {
    return (
        <section className='seccion__hobbies' id='hobbies'>
            <h4 className='title__hobbies'>No todo es trabajo y estudio</h4>
            <p className='p__hobbies'>De esta forma me relajo y disfruto de mi tiempo libre</p>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className='container__warzone'>

                        <img className='img__warzone' src="https://portfolioifra.s3.amazonaws.com/warzone.png" alt="WARZONE" />

                    </div>
                    <div className='container__video'>

                        <iframe className='video__warzone' src="https://www.youtube.com/embed/rGogiKfqZKA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                    </div>

                </Grid>
                <Grid item xs={12}>
                    <div className='container__warzone fifa'>

                        <img className='img__warzone imgFifa' src="https://portfolioifra.s3.amazonaws.com/fifa.png" alt="WARZONE" />

                    </div>
                    <div className='container__video'>

                        <iframe className='video__warzone' src="https://www.youtube.com/embed/-l3YJPLG6sU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    </div>

                </Grid>

                <Grid item xs={12} md={3}>
                    <TarjetaEst
                        img='https://portfolioifra.s3.amazonaws.com/DISEN%CC%83O.jpg'
                        title='Diseño/Audiovisual'
                    />

                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaEst
                        img='https://portfolioifra.s3.amazonaws.com/PHOTO.jpg'
                        title='Fotografía'
                    />

                </Grid>

                <Grid item xs={12} md={3}>
                    <TarjetaEst
                        img='https://portfolioifra.s3.amazonaws.com/LEER.jpg'
                        title='Lectura'
                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <TarjetaEst
                        img='https://portfolioifra.s3.amazonaws.com/DEPORTE.jpg'
                        title='Deporte'
                    />

                </Grid>

            </Grid>



        </section>
    )
}

export default Hobbies