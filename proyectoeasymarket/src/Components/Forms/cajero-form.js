import React, { Component } from 'react'
import axios from 'axios'

export class CajeroForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
            empleados: [], 
            empleadoID: '',
            nroCaja: ''
           
            
        }
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/empleados/').then(res => this.setState({
            ...this.state, empleados: res.data
        }));
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {
            empleadoID,
            nroCaja
        } = this.state;
        
        if (nroCaja === '' ){
            alert("No puede haber campos vacios");
        } else {
            const data =  { empleadoID, nroCaja};
            console.log(data);
            axios.post(`http://127.0.0.1:8000/cajeros/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`)).then(res=> window.location.replace("http://localhost:3000/create/empleado"));
            
        }

       
        
    }
    
    render(){
        console.log(this.ciudades);
      
    const opcionesEmpleados = this.state.empleados.map(empleado => <option value={empleado.id} key={empleado.id}>{empleado.nombre} {empleado.apellido}</option>);
       
        return(
            <>

            <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Cajero</h4>
                        </div>
                        <div className='card-body'>
                            
                            <form method="post">
                          
                                <div className='form-group'>
                                    <label >Empleado</label>
                                    <div>
                                        <select name= 'empleadoID' onChange={this.handleChange}>
                                        {opcionesEmpleados}
                                        </select>
                                    </div>
                                    
                                </div>
                                <div className='form-group'> 
                                    <div>
                                    <label >Número de Caja</label>
                                    </div>
                                    
                                    <select name= 'nroCaja' onChange={this.handleChange}>
                                            <option value='1' >1</option>
                                            <option value='2' >2</option>
                                            <option value='3' >3</option>
                                            <option value='4' >4</option>
                                            <option value= '5' >5</option>
                                            <option value='6' >6</option>
                                            <option value='7' >7</option>
                                            <option value='8' >8</option>
                                            <option value='9' >9</option>
                                            <option value='10' >10</option>
                                            
                                        </select>
                                    
                            
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

export default CajeroForm;