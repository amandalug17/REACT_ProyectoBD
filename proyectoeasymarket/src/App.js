import React from 'react';
import './App.css';
import CiudadForm from './Components/Forms/ciudad-form';
import MunicipioForm from './Components/Forms/municipio-form';
import DireccionForm from './Components/Forms/direccion-form';


function App() {
  return (
    <div>
      <MunicipioForm/>
      <CiudadForm/>
      <DireccionForm/>
    </div>
  );
}

export default App;
