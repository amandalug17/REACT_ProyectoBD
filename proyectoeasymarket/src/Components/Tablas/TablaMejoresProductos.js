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
            <td>{producto.producto}</td>
            <td>{producto.ventas}</td>
            </tr>
            )
            return(
                <>
                <div className = 'container'>
               <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                         <h1>Productos con mejores ventas</h1>
                </div>
                <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                    <div className='col-md-12'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
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
                </div>
               </>
               
                
            )
    }

}

export default TablaMejoresProductos;