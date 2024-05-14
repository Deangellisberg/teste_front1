import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import MentorPage from './pages/AgendarMentor/AgendarMentor';
import TelacPage from './pages/TelaCadastroEmail/CadastroEmail';
import LoginPage from './pages/TelaLogin/Login';
import RegistrasePage from './pages/TelaRegistrase/Registrase';
import EsqueciSenhaPage from './pages/TelaEsqueciSenha/EsqueciSenha';
import UsuarioPage from './pages/TelaUsuario/Usuario';



const App: React.FC = ()=> {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" Component={MentorPage} />
        <Route path="/fazerlogin" Component={TelacPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/registra-se" Component={RegistrasePage} />
        <Route path="/esquecisenha" Component={EsqueciSenhaPage} />
        <Route path="/usuario" Component={UsuarioPage} />
        </Routes>
    </Router>
      );
    }
export default App;
