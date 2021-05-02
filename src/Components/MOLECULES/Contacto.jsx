import { Grid, Button } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import CustomizedSnackbars from '../ATOMS/CustomizedSnackbars'
import SimpleBackdrop from '../ATOMS/SimpleBackdrop'


const Contacto = () => {

    const [loader, setLoader] = React.useState(false)

    const [message, setMessage] = React.useState(false)

    const sendForm = async e => {
        e.preventDefault()
        const form = e.target
        const data = {
            "name": form.nombre.value,
            "lastName": form.apellido.value,
            "email": form.correo.value,
            "message": form.mensaje.value
        }
        if (data.name === '') {
            return alert('Por favor llenar correctamente todos los campos')
        }
        if (data.lastName === '') {
            return alert('Por favor llenar correctamente todos los campos')
        }
        if (data.email === '') {
            return alert('Por favor llenar correctamente todos los campos')
        }
        if (data.message === '') {
            return alert('Por favor llenar correctamente todos los campos')
        }
        try {
            setMessage(false)
            setLoader(true)
            await axios.post('https://ifrainportafolio.herokuapp.com/send', data)
                .then(res => {
                    setMessage(true)
                })
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
        form.nombre.value = ''
        form.apellido.value = ''
        form.correo.value = ''
        form.mensaje.value = ''
    }

    return (
        <>
            {
                loader ?
                    <SimpleBackdrop />
                    : ''
            }
            {
                message ?
                    <CustomizedSnackbars
                        message='Correo enviado con éxito'
                    />
                    : ''
            }
            <section className='form' id='contact'>
                <p className='title__entonces'>¿Entonces?</p>
                <h6 className='futuro__title'>¿Construimos el futuro?</h6>
                <form onSubmit={sendForm.bind()} action="">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={4}>
                            <input name='nombre' placeholder='Nombre' type="text" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <input name='apellido' placeholder='Apellido' type="text" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <input name='correo' placeholder='Correo' type="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <textarea name='mensaje' placeholder='Déjame un mensaje' className='msg' id="" cols="30" rows="5"></textarea>
                        </Grid>
                    </Grid>
                    <Button type='submit' color='primary' className='btnSend' variant="contained">
                        Enviar
                </Button>
                </form>
            </section>

        </>
    )
}

export default Contacto
