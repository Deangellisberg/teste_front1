import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EsqueciSenha.css';

const TelaEsqueciSenha: React.FC = () => {
    const [senha, setSenha] = useState('');

    const handleCadastro = () => {
        console.log('Senha:', senha);
    };

    return (
        <div className="cadastro-container">
            <img src={require('../../assets/imgs/logo_ra.png')} alt="Logo" />
            <h1 className="h1Cadastro"> Redefinir a senha </h1>
            <p className="pCadastro"> insira email de login e enviaremos um link
                <br />
                para que você possa redefinir sua senha.</p>
            <form onSubmit={handleCadastro}>
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button className="BLogin" type="submit"><Link to="/login">Redefinir a senha</Link></button>
            </form>
        </div>

    );
};

export default TelaEsqueciSenha;