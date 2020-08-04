import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
        <header>
          <img src="https://avatars2.githubusercontent.com/u/897260?s=460&v=4" alt="Padu Develop Fullstack"/>
          <div>
            <strong>Padu Develop Fullstack</strong>
            <span>Química</span>
          </div>
        </header>
        <p>
          Entusiasta nas melhores tecnologias de química avançada.
          <br/> <br/>
          Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiêcias.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 100,00</strong>
          </p>
          <button type='button'>
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
          </button>
        </footer>
      </article>
  )
}

export default TeacherItem;