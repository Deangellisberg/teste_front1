import React from "react";
import { Link } from 'react-router-dom';
import './CadastroEmail.css';

const Cadastro: React.FC = () => {
    return (
        <div className="cadastro-container">
            <img src={require('../../assets/imgs/logo_ra.png')} alt="Logo" />
            <h1 className="h1Cadastro"> Registre-se </h1>
            <p className="pCadastro"> Já é membro? <Link to="/login"> Login </Link></p>
            <div className="Botoes-container">

                <Link to="/Registra-se" className="botaoCadastro" >
                    Registre-se como Usuário
                </Link>

                <Link to="/Registra-se" className="botaoCadastro" >
                    Registre-se como Instituição de Ensino
                </Link>

                <Link to="/Registra-se" className="botaoCadastro" >
                    Registre-se como Mentor
                </Link>

            </div>
        </div>
    );
};

export default Cadastro;