import React from 'react'
import './FirstSection.css'
import MaduDev1 from '../../imgs/MaduDev1.png'
import Code from '../../fragments/Code/Code'

const FirstSection = () => {
  return (
    <section className='greeting' >
        <Code />
        <div className='figure'>
            <img src={MaduDev1} alt="Figurinha 1" />
        </div>
    </section>
  )
}

export default FirstSection