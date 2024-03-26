import React from 'react'
import './footer.css'
import Logo from '../../fragments/Logo/logo'
import Linkedin from './src/linkedin.svg'
import Github from './src/github.svg'
import Whatsapp from './src/whatsapp.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <Logo />
            <ul className='listFooter'>
                <li><Link className='link' to='/'> INICIO </Link></li>
                <li><Link className='link' to='/sobre'> SOBRE </Link></li>
                <li><Link className='link' to='/projetos'> PROJETOS </Link></li>
                <li><Link className='link' to='/contato'> CONTATO </Link></li>
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