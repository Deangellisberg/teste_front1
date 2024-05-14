import React from 'react';
import imagem from '../../assets/imgs/imagem_site.png';
import img1 from '../../assets/imgs/icone1.png';
import img2 from '../../assets/imgs/icone2.png';
import img3 from '../../assets/imgs/icone3.png';
import img4 from '../../assets/imgs/icone4.png';
import './Usuario.css';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className="container">
      <div className="texto1">
        <h1>Olá! Somos
          <br />
          O Reconstruindo Atitudes.</h1>
        <br />
        <p>Uma plataforma de mentoria que conecta quem já <br />superou situações lamentavelmente maldosas e desumanas e quer <br />
          compartilhar com os agressores para uma mudança mais humanizada</p>
      </div>
      <div className="imagem">
        <img src={imagem} alt="fundo" />
      </div>

      <div className="secao-inferior">
        <h1 className='texto-meio'>
          Nosso Próposito é qualificar pessoas agressoras, <br />
          dando suporte, orientação, inspiração e coragem.</h1>
      </div>
      <div className="conteudo-textual">
        <div>
          <h2 className='tituloM'>Os Mentores</h2>
          <p className='tituloM'>A bagagem, a sabedoria e experiência que cada um carrega. <br />
            A disposição para compartilhar, transformar agressores e mudar a sociedade. <br />
            Tenha sempre os melhores à sua disposição.</p>
        </div>
      </div>
      <div className="conteudo-textual">
        <div>
          <h2 className='tituloM'>O Método</h2>
          <p className='tituloM'>Queremos que você aprenda a ver quais opções você tem de uma forma estruturada. <br />
            Aprenda a decidir qual é a melhor opção para a sua mudança pessoal e desenvolvimento.</p>
        </div>
      </div>

      <div className="secao-inferior">
        <h1 className='texto-meio'>
          Leve sua questão para tratar, em tempo real com seu mentor.<br />
          <br />
          <h5>Por onde você deseja começar?</h5></h1>
      </div>

      <div className="botoes-user">

      <Link to="/agendar" className="botaoMain" >
          Conheça nos Mentores
        </Link>

        <Link to="/fazerlogin" className="botaoMain" >
          Realizar Anamnese
        </Link>

        <Link to="/agendar" className="botaoMain">
          Agende sua sessão de Mentoria
        </Link>

      </div>

      <div className="secao-inferior">
        <h1 className='texto-meio'>
          Roteiro para você ter sua orientação e aconselhamento
        </h1>
      </div>

      <div className="imagens">
        <div className="bloco">
          <img src={img1} alt="imagem1" style={{ width: '150px' }} />
          <p>CONHEÇA AS SUAS OPÇÕES:
            <br />
            clique em 'Mentores' no menu do site <br />e conheça nosso portfólio de profissionais.</p>
        </div>
        <div className="bloco">
          <img src={img2} alt="imagem2" />
          <p>Realize sua anamnese.</p>
        </div>
        <div className="bloco">
          <img src={img3} alt="imagem3" />
          <p>Realize sua proposta de agendamento.</p>
        </div>
        <div className="bloco">
          <img src={img4} alt="imagem4" />
          <p>Realize sua mentoria.</p>
        </div>
      </div>
    </div>

  );
}

export default Main;
