import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaFuncion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            funciones: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/funcion/').then(res => this.setState({ 
            ...this.state, funciones: res.data
        }));
    }

    render(){
        console.log(this.state.funciones)
        const funciones = this.state.funciones.map( funcion =>
            <tr id={funcion.id}>
            <td>{funcion.nombre}</td>
            <td>{funcion.categoriaID.nombre}</td>
            <td>{funcion.precio + ' Bs'}</td>
            </tr>
            )
            return(
                <>
                <div className = 'container'>
                    <div className='justify-content-center row' style={{marginTop:'20px',  marginBottom:'20px'}}>
                            <h1>Catálogo actual de productos</h1>
                    </div>

                    <div className='justify-content-center row' style={{marginTop:'20px',  marginBottom:'20px'}}>
                    <div className='col-md-12'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>Producto</th>
                                        <th scope='col'>Categoria</th>
                                        <th scope='col'>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {funciones}
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

export default TablaFuncion;