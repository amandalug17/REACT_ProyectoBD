import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaCliente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientes: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/clientes/').then(res => this.setState({ 
            ...this.state, clientes: res.data
        }));
    }

    render(){
        console.log(this.state.clientes)
        const clientes = this.state.clientes.map( cliente =>
            <tr id={cliente.id}>
            <th scope ='row'>{cliente.id}</th>
            <td>{cliente.cedula}</td>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.telefono}</td>
            <BrowserRouter>
            <td><button className='btn btn-dark'  size='sm' type='button'><Link to={`/edit/cliente/${cliente.id}`} className='text-white'> Editar </Link></button></td>
            </BrowserRouter>
            </tr>
            )
            return(
                <div className='justify-content-center row' style={{marginTop:'20px'}}>
                    <div className='col-md-8'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Cedula</th>
                                        <th scope='col'>Nombre</th>
                                        <th scope='col'>Apellido</th>
                                        <th scope='col'>Telefono</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaCliente;