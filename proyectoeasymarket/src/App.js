import React from 'react';
import './App.css';
import TablaMunicipio from './Components/Tablas/TablaMunicipio';
import TablaSucursal from './Components/Tablas/TablaSucursal';
import TablaProducto from './Components/Tablas/TablaProducto';
import TablaCliente from './Components/Tablas/TablaCliente';
import { TablaSuscripcion } from './Components/Tablas/TablaSuscripcion';
import TablaEmpleado from './Components/Tablas/TablaEmpleado';
import TablaVenta from './Components/Tablas/TablaVenta';
import TablaPago from './Components/Tablas/TablaPago';
import TablaMejoresProductos from './Components/Tablas/TablaMejoresProductos';

import TablaMejoresEmpleados from './Components/Tablas/TablaMejoresEmpleados';
import TablaProveedor from './Components/Tablas/TablaProveedores';
import TablaHistorico from './Components/Tablas/TablaHistorico';

function App() {
  return (
    <div>
        <TablaHistorico />
    </div>
  );
}

export default App;
