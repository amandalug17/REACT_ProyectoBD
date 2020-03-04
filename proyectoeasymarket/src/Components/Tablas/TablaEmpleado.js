import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaEmpleado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            empleados: []
        }
    }

    componentDidMount() {
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
            <BrowserRouter>
            <td><button className='btn btn-dark'  size='sm' type='button'><Link to={`/edit/empleado/${empleado.id}`} className='text-white'> Editar </Link></button></td>
            </BrowserRouter>
            </tr>
            )
            return(
                <div className='justify-content-center row' style={{marginTop:'20px'}}>
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
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaEmpleado;