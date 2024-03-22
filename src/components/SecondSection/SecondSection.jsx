import React from 'react'
import './SecondSection.css'
import Card from '../Card/Card.tsx';
import Dashboard from '../../imgs/capaProjeto.png'
import Cat from '../../imgs/Cat.png'
import Text from '../../imgs/text.png'
import Description from '../../imgs/description.png'

const SecondSection = () => {
  return (
    <section className='secondSection'>
        <div>
            <Card
                capa={Dashboard} 
                title={'Dashboard - Monye'}
                description={Description}
                word={'Acessar'}
            />
        </div>
        <div>
            <Card
            capa={Cat} 
            title={'Em breve'}
            description={Text}
            word={'???'}
            />

        </div>
        <div>
        <Card
             capa={Cat} 
             title={'Em breve'}
             description={Text}
             word={'???'}
            />
        </div>
        <div>
        <Card
            capa={Cat} 
            title={'Em breve'}
            description={Text}
            word={'???'}
            />
        </div>
    </section>
  )
}

export default SecondSection;