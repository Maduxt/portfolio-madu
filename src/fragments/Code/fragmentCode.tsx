import React from 'react'
import './fragmentCode.css'
import Codigo from './img/codigo.png'
import Vizu from './img/Rectangle 49.png'
import { 
    VscFiles,
    VscDebugAlt,
    VscWarning,
    VscExtensions,
    VscError,
    VscSearch,
} from "react-icons/vsc";


interface fragment {
    image: string;
    image2: string;
    readme: string;
}

const FragmentCode: React.FC<fragment> = ({ image, readme }) => {
  return (
    <section className='sectionPage'>
            <h3 className='codeTitle'>Portfólio</h3>
        <div className='pages'>
            <p className='page'>main.js {readme} </p>
        </div>
        <div className='main'>
            <div className='sidebar'>
                <ul>
                    <li className='icon'> <VscFiles/> </li>
                    <li className='icon'> <VscSearch/> </li>
                    <li className='icon'> <VscDebugAlt/> </li>
                    <li className='icon'> <VscExtensions/> </li>
                </ul>
            </div>
            <div className='code'>
                <img className='text' src={Codigo} alt="" />
                <img className='rightBar' src={image} alt="Figurinha" />
            </div>
        </div>
        <div className='divFooter'>
            <div className='divItems'>
                <span> <VscError /> <VscWarning/>  </span>
                <span> UTF-8 Javascript </span>
            </div>
        </div>
    </section>
  )
}

export default FragmentCode