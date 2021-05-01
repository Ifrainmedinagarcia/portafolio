import React from 'react'
import Grid from '@material-ui/core/Grid';
import NavBar from '../MOLECULES/NavBar';
import Firma from '../ATOMS/Firma';

const Header = () => {
    return (
        <header className='Header'>
            <Grid container>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12}>
                    <Firma/>
                </Grid>

            </Grid>
        </header>
    )
}

export default Header
