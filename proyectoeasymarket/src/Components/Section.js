import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';


export class Section extends Component{
  render() {
    return (
      <>
      <div>
        <div  className = "section-image">
        <div className= "hero-text">
          <h1 >Estadisticas</h1>
        </div> 
      </div>
      </div> 
      <div >
          
            <div className='query1'>
            <Link to='/view/mejoresSucursales' className="hero-text"><h1>Sucursales con mayores ventas</h1></Link>
            </div>
        
      </div>     
      <div >
          
            <div className='query2'>
            <Link to='/view/mejoresProductos' className="hero-text"><h1>Productos con mayores ventas</h1></Link>
            </div>
        
      </div>  
      
      <div >
          
            <div className='query3'>
            <Link to='/view/mejoresEmpleados' className="hero-text"><h1>Empleados con mejores ventas</h1></Link>
            </div>
        
      </div> 
      <div >
          
            <div className='query1'>
            <Link to='/view/mejoresEmpleados' className="hero-text"><h1 >Catálogo de Productos</h1></Link>
            </div>
        
      </div> 
      </>
      )
    }
}

export default Section;
