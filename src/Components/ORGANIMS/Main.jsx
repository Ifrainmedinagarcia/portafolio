import React from 'react'
import Contacto from '../MOLECULES/Contacto'
import Estudiando from '../MOLECULES/Estudiando'
import Experiencia from '../MOLECULES/Experiencia'
import Habilidades from '../MOLECULES/Habilidades'
import Hobbies from '../MOLECULES/Hobbies'
import SobreMi from '../MOLECULES/SobreMi'

const Main = () => {
    return (
        <main className='main'>
            <SobreMi />
            <Habilidades />
            <Experiencia />
            <Estudiando />
            <Hobbies />
            <Contacto />
        </main>
    )
}

export default Main
