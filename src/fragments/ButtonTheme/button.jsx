import React from 'react'
import Moon from '../../imgs/moon.png'
import './button.css'

const Button = () => {
  return (
    <div>
        <button className='navButton'>
            <img src={Moon} alt="" />
        </button>
    </div>
  )
}

export default Button