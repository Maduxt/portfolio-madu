import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import './header.css'
import Logo from '../../fragments/Logo/logo'
import Button from '../../fragments/ButtonTheme/button'
import {motion} from 'framer-motion'
import {HiBars3} from 'react-icons/hi2'
import { HeaderMenu } from '../Data/Data'
import { PiSignOutLight } from "react-icons/pi"

const Header = () => {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  return (
    <>
    
    <motion.div className='navbar'
    variants={sidebarVariants}
    animate={window.innerWidth<=480?`${expanded}`:''}
    >

    <div className='logo'>
        <Logo />
    </div>


        <div className='menu'>
              {HeaderMenu.map((item, index)=>{
                return(
                  <div className={selected===index?'menuItem active': 'menuItem'}
                  key={index}
                  onClick={()=>setSelected(index)}>

                    {item.heading}

                  </div>
                )
              })}

          <Button />

          <div className="menuItem">
                <PiSignOutLight />
            </div>

        </div>

    </motion.div>

    <div className='bars'
      style={expanded? {top: '50%'}:{top: '50%'}}
      onClick={()=>setExpanded(!expanded)}
      >
      <HiBars3 />
    </div>

    </>
  )
}

export default Header