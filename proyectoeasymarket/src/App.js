import React from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import CiudadForm from './Components/Forms/ciudad-form';
import MunicipioForm from './Components/Forms/municipio-form';
import ClienteForm from './Components/Forms/clientes-form';
import SucursalForm from './Components/Forms/sucursal-form';
import EmpleadoForm from './Components/Forms/empleado-form';
import GerenteForm from './Components/Forms/gerente-form';
import CajeroForm from './Components/Forms/cajero-form';
import SuscripcionForm from './Components/Forms/suscripcion-form';
import ProductoForm from './Components/Forms/producto-form';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TablaMunicipio from './Components/Tablas/TablaMunicipio';
import TablaSucursal from './Components/Tablas/TablaSucursal';
import TablaProducto from './Components/Tablas/TablaProducto';
import TablaCliente from './Components/Tablas/TablaCliente';
import { TablaSuscripcion } from './Components/Tablas/TablaSuscripcion';
import TablaEmpleado from './Components/Tablas/TablaEmpleado';
import TablaVenta from './Components/Tablas/TablaVenta';
import TablaPago from './Components/Tablas/TablaPago';
import TablaCiudad from './Components/Tablas/TablaCiudad';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
      <div className= 'container'>

      </div>
      <div className = 'row'>
        <div className= 'col'>
              <Navbar/>
        </div>
      </div>
      <div className = 'row'>
        <div className= 'col'>
          <Hero/>
        </div>
      </div>
      <div className = 'row'>
        <div className= 'col'>
     
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route component={CiudadForm} path='/create/ciudad'/>
            <Route component={MunicipioForm} path='/create/municipio'/>
            <Route component={ClienteForm} path='/create/cliente'/>
            <Route component={SucursalForm} path='/create/sucursal'/>
            <Route component={EmpleadoForm} path='/create/empleado'/>
            <Route component={TablaCiudad} path='/view/ciudades'/>
            <Route component={TablaMunicipio} path='/view/municipios'/>
            
          </Switch>
        
        </div>
      </div>
      <div className = 'row'>
        <div className= 'col'>
          <Footer/>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
