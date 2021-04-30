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
                    <IconButton onClick={() => activeMenu()} color="inherit" aria-label="menu">
                        <CloseIcon />
                    </IconButton>
                    : <IconButton onClick={() => activeMenu()} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
            }

            {
                active ?
                    <nav className='navBar'>
                        <ul className='menu'>
                            <li className="menu_li"><a className="menu_li_link" href="">Sobre mi</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="">Habilidades</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="">Proyectos</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="">Estudiando</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="">Hobbies</a></li>
                            <Divider />
                            <li className="menu_li"><a className="menu_li_link" href="">Contacto</a></li>
                        </ul>
                    </nav>
                    : ''
            }

            {/*        <nav className='navBar'>
                <ul className='menu'>
                    <li className="menu_li"><a className="menu_li_link" href="">Sobre mi</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="">Habilidades</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="">Proyectos</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="">Estudiando</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="">Hobbies</a></li>
                    <li className="menu_li"><a className="menu_li_link" href="">Contacto</a></li>
                </ul>
            </nav> */}

        </>
    )
}

export default NavBar
