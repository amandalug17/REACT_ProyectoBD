import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaHistorico extends Component {
    constructor(props) {
        super(props)
        this.state = {
            historicos: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/historico/').then(res => this.setState({ 
            ...this.state, historicos: res.data
        }));
    }

    render(){
        console.log(this.state.historicos)
        const historicos = this.state.historicos.map( historico =>
            <tr id={historico.id}>
            <td>{historico.producto}</td>
            <td>{historico.precio + ' Bs'}</td>
            </tr>
            )
            return(
                <div className = 'container'>
                    <div className='justify-content-center row' style={{marginTop:'20px'}}>
                            <h1>Histórico de Precios</h1>
                    </div>

                    <div className='justify-content-center row' style={{marginTop:'20px'}}>
                    <div className='col-md-6'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>Producto</th>
                                        <th scope='col'>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historicos}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                </div>

            )
    }

}

export default TablaHistorico;