import logo from './logo.svg';
import './index.css'
import './App.css';

import {Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Gallary from './Components/Gallary';


function App() {
  return (
    <div className="App">
   <Navbar/>
      <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='about'element={<About/>} />
      <Route path='menu'element={<Menu/>} />
      <Route path='gallary'element={<Gallary/>} />
   
 
      </Routes>
    
     
    </div>
  );
}

export default App;
