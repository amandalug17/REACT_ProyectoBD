import React, { Component } from 'react'
import axios from 'axios'

export class GerenteForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
            empleados: [], 
            empleadoID: '',
            especialidad: ''
           
            
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
            especialidad
        } = this.state;
        
        if (especialidad === '' ){
            alert("No puede haber campos vacios");
        } else {
            const data =  { empleadoID, especialidad};
            console.log(data);
            axios.post(`http://127.0.0.1:8000/gerentes/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`));
            
        }

       
        
    }
    
    render(){
        console.log(this.ciudades);
    
    const opcionesEmpleados = this.state.empleados.map(empleado => <option value={empleado.id} key={empleado.id}>{empleado.nombre} {empleado.apellido} </option>);
       
        return(
            <>

            <div className='justify-content-center row'>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Gerentes</h4>
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
                                    <label >Especialidad</label>
                                    </div>
                                   
                                    <select name= 'especialidad' onChange={this.handleChange}>
                                            <option value='Finanzas' >Finanzas</option>
                                            <option value='Recursos Humanos' >Recursos Humanos</option>
                                            <option value='Administracion' >Administración</option>
                                            <option value='Gerencia' >Gerencia</option>
                                            <option value='Comercio' >Comercio</option>
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

export default GerenteForm;