import React from 'react';
import './App.css';
import CiudadForm from './Components/Forms/ciudad-form';
import MunicipioForm from './Components/Forms/municipio-form';
import DireccionForm from './Components/Forms/direccion-form';
import ClienteForm from './Components/Forms/clientes-form';
import SucursalForm from './Components/Forms/sucursal-form';
import EmpleadoForm from './Components/Forms/empleado-form';
import GerenteForm from './Components/Forms/gerente-form';
import CajeroForm from './Components/Forms/cajero-form';
import SuscripcionForm from './Components/Forms/suscripcion-form';
import ProductoForm from './Components/Forms/producto-form';


function App() {
  return (
    <div>
      
      <MunicipioForm/>
      <CiudadForm/>
      <DireccionForm/>
      <ClienteForm/>
      <SucursalForm/>
      <EmpleadoForm/>
      <GerenteForm/>
      <CajeroForm/>
      <SuscripcionForm/>
      <ProductoForm/>
    </div>
  );
}

export default App;
