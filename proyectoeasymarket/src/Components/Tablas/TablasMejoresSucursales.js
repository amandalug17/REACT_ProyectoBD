import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaMejoresSucursales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sucursales: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/mejoresSucursales/').then(res => this.setState({ 
            ...this.state, sucursales: res.data
        }));
    }

    render(){
        console.log(this.state.sucursales)
        const sucursales = this.state.sucursales.map( sucursal =>
            <tr id={sucursal.id}>
            <td>{sucursal.sucursalID.nombre}</td>
            <td>{sucursal.ventas}</td>
            </tr>
            )
            return(
                <div className='justify-content-center row' style={{marginTop:'20px'}}>
                    <div className='col-md-4'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>Sucursal</th>
                                        <th scope='col'>Total de ventas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sucursales}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaMejoresSucursales;