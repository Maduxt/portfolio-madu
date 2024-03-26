import { Link } from 'react-router-dom'
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
                <li className='links'><Link className='link' to='/'> INICIO </Link></li>
                <li className='links'><Link className='link' to='/sobre'> SOBRE </Link></li>
                <li className='links'><Link className='link' to='/projetos'> PROJETOS </Link></li>
                <li className='links'><Link className='link' to='/contato'> CONTATO </Link></li>
            </ul>
        <Button />
        </div>
    </nav>
  )
}

export default Header