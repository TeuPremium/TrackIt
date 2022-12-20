import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Routes/Login';
import ReactGlobalStyle from 'react-global-style';
import GlobalStyle from './Styles/GlobalStyle'
import Habitos from './Components/Routes/HabitoAssets/Habitos';
import Hoje from './Components/Routes/HojeAssets/Hoje';
import Historico from './Components/Routes/HistoricoAssets/Historico';
import Cadastro from './Components/Routes/Cadastro';
import AuthContext from './Components/Contexts/AuthContext';
import { useState } from 'react';
import UserContext from './Components/Contexts/UserContext';
import CardsContext from './Components/Contexts/AuthContext copy';

function App() {
  const [token, setToken] = useState()
  const loggedUser = []
  const [user, setUser] = useState()
  const [cards, setCards] = useState()


  

  return (
  <AuthContext.Provider value={{token, setToken}}>
  <UserContext.Provider value={{user, setUser}}>
  <CardsContext.Provider value={{cards, setCards}}>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
          
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/habitos' element={<Habitos/>}/>
            <Route path='/hoje' element={<Hoje/>}/>
            <Route path='/historico' element={<Historico/>}/>

      </Routes>
    </BrowserRouter>
  </CardsContext.Provider>
  </UserContext.Provider>
  </AuthContext.Provider>
  );
}

export default App;
