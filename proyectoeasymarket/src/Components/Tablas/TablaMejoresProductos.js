import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaMejoresProductos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productos: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/mejoresProductos/').then(res => this.setState({ 
            ...this.state, productos: res.data
        }));
    }

    render(){
        console.log(this.state.productos)
        const productos = this.state.productos.map( producto =>
            <tr id={producto.id}>
            <th scope ='row'>{producto.id}</th>
            <td>{producto.producto}</td>
            <td>{producto.ventas}</td>
            </tr>
            )
            return(
                <div className='justify-content-center row' style={{marginTop:'20px'}}>
                    <div className='col-md-4'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Producto</th>
                                        <th scope='col'>Número de ventas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaMejoresProductos;