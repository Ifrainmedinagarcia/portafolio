import { Grid } from '@material-ui/core'
import React from 'react'
import TarjetaHab from '../ATOMS/TarjetaHab'

const Habilidades = () => {
    return (
        <section className='seccion__Habilidades' id='habilidades'>
            <h2 className='title__habilidades'>Habilidades</h2>
            <p className='p__habilidades'>Dale vuelta al logo 😉</p>
            <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/HTML.png'
                        titleTech='HTML5'
                        alt='HTML'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/CSS.png'
                        titleTech='CSS'
                        alt='CSS'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/JS.png'
                        titleTech='JavaScript'
                        alt='JavaScript'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/NODE.png'
                        titleTech='Node JS'
                        alt='Node JS'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/GIT.png'
                        titleTech='Git'
                        alt='Git'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/REACT.png'
                        titleTech='React JS'
                        alt='React JS'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/MYSQL.png'
                        titleTech='MySQL'
                        alt='MySQL'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/MONGODB.png'
                        titleTech='MongoDB'
                        alt='Mongo DB'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/SEQUELIZE.png'
                        titleTech='Sequelize'
                        alt='Sequelize'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/SASS.png'
                        titleTech='Sass'
                        alt='Sass'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/MATERIALUI.png'
                        titleTech='Material UI'
                        alt='Material UI'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img='https://portfolioifra.s3.amazonaws.com/REDUX.png'
                        titleTech='Redux'
                        alt='Redux'
                    />
                </Grid>
            </Grid>
        </section>
    )
}

export default Habilidades
