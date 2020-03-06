import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaVenta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ventas: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/ventaAuxiliar/').then(res => this.setState({ 
            ...this.state, ventas: res.data
        }));
    }

    render(){
        console.log(this.state.ventas)
        const ventas = this.state.ventas.map( venta =>
            <tr id={venta.id}>
            <th scope ='row'>{venta.id}</th>
            <td>{venta.fechaVenta}</td>
            <td>{venta.clienteID.nombre + ' ' + venta.clienteID.apellido}</td>
            <td>{venta.empleadoID.nombre + ' ' + venta.empleadoID.apellido}</td>
            
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
                                        <th scope='col'>Fecha de la venta</th>
                                        <th scope='col'>Cliente</th>
                                        <th scope='col'>Empleado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaVenta;