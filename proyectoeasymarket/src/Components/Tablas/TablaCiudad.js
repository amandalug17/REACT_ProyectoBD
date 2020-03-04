import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaCiudad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ciudades: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/ciudades/').then(res => this.setState({ 
            ...this.state, ciudades: res.data
        }));
    }

    render(){
        console.log(this.state.ciudades)
        const ciudades = this.state.ciudades.map( ciudad =>
            <tr id={ciudad.id}>
            <th scope ='row'>{ciudad.id}</th>
            <td>{ciudad.nombre}</td>
            <BrowserRouter>
            <td><button className='btn btn-dark'  size='sm' type='button'><Link to={`/edit/ciudad/${ciudad.id}`} className='text-white'> Editar </Link></button></td>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {ciudades}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }

}

export default TablaCiudad;
