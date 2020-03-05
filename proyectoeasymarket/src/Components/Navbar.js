import React from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark justify-content-between">
            <Link to='/' class="navbar-brand">EasyMarket</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to='/' class="nav-item nav-link active" >Inicio <span class="sr-only">(current)</span></Link>
                    <Link to='/view/clientes' class="nav-item nav-link">Clientes</Link>
                    <Link to='/view/ciudades' class="nav-item nav-link">Ciudades</Link>
                    <Link to='/view/empleados' class="nav-item nav-link">Empleados</Link>
                    <Link to='/view/municipios' class="nav-item nav-link">Municipios</Link>
                    <Link to='/view/productos' class="nav-item nav-link">Productos</Link>
                    <Link to='/view/sucursales' class="nav-item nav-link">Sucursales</Link>
                    <Link to='/view/suscripciones' class="nav-item nav-link">Suscripciones</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
