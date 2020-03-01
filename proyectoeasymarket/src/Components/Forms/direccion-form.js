import React, { Component } from 'react'
import axios from 'axios'

export class DireccionForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
            ciudades : [],
            municipios : [], 
            ciudadID: '',
            municipioID: '', 
            calle: ''
        }
        
    }
    componentDidMount(){
        console.log("HOLAAAA");
        axios.get('http://127.0.0.1:8000/ciudades/').then(res => this.setState({
            ...this.state, ciudades : res.data
        }));
        axios.get('http://127.0.0.1:8000/municipios/').then(res => this.setState({
            ...this.state, municipios : res.data
        }));
        console.log(this.ciudades);
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {ciudadID,municipioID, calle} = this.state;
        
        if (calle === ' '){
            alert("No puede haber campos vacios");
        } else {
            const data =  {ciudadID,municipioID, calle};
            console.log(data);
            axios.post(`http://127.0.0.1:8000/direcciones/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`));
            
        }

       
        
    }
    
    render(){
        console.log(this.ciudades);
        
        const opcionesCiudad = this.state.ciudades.map(ciudad => <option value={ciudad.id} key={ciudad.id}>{ciudad.nombre}</option>);
        const opcionesMunicipios = this.state.municipios.map(municipio => <option value={municipio.id} key={municipio.id}>{municipio.nombre}</option>);
        
        return(
            <>

            <div className='justify-content-center row'>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Dirección</h4>
                        </div>
                        <div className='card-body'>
                            
                            <form method="post">
                                <div className='form-group'>
                                    <label >Ciudad</label>
                                    <div>
                                        <select name= 'ciudadID' onChange={this.handleChange}>
                                        {opcionesCiudad}
                                        </select>
                                    </div>
                                    
                                </div>
                                <div class="invalid-feedback">
                                    Por favor introduzca un valor
                                </div>
                                <div className='form-group'>
                                    <label >Municipio</label>
                                    <div>
                                    <select name = 'municipioID' onChange={this.handleChange}>
                                        {opcionesMunicipios}
                                    </select>
                                    </div>
 
                                </div>
                                <div className='form-group'>
                                    <label >Calle</label>
                                    <input type= "text" className='form-control' id='calle' name="calle" onChange={this.handleChange} required />
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

export default DireccionForm;