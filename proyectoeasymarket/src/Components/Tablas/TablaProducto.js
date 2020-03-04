import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaProducto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productos: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/productosAuxiliar/').then(res => this.setState({ 
            ...this.state, productos: res.data
        }));
    }

    render(){
        console.log(this.state.productos)
        const productos = this.state.productos.map( producto =>
            <tr id={producto.id}>
            <th scope ='row'>{producto.id}</th>
            <td>{producto.nombre}</td>
            <td>{producto.categoriaID.nombre}</td>
            <BrowserRouter>
            <td><button className='btn btn-dark'  size='sm' type='button'><Link to={`/edit/producto/${producto.id}`} className='text-white'> Editar </Link></button></td>
            </BrowserRouter>
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
                                        <th scope='col'>Categoria</th>
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

export default TablaProducto;