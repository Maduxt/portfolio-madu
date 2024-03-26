import React from 'react'
import './fragmentCode.css'
import { 
    VscFiles,
    VscDebugAlt,
    VscWarning,
    VscExtensions,
    VscError,
    VscSearch,
    VscClose
} from "react-icons/vsc";


interface fragment {
    image: string;
    image2: string;
    readme: string;
}

const FragmentCode: React.FC<fragment> = ({ image, readme, image2 }) => {
  return (
    <section className='sectionPage'>
        <div className='codeTitle'>
            <h3>Portfólio</h3>
        </div>
        <div className='pages'>
            <p className='page'>{readme} <VscClose/> </p>
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
                <img className='text' src={image} alt="" />
                <div className='rightBar'>
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
        <div className='divFooter'>
            <div className='divIcons'>
                <span className='iconFooter'> <VscError /> </span>
                <span> <VscWarning/> </span>
            </div>
            <div className='divItems'>
                <span> UTF-8 </span>
                <span>Javascript</span>
            </div>
        </div>
    </section>
  )
}

export default FragmentCode