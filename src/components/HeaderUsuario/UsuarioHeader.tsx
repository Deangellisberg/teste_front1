import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo_ra.png';
import './UsuarioHeader.css';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar a exibição do menu de opções

  // Função para alternar a exibição do menu de opções
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="RA" />
          </Link>
        </div>
        <nav className="menu-user">
          <ul>
            <li><Link to="/" className='link'>Início</Link></li>
            <li><Link to="/agendar" className='link'>Agendar Mentoria</Link></li>
          </ul>
        </nav>
        <div className="profile-icon" onClick={toggleMenu}>
          <img src={require('../../assets/imgs/user-icon.png')} alt="Perfil" className="user-photo" />
          {showMenu && (
            <ul className="profile-menu">
              <li><Link to="/perfil" className="link">Meu Perfil</Link></li>
              <li><Link to="/configuracoes" className="link">Configurações</Link></li>
              <li><Link to="/logout" className="link">Sair</Link></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
