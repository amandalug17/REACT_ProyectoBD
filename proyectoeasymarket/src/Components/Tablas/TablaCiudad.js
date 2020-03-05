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
            
            <td><Link to={`/edit/ciudad/${ciudad.id}`} className='btn btn-dark'  size='sm'> Editar </Link></td>
            
            </tr>
            )
            return(
                <div className = 'container'>
                    <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                        <h1>Ciudades</h1>
                    </div>
                    <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
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
                            <Link to='/create/ciudad' class='btn btn-dark'>AÑADIR CIUDAD</Link>
                        </div>
                    </div>
           
                    </div>
                </div>
                
            )
    }

}

export default TablaCiudad;
