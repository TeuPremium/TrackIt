import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Routes/Login';
import ReactGlobalStyle from 'react-global-style';
import GlobalStyle from './Styles/GlobalStyle'
import Cadastro from './Components/Routes/Cadastro';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>

    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
