import { Grid, Button } from '@material-ui/core'
import React from 'react'


const Contacto = () => {

    const sendForm = e => {
        e.preventDefault()
    }

    return (
        <section className='form' id='contact'>
            <p className='title__entonces'>¿Entonces?</p>
            <h6 className='futuro__title'>¿Construimos el futuro?</h6>
            <form onSubmit={sendForm.bind()} action="">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={4}>
                        <input placeholder='Nombre' type="text" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <input placeholder='Apellido' type="text" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <input placeholder='Correo' type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <textarea placeholder='Déjame un mensaje' className='msg' name="" id="" cols="30" rows="5"></textarea>
                    </Grid>
                </Grid>
                <Button type='submit' color='primary' className='btnSend' variant="contained">
                    Enviar
                </Button>
            </form>
        </section>
    )
}

export default Contacto
