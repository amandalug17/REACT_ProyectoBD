import React, { Component } from 'react';
import Axios from 'axios';
import { FormErrors } from './FormErrors';

class MunicipioForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nombre: '',
      formErrors: {nombre: ''},
      formValid: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;

    const data = {
        'nombre': nombre,

    }
    Axios.post(`http://127.0.0.1:8000/municipios/`, data,
    {
        headers: {"Access-Control-Allow-Origin": "*"}
    });
    const allInfo = `Ha agregado con exito la ciudad`;
    alert(allInfo); 
    
}
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nombreValid = this.state.nombreValid;

    switch(fieldName) {
      case 'nombre':
        nombreValid= value.length >= 3
        fieldValidationErrors.nombre = nombreValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nombreValid: nombreValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nombreValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.nombre)}`}>
          <label htmlFor="nombre">Nombre Municipio</label>
          <input type="text" required className="form-control" name="nombre"
            placeholder="Municipio"
            value={this.state.nombre}
            onChange={this.handleUserInput} id= 'nombre' />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.handleSubmit}>Agregar</button>
      </form>
    )
  }
}

export default MunicipioForm;