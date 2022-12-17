import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/CommonAssets/Login';
import ReactGlobalStyle from 'react-global-style';
import GlobalStyle from './Styles/GlobalStyle'

function App() {
  return (
  <BrowserRouter>
    <Routes>
        
          <Route path='/' element={<Login/>}/>

    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
