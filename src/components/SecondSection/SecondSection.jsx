import React from 'react'
import './SecondSection.css'
import Card from '../Card/Card.tsx';
import ProjectCard from '../ProjectCard/ProjectCard.tsx'
import Dashboard from '../../imgs/capaProjeto.png'
import Portfolio from '../../imgs/capaPortfolio.png'
import Cat from '../../imgs/Cat.png'

const SecondSection = () => {
  return (
    <section className='secondSection'>
        <div className='item'>
            <ProjectCard
                capa={Dashboard} 
                title={'Dashboard - Monye'}
                description={'Um lindo e moderno Dashboard, pensado e desenvolido para empresas usando as tecnologias mais recentes do mercado...'}
            />
        </div>
        <div className='item'>
            <ProjectCard 
                capa={Portfolio} 
                title={'Portfólio - Maduxt'}
                description={'Portfólio de Maduxt (eu), desenvolvido com React, Typescript, NodeJS e outras tecnologias. Design criado por Carlos...'}
            />

        </div>
        <div className='item'>
        <Card
             capa={Cat} 
             title={'Em breve'}
             description={'Aqui ficarão as informações as resumo.Tente preencher tudo e as sempre  termine com “...”'}
            />
        </div>
        <div className='item'>
        <Card
            capa={Cat} 
            title={'Em breve'}
            description={'Aqui ficarão as informações as resumo.Tente preencher tudo e as sempre  termine com “...”'}
            />
        </div>
    </section>
  )
}

export default SecondSection;