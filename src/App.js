import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Routes/Login';
import ReactGlobalStyle from 'react-global-style';
import GlobalStyle from './Styles/GlobalStyle'
import Cadastro from './Components/Routes/Cadastro';
import Habitos from './Components/Routes/Habitos';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='habitos' element={<Habitos/>}/>

    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
