import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo_ra.png';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="RA" />
          </Link>
        </div>
        <nav className="menu">
          <ul>
            <li><Link to="/fazerlogin" className='link-orange'>Seja um mentor</Link></li>
            <li><Link to="/" className='link'>Início</Link></li>
            <li><Link to="/agendar" className='link'>Agendar Mentoria</Link></li>
            <li><Link to="/fazerlogin"className='link'>Fazer Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
