import React from 'react';
import './App.css';
import CiudadForm from './Components/Forms/ciudad-form';
import MunicipioForm from './Components/Forms/municipio-form';
import DireccionForm from './Components/Forms/direccion-form';
import ClienteForm from './Components/Forms/clientes-form';
import SucursalForm from './Components/Forms/sucursal-form';


function App() {
  return (
    <div>
      <MunicipioForm/>
      <CiudadForm/>
      <DireccionForm/>
      <ClienteForm/>
      <SucursalForm/>
    </div>
  );
}

export default App;
