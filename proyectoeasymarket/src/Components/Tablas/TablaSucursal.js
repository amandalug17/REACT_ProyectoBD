import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaSucursal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: {},
            id: '',
            sucursales: []
            
            
        }
    }

    DeleteUser = (id) => {
        // eslint-disable-next-line no-restricted-globals
        var opcion = confirm("¿Estas seguro de que quieres deshabilitar? Esta acción no se puede deshacer");
        if (opcion == true) {
            const  s  = this.state.sucursales.find(e =>e.id === id);
            console.log(s);
            const data = {
                'nombre': s.nombre,
                'municipioID': s.municipioID.id,
                'activo': false
    
            }
            console.log(data)
            axios.put(`http://127.0.0.1:8000/sucursales/${id}/`, data).then(res=> alert(`Ha desactivado con exito`));
            window.location.reload();
        } else {
            var mensaje = alert(`No se ha deshabilitado`);
        }
        
        
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/empleados/').then(res => this.setState({ clients: res.data })).catch(err => console.log(err))
        axios.get('http://127.0.0.1:8000/sucursalAuxiliar/').then(res => this.setState({ 
            ...this.state, sucursales: res.data
        }));
    }

    render(){
        console.log(this.state.sucursales)
        const sucursales = this.state.sucursales.map( sucursal =>
            <tr id={sucursal.id}>
            <th scope ='row'>{sucursal.id}</th>
            <td>{sucursal.nombre}</td>
            <td>{sucursal.municipioID.ciudadID.nombre}</td>
            <td>{sucursal.municipioID.nombre}</td>
            <td>{String(sucursal.activo)}</td>
            <td><button className='btn btn-dark' size='sm' type='button' onClick={() => this.DeleteUser(sucursal.id)}><i class="fa fa-trash-o"></i></button></td>
            </tr>
            )
            return(
                <div className = 'container'>
                <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                          <h1>Sucursales</h1>
                 </div>
                 <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                    <div className='col-md-8'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Nombre</th>
                                        <th scope='col'>Ciudad</th>
                                        <th scope='col'>Municipio</th>
                                        <th scope='col'>Activo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sucursales}
                                </tbody>
                            </table>
                            <Link to='/create/sucursal' class='btn btn-dark'>AÑADIR SUCURSAL</Link>
                        </div>
                    </div>
                </div>
         </div>
               
            )
    }

}

export default TablaSucursal;