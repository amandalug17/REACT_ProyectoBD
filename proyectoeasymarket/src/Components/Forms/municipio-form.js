import React, { Component } from 'react'
import axios from 'axios'

export class MunicipioForm extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            ciudades : [],
            ciudadID: '',
            nombre : ''
            
        }
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/ciudades/').then(res => this.setState({
            ...this.state, ciudades : res.data
        }));
        console.log(this.ciudades);
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {ciudadID, nombre}= this.state;
        if (nombre === ''){
            alert("No puede haber campos vacios");
        } else {
            const data =  {ciudadID, nombre};
            console.log(data);
            axios.post(`http://127.0.0.1:8000/municipios/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            });
            const allInfo = `Ha agregado con exito`;
            alert(allInfo); 
        }

       
        
    }
    
    render(){
        const opcionesCiudad = this.state.ciudades.map(ciudad => <option value={ciudad.id} key={ciudad.id}>{ciudad.nombre}</option>);
        return(
            <>
             <div className="container">
            <div className='justify-content-center row'>
                <div className='col' style={{ margin: "50px"}}>
                < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Municipio</h4>
                        </div>
                        <div className='card-body'>

                            <form method="post">
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" onChange={this.handleChange} required />
                                </div>
                                <div className='form-group'>
                                    <label >Ciudad</label>
                                    <div>
                                        <select name= 'ciudadID' onChange={this.handleChange}>
                                        {opcionesCiudad}
                                        </select>
                                    </div>
                                    
                                </div>
                                
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                </div>
            </div>
            </div>
            </div>

            
        </>
        );

    }
}

export default MunicipioForm;