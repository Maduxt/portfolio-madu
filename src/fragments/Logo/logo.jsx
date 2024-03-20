import { ReactComponent as LogoSvg } from './img/Logo.svg'
import './logo.css'
import React from 'react'

const Logo = () => {
  return (
    <div className='imgLogo'>
        <span>
            <LogoSvg />
        </span>
    </div>
  )
}

export default Logo