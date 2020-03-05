import React, { Component } from 'react'
import axios from 'axios'

export class GerenteForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
            empleados: [], 
            especialidades: [], 
            empleadoID: '',
            especialidadID: ''
           
            
        }
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/empleados/').then(res => this.setState({
            ...this.state, empleados: res.data
        }));
         axios.get('http://127.0.0.1:8000/especialidades/').then(res => this.setState({
            ...this.state, especialidades: res.data
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
            especialidadID
        } = this.state;
        
        if (especialidadID === '' ){
            alert("No puede haber campos vacios");
        } else {
            const data =  { empleadoID, especialidadID};
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
    const opcionesEspecialidades = this.state.especialidades.map(e => <option value={e.id} key={e.id}>{e.nombre}</option>);
       
        return(
            <>

            <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
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
                                   
                                    <select name= 'especialidadID' onChange={this.handleChange}>
                                        {opcionesEspecialidades}
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