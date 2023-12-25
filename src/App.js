// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { AboutUs } from './Components/AboutUs';
import { Header } from './Components/Header';
import { TextArea } from './Components/TextArea';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

const toggleMode = ()=> {
  if(mode === "light"){
    setMode ('dark');
    document.body.style.backgroundColor = '#0f1650';
  }
  else{
    setMode ('light')
    document.body.style.backgroundColor = 'white';
  }
}

  return (
    <>
    <BrowserRouter>
    <Header mode={mode} toggleMode = {toggleMode}/>
      <Routes>
        <Route exact path="/" element={<TextArea heading = "Enter your Text Here" mode={mode }/>} />
        <Route exact path="/AboutUs/" element={<AboutUs mode={mode}/> }  />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
