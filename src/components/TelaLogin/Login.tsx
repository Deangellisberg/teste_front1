import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const TelaLogin: React.FC = () => {
  const [email, SetEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="cadastro-container">
      <img src={require('../../assets/imgs/logo_ra.png')} alt="Logo" />
      <h1 className="h1Cadastro"> Login </h1>
      <p className="pCadastro"> Novo nesse Site? <Link to="/fazerlogin">Registre-se</Link></p>
      <form onSubmit={handleLogin}>
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
        <div className='p-login'>
          <p><Link to="/esquecisenha">Esqueceu a senha?</Link></p>
        </div>
        <div className='login-options'>
          <p>Login IES</p>
          <p>Login Mentor</p>
        </div>

        <Link to="/usuario" className="BLogin" type="submit">
          Fazer Login
        </Link>

      </form>
    </div>

  );
};

export default TelaLogin;