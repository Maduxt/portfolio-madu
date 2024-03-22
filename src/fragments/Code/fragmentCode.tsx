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
            <h3 className='codeTitle'>Portfólio</h3>
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
                <img className='rightBar' src={image2} alt="" />
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