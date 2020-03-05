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
import ProveedorForm from './Components/Forms/proveedor-form';
import TablaCiudad from './Components/Tablas/TablaCiudad';
import Footer from './Components/Footer';
import EditarCiudad from './Components/Forms_Edits/ciudad_edit';
import EditarCliente from './Components/Forms_Edits/cliente_edit';
import TablaMejoresProductos from './Components/Tablas/TablaMejoresProductos';
import TablaMejoresSucursales from './Components/Tablas/TablasMejoresSucursales';
import TablaMejoresEmpleados from './Components/Tablas/TablaMejoresEmpleados';
import TablaProveedor from './Components/Tablas/TablaProveedores';
import Section from './Components/Section';
import CategoriaForm from './Components/Forms/categoria-form';
import TipoForm  from './Components/Forms/tipo-suscripcion-form';



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
            <Route component={CajeroForm} path='/create/cajero'/>
            <Route component={GerenteForm} path='/create/gerente'/>
            <Route component={ProductoForm} path='/create/producto'/>
            <Route component={SuscripcionForm} path='/create/suscripcion'/>
            <Route component={TablaCiudad} path='/view/ciudades'/>
            <Route component={TablaMunicipio} path='/view/municipios'/>
            <Route component={TablaCliente} path='/view/clientes'/>
            <Route component={TablaEmpleado} path='/view/empleados'/>
            <Route component={TablaSucursal} path='/view/sucursales'/>
            <Route component={TablaSuscripcion} path='/view/suscripciones'/>
            <Route component={TablaVenta} path='/view/ventas'/>
            <Route component={TablaProducto} path='/view/productos'/>
            <Route component={TablaProveedor} path='/view/proveedores'/>
            <Route component={EditarCiudad} path='/edit/ciudad/:id'/>
            <Route component={EditarCliente} path='/edit/cliente/:id'/>
            <Route component={ProveedorForm} path='/create/proveedor'/>
            <Route component={TablaMejoresSucursales} path='/view/mejoresSucursales'/>
            <Route component={TablaMejoresProductos} path='/view/mejoresProductos'/>
            <Route component={TablaMejoresEmpleados} path='/view/mejoresEmpleados'/>
            <Route component={Section} path='/statistics'/>
            <Route component={CategoriaForm} path='/create/categoria'/>
            <Route component={TipoForm } path='/create/tipo'/>


            
           
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
