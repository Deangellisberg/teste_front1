import React from "react";
import HeaderUsuario from '../../components/HeaderUsuario/UsuarioHeader';
import Usuario from '../../components/TelaUsuario/Usuario';
import Footer from '../../components/Footer/Footer';

const UsuarioPage: React.FC = () => {
    return (
        <div>
            <HeaderUsuario />
            <Usuario />
            <Footer />
        </div>
    )
}

export default UsuarioPage;