import React from 'react'
import './Card.css'

interface component {
    capa: string
    title: string;
    description: string;
    word: string;
}

const Card: React.FC<component> = ({ capa, title, description, word }) => {
  return (
    <div className='card'>
        <img className='imageCard' src={capa} alt="Capa do projeto" />
        <h3 className='titleCard'> {title} </h3>
        <img src={description} alt="Descrição" />
        <button className='buttonCard'>{word}</button>
    </div>
  )
}

export default Card