import React from 'react'
import './Input.css'

const Input = () => {
  return (
    <div className='formulario'>
        <h3 className='titleContact'>Entre em contato </h3>
    <form className='theFormulario'>
        <input className='input' type="text" name="nome" id="nome" placeholder='Nome' />
        <input className='input' type="text" id='email' name='email' placeholder='E-mail' />
        <input className='inputMessage' type="text" id='mensagem' name='mensagem' placeholder='Escreva sua mensagem...'/>
        <button className='inputButton' type='submit'>Enviar</button>
    </form>
    </div>
  )
}

export default Input