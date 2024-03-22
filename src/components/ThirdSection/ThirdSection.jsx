import React from 'react'
import './ThirdSection.css'
import FragmentCode from '../../fragments/Code/fragmentCode.tsx'
import Doc from '../../imgs/codig.png'
import Readme from '../../imgs/readME.png'
import MaduDev2 from '../../imgs/MaduDev2.png'
import FragmentFigure from '../../fragments/Figure/fragmentFigure.tsx'

const ThirdSection = () => {
  return (
    <section className='thirdSection'>
        <FragmentFigure
            figure= {MaduDev2}
        />
        <FragmentCode 
            image= {Readme}
            image2= {Doc}
            readme= {'ReadME'}
        />

    </section>
  )
}

export default ThirdSection