import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/NavBar';
import Rodape from './components/navbar/rodape';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar 
    item0 = {"nome"}
    item1 = {"contato"}
    item2 = {"sobre mim"}
    item3 = {"Projetos"}
    item4 = {"fnuanf"}
    />
  <Rodape
  titulo1 = {"Meu site"}
  item1 = {"Instagram"}
  item2 = {"Item 2"}
  item3 = {"Item 3"}
  
  titulo2={"Título 2"}
  item4={"Item 4"}
  item5={"Item 5"}
  
  />
  <Rodape
  titulo1 = {"Meu site"}
  item1 = {"Instagram"}
  item2 = {"Item 2"}
  
  titulo2={"Título 2"}
  item4={"Item 4"}
  
  />
  
    
  </React.StrictMode>
);

reportWebVitals();