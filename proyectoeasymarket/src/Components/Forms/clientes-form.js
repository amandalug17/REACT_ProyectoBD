import React, { Component } from 'react'
import axios from 'axios'

export class ClienteForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = { 
            cedula: '',
            nombre: '',
            apellido: '',
            telefono: '',
        }
        
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {
            cedula,
            nombre,
            apellido,
            telefono
        } = this.state;
        
        if (nombre === '' || apellido == '' || cedula === '' || telefono === ''){
            alert("No puede haber campos vacios");
        } else {
            const data =  {
                cedula,
                nombre,
                apellido,
                telefono};
            console.log(data);
            axios.post(`http://127.0.0.1:8000/clientes/`, this.state,{
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`)).then(res=> window.location.reload());
            
        }

       
        
    }
    
    render(){
       
        
        return(
            <>

            <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Cliente</h4>
                        </div>
                        <div className='card-body'>
                            
                            <form method="post">
                            <div className='form-group'>
                                    <label >Cédula</label>
                                    <input type= "number" className='form-control' id='cedula' name="cedula" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Apellido</label>
                                    <input type= "text" className='form-control' id='apellido' name="apellido" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Teléfono</label>
                                    <input type= "number" className='form-control' id='telefono' name="telefono" onChange={this.handleChange} required />
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

export default ClienteForm;