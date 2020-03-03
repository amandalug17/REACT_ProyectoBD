import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaPago extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagos: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/pagos/').then(res => this.setState({ 
            ...this.state, pagos: res.data
        }));
    }

    render(){
        console.log(this.state.productos)
        const pagos = this.state.pagos.map( pago =>
            <tr id={pago.id}>
            <th scope ='row'>{pago.id}</th>
            <td>{pago.monto}</td>
            <td>{pago.instrumento}</td>
            <BrowserRouter>
            <td><button className='btn btn-dark'  size='sm' type='button'><Link to={`/edit/pago/${pago.id}`} className='text-white'> Editar </Link></button></td>
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
                                        <th scope='col'>Monto</th>
                                        <th scope='col'>Intrumento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pagos}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaPago;