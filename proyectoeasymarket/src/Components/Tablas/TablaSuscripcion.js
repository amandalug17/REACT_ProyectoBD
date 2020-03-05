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

    DeleteUser = (id) => {
        // eslint-disable-next-line no-restricted-globals
        var opcion = confirm("¿Estas seguro de que quieres deshabilitar? Esta acción no se puede deshacer");
        if (opcion == true) {
            const  s  = this.state.suscripciones.find(e =>e.id === id);
            console.log(s);
            const data = {
                'clienteID': s.clienteID.id,
                'fechaSuscripcion': s.fechaSuscripcion,
                'tipoID': s.tipoID.id,
                'activo': false
    
            }
            console.log(data)
            axios.put(`http://127.0.0.1:8000/suscripciones/${id}/`, data).then(res=> alert(`Ha desactivado con exito`)).then(res=> window.location.reload());
           
        } else {
            var mensaje = alert(`No se ha deshabilitado`);
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
            <td><button className='btn btn-dark' size='sm' type='button' onClick={() => this.DeleteUser(suscripcion.id)}><i class="fa fa-trash-o"></i></button></td>
            </tr>
            )
            return(
                <div className = 'container'>
                <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>    
                         <h1>Suscripciones</h1>
                 </div>
                 <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
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
                            <Link to='/create/suscripcion' class='btn btn-dark'>AÑADIR SUSCRIPTOR</Link>
                            
                         
                        </div>
                    </div>
                </div>
         </div>
               
            )
    }

}

export default TablaSuscripcion;