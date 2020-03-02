import React, { Component } from 'react'
import axios from 'axios'

export class ProductoForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
            nombre: '',
            categoria: ''
        }
        
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {
            nombre,
            categoria
        } = this.state;
        
        if (nombre === '' || categoria === ''){
            alert("No puede haber campos vacios");
        } else {
            const data =  {
                nombre,
                categoria   
            };
            console.log(data);
            axios.post(`http://127.0.0.1:8000/productos/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`));
            
        }

       
        
    }
    
    render(){
        
       
        
        return(
            <>

            <div className='justify-content-center row'>
                <div className='col-sm-6'>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Producto</h4>
                        </div>
                        <div className='card-body'>
                            
                            <form method="post">
                          
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" onChange={this.handleChange} required />
                                </div>
                                
                                <div className='form-group'>
                                    <label >Categoria</label>
                                    <div>
                                        <select name= 'categoria' onChange={this.handleChange}>
                                            <option value='Carniceria' >Carniceria</option>
                                            <option value='Charcuteria' >Charcuteria</option>
                                            <option value='Cereales' >Cereales</option>
                                            <option value='Confiteria' >Confiteria</option>
                                            <option value='Enlatados' >Enlatados</option>
                                            <option value='Futeria' >Fruteria</option>
                                            <option value='Lacteos' >Lacteos</option>
                                            <option value='Licoreria' >Licoreria</option>
                                            <option value='Limpieza' >Limpieza</option>
                                            <option value='Panaderia' >Panaderia</option>
                                            <option value='Perfumeria' >Perfumeria</option>
                                            <option value='Pescaderia' >Pescaderia</option>
                                            <option value='Refrigerados' >Refrigerios</option>
                                            <option value='Verduleria' >Verduleria</option>
                                            
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

export default ProductoForm;