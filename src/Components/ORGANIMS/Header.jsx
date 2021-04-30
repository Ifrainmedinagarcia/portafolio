import React from 'react'
import Grid from '@material-ui/core/Grid';
import NavBar from '../MOLECULES/NavBar';

const Header = () => {
    return (
        <header className='Header'>
            <Grid container>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
