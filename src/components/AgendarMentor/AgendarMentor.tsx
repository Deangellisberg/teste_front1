// MentorPage.js
import React from 'react';
import mentorImagem from '../../assets/imgs/imgmentor.png';
import './AgendarMentor.css';
const Mentor: React.FC = () => {
  return (
    <div className="mentor-container">
      <h2>Nossos Mentores</h2>
      <div className='mentor-card'>
        <img src={mentorImagem} alt="Mentor" />
        <div className='mentor-info'>
          <p>Como mentor, compartilho minhas experiências e conhecimentos sobre o cyberbullying, destacando a importância do respeito online, da empatia e do cuidado com as palavras e ações virtuais.
            <br />
            <br />
            Eu os oriento sobre como reconhecer sinais de cyberbullying, como lidar com mensagens ou posts ofensivos e como buscar ajuda quando necessário.</p>
          <div className="botãoMentor">
            <button className="botãoM">Dias Oferecido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
