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
                <li>INICIO</li>
                <li>SOBRE</li>
                <li>PROJETOS</li>
                <li>CONTATO</li>
            </ul>
        <Button />
        </div>
    </nav>
  )
}

export default Header