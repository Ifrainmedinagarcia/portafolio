import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'

const Footer = () => {
    return (
        <footer className='footer'>
            <IconButton href='https://www.linkedin.com/in/ifraindavidmedinagarcia/' target='_blank' color='inherit' aria-label="">
                <LinkedInIcon />
            </IconButton>
            <IconButton href='https://www.instagram.com/idmg_photographer/' target='_blank' color='inherit' aria-label="">
                <InstagramIcon />
            </IconButton>
            <IconButton href='https://www.facebook.com/ifrain.medina/' target='_blank' color='inherit' aria-label="">
                <FacebookIcon />
            </IconButton>
            <IconButton color='inherit' href='https://github.com/Ifrainmedinagarcia' target='_blank' aria-label="">
                <GitHubIcon />
            </IconButton>
        </footer>
    )
}

export default Footer
