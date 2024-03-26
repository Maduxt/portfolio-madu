import React from 'react'
import './Card.css'

interface component {
    capa: string
    title: string;
    description: string;
}

const Card: React.FC<component> = ({ capa, title, description }) => {
  return (
    <div className='card'>
        <img className='imageCard' src={capa} alt="Capa do projeto" />
        <h3 className='titleCard'> {title} </h3>
        <p className='cardParagraph'>{description}</p>
        <button className='buttonCard'>???</button>
    </div>
  )
}

export default Card