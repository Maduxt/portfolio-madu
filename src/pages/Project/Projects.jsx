import React from 'react'
import Card from '../../components/Card/Card.tsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx'
import Dashboard from '../../imgs/capaProjeto.png'
import Cat from '../../imgs/Cat.png'
import Portfolio from '../../imgs/capaPortfolio.png'
import './Projects.css'
import ScrollToTop from '../../fragments/ScrollButton/ScrollToTop.jsx'

const Projects = () => {
  return (
    <section className='project'>

      <h2 className='titleProject'>PROJETOS</h2>

      <div className='cardsProject'>
        <ProjectCard 
        capa={Dashboard} 
        title={'Dashboard - Monye'}
        description={'Um lindo e moderno Dashboard, pensado e desenvolido para empresas usando as tecnologias mais recentes do mercado...'}
        />

        <ProjectCard 
        capa={Portfolio} 
        title={'Portfólio - Maduxt'}
        description={'Portfólio de Maduxt (eu), desenvolvido com React, Typescript, NodeJS e outras tecnologias. Design criado por Carlos...'}
        />

        <Card 
          capa={Cat} 
          title={'Em breve'}
          description={'Aqui ficarão as informações as resumo.Tente preencher tudo e as sempre  termine com “...”'}
        />
      </div>

      <div className="cardsProject">

        <Card 
          capa={Cat} 
          title={'Em breve'}
          description={'Aqui ficarão as informações as resumo.Tente preencher tudo e as sempre  termine com “...”'}
        />

        <Card 
          capa={Cat} 
          title={'Em breve'}
          description={'Aqui ficarão as informações as resumo.Tente preencher tudo e as sempre  termine com “...”'}
        />

        <Card 
          capa={Cat} 
          title={'Em breve'}
          description={'Aqui ficarão as informações as resumo.Tente preencher tudo e as sempre  termine com “...”'}
        />

      </div>

      <div className='changePages'>
        <span>  &lt; 1 2 3 &gt;  </span>
      </div>

      <ScrollToTop/>

    </section>
  )
}

export default Projects