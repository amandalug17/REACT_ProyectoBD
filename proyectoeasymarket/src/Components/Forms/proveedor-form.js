import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect,BrowserRouter } from 'react-router-dom'

export class ProveedorForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
          
            sucursales: [],
            nombre: '',
            telefono: '',
            ciudadlID: '',
            activo: true
        }
        
    }
    componentDidMount(){

        axios.get('http://127.0.0.1:8000/ciudades/').then(res => this.setState({
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
            
            nombre,
           
            telefono,
            ciudadlID,
            activo
        } = this.state;
        
        if (nombre === '' ){
            alert("No puede haber campos vacios");
        } else {
            const data =  {nombre,
           
                telefono,
                ciudadlID,
                activo};
            console.log(data);
            axios.post(`http://127.0.0.1:8000/proveedores/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`)).then(res=> window.location.reload());
            
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
                            <h4 className='text-center'>Proveedor</h4>
                        </div>
                        <div className='card-body'>
                            
                            <form method="post">
                           
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" onChange={this.handleChange} required />
                                </div>
                                
                                <div className='form-group'>
                                    <label >Teléfono</label>
                                    <input type= "number" className='form-control' id='telefono' name="telefono" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Ciudad de donde viene</label>
                                    <div>
                                        <select name= 'ciudadID' onChange={this.handleChange}>
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

export default ProveedorForm;