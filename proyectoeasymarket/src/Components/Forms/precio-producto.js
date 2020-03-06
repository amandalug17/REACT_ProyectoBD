import React, { Component } from 'react'
import axios from 'axios'

export class PrecioForm extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            ciudades: [],
            productoID : '',
            monto : ''
        }
        
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/productos/').then(res => this.setState({
            ...this.state, ciudades : res.data
        }));
        console.log(this.ciudades);
    }
    handleSubmit = (e) => {
    
        e.preventDefault();
        const { productoID, monto}= this.state;
        console.log(this.state);
        if (monto === ''){
            alert("No puede haber campos vacios");
        } else {
            
            axios.post(`http://127.0.0.1:8000/precioProducto/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            });
            const allInfo = `Ha agregado con exito `;
            alert(allInfo)
            window.location.replace("http://localhost:3000/view/catalogoPrecios")
        }

       
        
    }
    
    render(){
        const opcionesCiudad = this.state.ciudades.map(ciudad => <option value={ciudad.id} key={ciudad.id}>{ciudad.nombre}</option>);
        return(
            <>
            <div className="container">
            <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                <div className='col' style={{ margin: "50px"}}>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Precio Producto</h4>
                        </div>
                        <div className='card-body'>

                            <form method="post">
                            <div className='form-group'>
                                    <label >Producto</label>
                                    <div>
                                        <select name= 'productoID' onChange={this.handleChange}>
                                        {opcionesCiudad}
                                        </select>
                                    </div>
                                    
                                </div>
                                <div className='form-group'>
                                    <label >Monto</label>
                                    <input type= "number" className='form-control' id='monto' name="monto" onChange={this.handleChange} required />
                                </div>
                                <div class="invalid-feedback">
                                    Por favor introduzca un valor
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

export default PrecioForm;