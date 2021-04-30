import React from 'react'
import Estudiando from '../MOLECULES/Estudiando'
import Experiencia from '../MOLECULES/Experiencia'
import Habilidades from '../MOLECULES/Habilidades'
import SobreMi from '../MOLECULES/SobreMi'

const Main = () => {
    return (
        <main className='main'>
            <SobreMi />
            <Habilidades />
            <Experiencia />
            <Estudiando />
        </main>
    )
}

export default Main
