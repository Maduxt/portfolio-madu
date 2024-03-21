import React from 'react'
import './header.css'
import Logo from '../../fragments/Logo/logo'
import Button from '../../fragments/ButtonTheme/button'

const Header = () => {
  return (
    <nav className='navbar'>
        <Logo />
        <div className='navRight'>
            <ul className='navegation'>
                <li className='links'>INICIO</li>
                <li className='links'>SOBRE</li>
                <li className='links'>PROJETOS</li>
                <li className='links'>CONTATO</li>
            </ul>
        <Button />
        </div>
    </nav>
  )
}

export default Header