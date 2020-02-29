import React, { Component } from 'react'
import Axios from 'axios'

export class SucursalForm extends Component {
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
                    <h3 class="mb-0">Sucursal</h3>
                </div>
            </div>
            <div className= "card-body">
                <form className ="form" autoComplete= "off" method="post">
                    <div className = "form-row">
                        <div className = "col-md-6 mb-3">
                            <div className= "form-group">
                                <label for= "nombre" className = "mb-0">Nombre</label>
                                 <input type="text" name="nombre" id="nombre" className="form-control" required />
                            </div>
                            <div class="invalid-feedback">
                                Por favor introduzca un valor
                            </div>
                        </div>
                        <div className = "col-md-6 mb-3">
                            <div className= "form-group">
                                <label for= "direccion" className = "mb-0">Dirección</label>
                                <select class="custom-select" required>
                                     <option value="">Dirección</option>
                                     <option value="1">One</option>
                                     <option value="2">Two</option>
                                     <option value="3">Three</option>
                                 </select>
                                <div class="invalid-feedback">Seleccione un campo</div>
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

export default SucursalForm;