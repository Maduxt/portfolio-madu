import React from 'react'
import './FirstSection.css'
import FragmentFigure from '../../fragments/Figure/fragmentFigure.tsx'
import MaduDev1 from '../../imgs/MaduDev1.jpg'
import FragmentCode from '../../fragments/Code/fragmentCode.tsx'
import Code from '../../fragments/Code/img/codigo.png'
import Erro from '../../fragments/Code/img/erro.png'

const FirstSection = () => {
  return (
    <section className='greeting' >
        <FragmentCode
          image= {Code}
          image2= {Erro}
          readme= {'main.js'}
        />

        <FragmentFigure
            figure= {MaduDev1}
        />
    </section>
  )
}

export default FirstSection