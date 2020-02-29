import React, { Component } from 'react'
import Axios from 'axios'

export class SuscripcionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direccion: {},
        }
        
    }
    /**
     * componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/users/').then(res => this.setState({ direccion: res.data })).catch(err => console.log(err))
    }
     */
    
    render(){
        const direccion = this.state.direccion
        return(
            
            <>
            

            <div className = "col-md-6 offset-md-3">
                <span className = "anchor" id = "formContact"></span>
                <hr className = "my-5"></hr>
            </div>
            <div className= "card card-outilinr-secondary">
                <div className= "card-header">
                    <h3 class="mb-0">Suscripcion</h3>
                </div>
            </div>
            <div className= "card-body">
                <form className ="form" autoComplete= "off" method="post">
                    <div className = "form-row">
                        
                        <div className = "col-md-6 mb-3">
                            <div className= "form-group">
                                <label for= "cliente" className = "mb-0">Cliente</label>
                                <select class="custom-select" required>
                                     <option value="">Dirección</option>
                                     <option value="1">One</option>
                                     <option value="2">Two</option>
                                     <option value="3">Three</option>
                                 </select>
                                <div class="invalid-feedback">Seleccione un campo</div>
                            </div>
                        </div>
                        <div className = "col-md-6 mb-3">
                            <div className= "form-group">
                                <label for= "tipo" className = "mb-0">Tipo de Suscripcion</label>
                                <select class="custom-select" required>
                                     <option value="">Dirección</option>
                                     <option value="1">One</option>
                                     <option value="2">Two</option>
                                     <option value="3">Three</option>
                                 </select>
                                <div class="invalid-feedback">Seleccione un campo</div>
                            </div>
                        </div>
                        <div className = "col-md-6 mb-3">
                            <div className= "form-group">
                                <label for= "fechaSuscripcion" className = "mb-0">Fecha Suscripcion</label>
                                <input type="date" name="fechaSuscripcion" id="fechaSuscripcion" className="form-control" required/>
                            </div>
                            <div class="invalid-feedback">
                                Por favor introduzca un valor
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    
                    
                </form>
            </div>
        
            </>
        );

    }
}

export default SuscripcionForm;