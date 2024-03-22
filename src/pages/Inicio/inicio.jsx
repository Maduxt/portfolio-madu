import React from 'react'
import './inicio.css'
import FirstSection from '../../components/FirstSection/FirstSection'
import SecondSection from '../../components/SecondSection/SecondSection'
import ThirdSection from '../../components/ThirdSection/ThirdSection'

const Inicio = () => {
  return (
    <div className='inicio'>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default Inicio