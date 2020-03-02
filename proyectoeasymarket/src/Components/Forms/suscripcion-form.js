import React, { Component } from 'react'
import axios from 'axios'

export class SuscripcionForm extends Component {
   
    constructor(props) {
        super(props)
       
        this.state = {
            clientes : [], 
            clienteID: '',
            tipo: '',
            activo: true
        }
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/clientes/').then(res => this.setState({
            ...this.state, clientes : res.data
        }));
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {
            clienteID,
            tipo,
            activo
        } = this.state;
        
        if (tipo === '' ){
            alert("No puede haber campos vacios");
        } else {
            const data =  {
                clienteID,
                tipo,
                activo
                };
            console.log(data);
            axios.post(`http://127.0.0.1:8000/suscripciones/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`));
            
        }

       
        
    }
    
    render(){
        
    
    const opcionesClientes = this.state.clientes.map(cliente=> <option value={cliente.id} key={cliente.id}>{cliente.nombre} {cliente.apellido}</option>);
       
        
        return(
            <>

            <div className='justify-content-center row'>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Suscripción</h4>
                        </div>
                        <div className='card-body'>
                            
                            <form method="post">
                          
                            <div className='form-group'>
                                    <label >Cliente</label>
                                    <div>
                                        <select name= 'clienteID' onChange={this.handleChange}>
                                        {opcionesClientes}
                                        </select>
                                    </div>
                                    
                                </div>
                                <div className='form-group'> 
                                    <div>
                                    <label >Tipo</label>
                                    </div>
                                   
                                    <select name= 'tipo' onChange={this.handleChange}>
                                            <option value='Oro' >Oro</option>
                                            <option value='Plata' >Plata</option>
                                            <option value='Bronze' >Bronze</option>
                                </select>
                                </div>
                                <div className='form-group'>
                                    <label >Estado</label>
                                    <div>
                                        <select name= 'activo' onChange={this.handleChange}>
                                            <option value='true' >Activo</option>
                                            <option value='false' >Inactivo</option>
                                        </select>
                                    </div>
                                    
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

export default SuscripcionForm;