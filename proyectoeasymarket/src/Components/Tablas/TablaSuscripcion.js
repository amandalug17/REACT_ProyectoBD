import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaSuscripcion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suscripciones: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/suscripcionAuxiliar/').then(res => this.setState({ 
            ...this.state, suscripciones: res.data
        }));
    }

    render(){
        console.log(this.state.suscripciones)
        const suscripciones = this.state.suscripciones.map( suscripcion =>
            <tr id={suscripcion.id}>
            <th scope ='row'>{suscripcion.id}</th>
            <td>{suscripcion.clienteID.nombre + ' ' + suscripcion.clienteID.apellido}</td>
            <td>{suscripcion.fechaSuscripcion}</td>
            <td>{suscripcion.tipoID.nombre}</td>
            <td>{String(suscripcion.activo)}</td>
            <BrowserRouter>
            <td><button className='btn btn-dark'  size='sm' type='button'><Link to={`/edit/suscripcion/${suscripcion.id}`} className='text-white'> Editar </Link></button></td>
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
                                        <th scope='col'>Cliente</th>
                                        <th scope='col'>Fecha de suscripcion</th>
                                        <th scope='col'>Tipo de Suscripcion</th>
                                        <th scope='col'>Activo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suscripciones}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaSuscripcion;