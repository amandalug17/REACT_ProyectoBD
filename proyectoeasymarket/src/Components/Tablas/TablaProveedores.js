import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaProveedor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            proveedores: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/proveedorAuxiliar/').then(res => this.setState({ 
            ...this.state, proveedores: res.data
        }));
    }

    render(){
        console.log(this.state.proveedores)
        const proveedores = this.state.proveedores.map( proveedor =>
            <tr id={proveedor.id}>
            <th scope ='row'>{proveedor.id}</th>
            <td>{proveedor.nombre}</td>
            <td>{proveedor.telefono}</td>
            <td>{proveedor.ciudadID.nombre}</td>
            <td>{String(proveedor.activo)}</td>
            </tr>
            )
            return(
                <div className='justify-content-center row' style={{marginTop:'20px'}}>
                    <div className='col-md-6'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Nombre</th>
                                        <th scope='col'>Telefono</th>
                                        <th scope='col'>Ciudad</th>
                                        <th scope='col'>Activo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proveedores}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaProveedor;