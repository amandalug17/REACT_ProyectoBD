import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class TablaMunicipio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            municipios: [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/municipioAuxiliar/').then(res => this.setState({ 
            ...this.state, municipios: res.data
        }));
    }

    render(){
        console.log(this.state.municipios)
        const municipios = this.state.municipios.map( municipio => 
            <tr id={municipio.id}>
            <th scope ='row'>{municipio.id}</th>
            <td>{municipio.nombre}</td>
            <td>{municipio.ciudadID.nombre}</td>
            </tr>
            )
            return(
                <div className = 'container'>
                <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                          <h1>Municipios</h1>
                 </div>
                 <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                    <div className='col-md-6'>
                        <div className='card shadow mt--200'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Nombre</th>
                                        <th scope='col'>Ciudad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {municipios}
                                </tbody>
                            </table>
                            <Link to='/create/municipio' class='btn btn-dark'>AÑADIR MUNICIPIO</Link>
                        </div>
                    </div>
                </div>
         </div>
                
            )
        
    }

}

export default TablaMunicipio;
