import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registrase.css';

const TelaRegistrase: React.FC = () => {
  const [nome, SetNome] = useState('');
  const [email, SetEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="cadastro-container">
      <img src={require('../../assets/imgs/logo_ra.png')} alt="Logo" />
      <h1 className="h1Cadastro"> Registra-se </h1>
      <p className="pCadastro"> Já é membro? <Link to="/login"> Login </Link></p>
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => SetNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
       <Link to="/login" className="BLogin" type="submit">
          Registra-se
        </Link>
      </form>
    </div>
  );
};

export default TelaRegistrase;