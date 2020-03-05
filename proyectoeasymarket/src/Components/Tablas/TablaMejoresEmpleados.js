import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaMejoresEmpleados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            empleados: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/mejoresEmpleados/').then(res => this.setState({ 
            ...this.state, empleados: res.data
        }));
    }

    render(){
        console.log(this.state.empleados)
        const empleados = this.state.empleados.map( empleado =>
            <tr id={empleado.id}>
            <td>{empleado.empleadoNombre + ' ' + empleado.empleadoApellido}</td>
            <td>{empleado.Ventas}</td>
            <td>{empleado.sucursalID.nombre}</td>
            </tr>
            )
            return(
                <>
                <div className = 'container'>
               <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                         <h1>Empleados con mayor numero de ventas</h1>
                </div>
                <div className='justify-content-center row' style={{marginTop:'20px',  marginBottom:'20px'}}>
                    <div className='col-md-12'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>Empleado</th>
                                        <th scope='col'>Número de ventas</th>
                                        <th scope='col'>Sucursal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {empleados}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
               </>
                
            )
    }

}

export default TablaMejoresEmpleados;