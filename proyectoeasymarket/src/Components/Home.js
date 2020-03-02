import React, { Component } from 'react'
import axios from 'axios'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ciudades : []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/ciudades/').then(res => this.setState({
            ...this.state, ciudades : res.data
        }));
    }



    


    render() {
        console.log(this.state.ciudades);
        const opcionesCiudad = this.state.ciudades.map(ciudad => 
            <tr id={ciudad.id}>
            <th scope='row'>{ciudad.id}</th>
            <td>{ciudad.nombre}</td>
            <td><button className='btn btn-primary'  size='sm' type='button'> EDITAR</button></td>
        </tr>
        );

        return (
            
                    <div className='justify-content-center row'>
                        <div className='col-md-6'>
                            <div className='card shadow mt--200'>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope='col'>ID</th>
                                            <th scope='col'>NOMBRE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {opcionesCiudad}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

            
        )
    }
}

export default Home
