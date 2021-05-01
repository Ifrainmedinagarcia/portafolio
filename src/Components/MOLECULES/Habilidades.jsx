import { Grid } from '@material-ui/core'
import React from 'react'
import TarjetaHab from '../ATOMS/TarjetaHab'
import HTML from '../../Assets/HTML.png'
import CSS from '../../Assets/CSS.png'
import JS from '../../Assets/JS.png'
import NODE from '../../Assets/NODE.png'
import GIT from '../../Assets/GIT.png'
import REACT from '../../Assets/REACT.png'
import MYSQL from '../../Assets/MYSQL.png'
import MONGODB from '../../Assets/MONGODB.png'
import SEQUELIZE from '../../Assets/SEQUELIZE.png'
import SASS from '../../Assets/SASS.png'
import MATERIAL from '../../Assets/MATERIALUI.png'
import REDUX from '../../Assets/REDUX.png'

const Habilidades = () => {
    return (
        <section className='seccion__Habilidades' id='habilidades'>
            <h2 className='title__habilidades'>Habilidades</h2>
            <p className='p__habilidades'>Dale vuelta al logo 😉</p>
            <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={HTML}
                        titleTech='HTML5'
                        alt='HTML'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={CSS}
                        titleTech='CSS'
                        alt='CSS'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={JS}
                        titleTech='JavaScript'
                        alt='JavaScript'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={NODE}
                        titleTech='Node JS'
                        alt='Node JS'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={GIT}
                        titleTech='Git'
                        alt='Git'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={REACT}
                        titleTech='React JS'
                        alt='React JS'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={MYSQL}
                        titleTech='MySQL'
                        alt='MySQL'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={MONGODB}
                        titleTech='MongoDB'
                        alt='MongoDB'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={SEQUELIZE}
                        titleTech='Sequelize'
                        alt='Sequelize'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={SASS}
                        titleTech='Sass'
                        alt='Sass'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={MATERIAL}
                        titleTech='Material UI'
                        alt='Material UI'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TarjetaHab
                        img={REDUX}
                        titleTech='Redux'
                        alt='Redux'
                    />
                </Grid>
            </Grid>
        </section>
    )
}

export default Habilidades
