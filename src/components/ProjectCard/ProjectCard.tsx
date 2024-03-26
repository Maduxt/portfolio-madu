import React from 'react'
import './ProjectCard.css'

interface component {
    capa: string
    title: string;
    description: string;
}

const ProjectCard: React.FC<component> = ({ capa, title, description }) => {
  return (
    <div className='cardProject'>
        <img className='imageCardProject' src={capa} alt="Capa do projeto" />
        <h3 className='titleCardProject'> {title} </h3>
        <p>{description}</p>
        <button className='buttonCardProject'>Acessar</button>
    </div>
  )
}

export default ProjectCard