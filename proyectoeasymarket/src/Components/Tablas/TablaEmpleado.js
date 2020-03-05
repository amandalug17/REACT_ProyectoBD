import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaEmpleado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: {},
            id: '',
            empleados: []
        }
    }
    
    
    DeleteUser = (id) => {
        // eslint-disable-next-line no-restricted-globals
        var opcion = confirm("¿Estas seguro de que quieres deshabilitar? Esta acción no se puede deshacer");
        if (opcion == true) {
            const  empleado  = this.state.empleados.find(e =>e.id === id);
            console.log(empleado);
            const data = {
                'cedula': empleado.cedula,
                'nombre': empleado.nombre,
                'apellido': empleado.apellido,
                'fechaNaciemiento': empleado.fechaNacimiento,
                'telefono': empleado.telefono,
                'sucursalID': empleado.sucursalID.id,
                'activo': false
    
            }
            console.log(data)
            axios.put(`http://127.0.0.1:8000/empleados/${id}/`, data).then(res=> alert(`Ha desactivado con exito`));
            window.location.reload();
        } else {
            var mensaje = alert(`No se ha deshabilitado`);
        }
        
        
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/empleados/').then(res => this.setState({ clients: res.data })).catch(err => console.log(err))
        axios.get('http://127.0.0.1:8000/empleadosAuxiliar/').then(res => this.setState({ 
            ...this.state, empleados: res.data
        }));
    }

    render(){
        console.log(this.state.empleados)
        const empleados = this.state.empleados.map( empleado =>
            <tr id={empleado.id}>
            <th scope ='row'>{empleado.id}</th>
            <td>{empleado.cedula}</td>
            <td>{empleado.nombre}</td>
            <td>{empleado.apellido}</td>
            <td>{empleado.fechaNacimiento}</td>
            <td>{empleado.telefono}</td>
            <td>{empleado.sucursalID.nombre}</td>
            <td>{String(empleado.activo)}</td>
            <td><button className='btn btn-dark' size='sm' type='button' onClick={() => this.DeleteUser(empleado.id)}><i class="fa fa-trash-o"></i></button></td>
            </tr>
            )
            return(
                <div className = 'container'>
                    <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                          <h1>Empleados</h1>
                    </div>
                    <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                    <div className='col-md-10'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Cedula</th>
                                        <th scope='col'>Nombre</th>
                                        <th scope='col'>Apellido</th>
                                        <th scope='col'>fecha de Nacimiento</th>
                                        <th scope='col'>Telefono</th>
                                        <th scope='col'>Sucursal</th>
                                        <th scope='col'>Activo</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {empleados}
                                </tbody>
                            </table>
                            <Link to='/create/empleado' class='btn btn-dark'>AÑADIR EMPLEADO</Link>
                        </div>
                    </div>
                </div>
                </div>
                
            )
    }

}

export default TablaEmpleado;