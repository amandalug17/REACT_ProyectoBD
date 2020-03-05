import React, { Component } from 'react'
import axios from 'axios'

export class ProductoForm extends Component {

    
    constructor(props) {
        super(props)
       
        this.state = {
            categorias: [],
            nombre: '',
            categoriaID: ''
        }
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/categorias/').then(res => this.setState({
            ...this.state, categorias : res.data
        }));
        console.log(this.ciudades);
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }

    handleSubmit = (e) => {
    
        e.preventDefault();
        const {
            nombre,
            categoriaID
        } = this.state;
        
        if (nombre === '' || categoriaID === ''){
            alert("No puede haber campos vacios");
        } else {
            const data =  {
                nombre,
                categoriaID   
            };
            console.log(data);
            axios.post(`http://127.0.0.1:8000/productos/`, this.state,
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(res=> alert(`Ha agregado con exito`));
            
        }

       
        
    }
    
    render(){
        
       const opcionesDirecciones = this.state.categorias.map(c => <option value={c.id} key={c.id}>{c.nombre}</option>);
        
        return(
            <>
    
            <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
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
                                        <select name= 'categoriaID' onChange={this.handleChange}>
                                            {opcionesDirecciones}
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