import React, { Component } from 'react'
import axios from 'axios'

export class EmpleadoForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
          
            sucursales: [],
            cedula: '',
            nombre: '',
            apellido: '',
            fechaNacimiento:'',
            telefono: '',
            sucursalID: '',
            activo: true
        }
        
    }
    componentDidMount(){

        axios.get('http://127.0.0.1:8000/sucursales/').then(res => this.setState({
            ...this.state, sucursales: res.data
        }));
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
            fechaNacimiento,
            telefono,
            sucursalID,
            activo
        } = this.state;
        
        if (nombre === '' || apellido == '' || cedula === '' || telefono === ''|| fechaNacimiento===''){
            alert("No puede haber campos vacios");
        } else {
            const data =  {cedula,
                cedula,
                nombre,
                apellido,
                fechaNacimiento,
                telefono,
                sucursalID,
                activo};
            console.log(data);
            axios.post(`http://127.0.0.1:8000/empleados/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`));
            window.location.replace("http://localhost:3000/view/empleados");
            
        }

       
        
    }
    
    render(){
        console.log(this.ciudades);
        
    const opcionesSucursal = this.state.sucursales.map(sucursal => <option value={sucursal.id} key={sucursal.id}>{sucursal.nombre}</option>);
        
        return(
            <>

            <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Empleado</h4>
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
                                    <label >Fecha Nacimiento</label>
                                    <input type= "date" className='form-control' id='fechaNacimiento' name="fechaNacimiento" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Teléfono</label>
                                    <input type= "number" className='form-control' id='telefono' name="telefono" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Sucursal donde trabaja</label>
                                    <div>
                                        <select name= 'sucursalID' onChange={this.handleChange}>
                                        {opcionesSucursal}
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

export default EmpleadoForm;