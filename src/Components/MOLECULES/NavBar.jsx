import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { Divider } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';


const NavBar = () => {

    const [active, setActive] = React.useState(false)

    const activeMenu = () => {
        if (!active) {
            setActive(true)
        } else {
            setActive(false)
        }
    }


    return (
        <>
            {
                active ?
                    <div className='none'>
                        <IconButton className='zI' onClick={() => activeMenu()} color="inherit" aria-label="menu">
                            <CloseIcon />
                        </IconButton>

                    </div>
                    :
                    <div className='none'>
                        <IconButton onClick={() => activeMenu()} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                    </div>
            }

            {
                active ?
                    <nav className='navBar'>
                        <ul className='menu'>
                            <li className="menu_li"><a className="menu_li_link" href="#sobremi">Sobre mi</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="#habilidades">Habilidades</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="#proyectos">Proyectos</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="#est">Estudiando</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="#hobbies">Hobbies</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="#contact">Contacto</a></li>
                        </ul>
                    </nav>
                    : ''
            }

            <nav className='navBarESC'>
                <ul className='menuESC'>
                    <li className="menu_li"><a className="menu_li_link" href="#sobremi">Sobre mi</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="#habilidades">Habilidades</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="#proyectos">Proyectos</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="#est">Estudiando</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="#hobbies">Hobbies</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="#contact">Contacto</a></li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar
