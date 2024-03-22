import React from 'react'
import './fragmentFigure.css'

interface fragment {
    figure: string;
}

const FragmentFigure: React.FC<fragment> = ({ figure }) => {
  return (
    <div className='figure'>
        <img src={figure} alt="Figurinha" />
    </div>
  )
}

export default FragmentFigure