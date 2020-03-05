import React, { Component } from 'react'
import axios from 'axios'

export class SucursalForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
            municipios : [], 
            nombre: '',
            municipioID: '',
            activo: true
        }
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/municipios/').then(res => this.setState({
            ...this.state, municipios : res.data
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
            municipioID,
            activo
        } = this.state;
        
        if (nombre === '' ){
            alert("No puede haber campos vacios");
        } else {
            const data =  {
                nombre,
            municipioID,
            activo
                };
            console.log(data);
            axios.post(`http://127.0.0.1:8000/sucursales/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`)).then(res=> window.location.reload());
            
        }

       
        
    }
    
    render(){
        console.log(this.ciudades);
    
    const opcionesMunicipios = this.state.municipios.map(municipio => <option value={municipio.id} key={municipio.id}>{municipio.nombre}</option>);
       
        
        return(
            <>

            <div className='justify-content-center row'style={{marginTop:'20px', marginBottom:'20px'}}>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Sucursal</h4>
                        </div>
                        <div className='card-body'>
                            
                            <form method="post">
                          
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Municipio</label>
                                    <div>
                                        <select name= 'municipioID' onChange={this.handleChange}>
                                        {opcionesMunicipios}
                                        </select>
                                    </div>
                                    
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

export default SucursalForm;