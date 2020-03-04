import React from "react";
 
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand" href="#">EasyMarket</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Inicio <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Clientes</a>
                    <a class="nav-item nav-link" href="#">Empleados</a>
                    <a class="nav-item nav-link" href="#">Productos</a>
                    <a class="nav-item nav-link" href="#">Sucursales</a>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
