import React from 'react'
import './footer.css'
import Logo from '../../fragments/Logo/logo'
import Linkedin from './src/linkedin.svg'
import Github from './src/github.svg'
import Whatsapp from './src/whatsapp.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <Logo />
        <ul className='listFooter'>
            <li>INICIO</li>
            <li>SOBRE</li>
            <li>PROJETOS</li>
            <li>CONTATO</li>
        </ul>
        <ul className='iconsFooter'>
            <li>
                <a href="https://www.linkedin.com/in/mariapolli/" target='_blank'>
                    <img src={Linkedin} alt="Logo Linkedin" />
                </a>
            </li>
            <li>
                <a href="https://github.com/Maduxt" target='_blank'>
                    <img src={Github} alt="Logo Github" />
                </a>
            </li>
            <li>
                <a href="https://github.com/Maduxt" target='_blank'>
                    <img src={Whatsapp} alt="Logo Whatsapp" />
                </a>
            </li>
        </ul>
        <small> © 2024 Maduxt </small>

    </footer>
  )
}

export default Footer