import React, { Component } from 'react'
import Axios from 'axios'

export class CiudadForm extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            nombre : '',
        }
        
    }
    handleChange = (e) => {
        this.setState({ nombre: e.target.value })
    }
    resetForm(){
        this.nombre = '';   
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        var nombre = document.getElementById('nombre').value;

        const data = {
            'nombre': nombre,

        }
        Axios.post(`http://127.0.0.1:8000/ciudades/`, data,
        {
            headers: {"Access-Control-Allow-Origin": "*"}
        });
        const allInfo = `Ha agregado con exito la ciudad`;
        alert(allInfo); 
        
    }
    
    render(){
        return(
            <>

            <div className='justify-content-center row'>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Ciudad</h4>
                        </div>
                        <div className='card-body'>

                            <form className="needs-validation" method="post">
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" required />
                                </div>
                                <div class="invalid-feedback">
                                    Por favor introduzca un valor
                                </div>
                                
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );

    }
}

export default CiudadForm;