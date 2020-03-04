import React from 'react';
import './App.css';
import CiudadForm from './Components/Forms/ciudad-form';
import MunicipioForm from './Components/Forms/municipio-form';
import ClienteForm from './Components/Forms/clientes-form';
import SucursalForm from './Components/Forms/sucursal-form';
import EmpleadoForm from './Components/Forms/empleado-form';
import GerenteForm from './Components/Forms/gerente-form';
import CajeroForm from './Components/Forms/cajero-form';
import SuscripcionForm from './Components/Forms/suscripcion-form';
import ProductoForm from './Components/Forms/producto-form';
import Modals from './Components/Modals';


import TablaMunicipio from './Components/Tablas/TablaMunicipio';
import TablaSucursal from './Components/Tablas/TablaSucursal';
import TablaProducto from './Components/Tablas/TablaProducto';
import TablaCliente from './Components/Tablas/TablaCliente';
import { TablaSuscripcion } from './Components/Tablas/TablaSuscripcion';
import TablaEmpleado from './Components/Tablas/TablaEmpleado';
import TablaVenta from './Components/Tablas/TablaVenta';
import TablaPago from './Components/Tablas/TablaPago';

function App() {
  return (
    <div>
      <Modals/>
      <ProductoForm/>
    </div>
  );
}

export default App;
