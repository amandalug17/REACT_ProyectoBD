import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Loader'


const EditarCiudad = (props) => {
    

    const [client, SetClient] = useState(undefined)
    const id = props.match.params.id
    console.log(id)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/ciudades/${id}/`).then(res => SetClient(res.data)).catch(err => console.log(err))
    }, [])
    console.log(client)
    const EditUser = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
       
        
            const data = {
                'nombre': nombre
            }
            axios.put(`http://127.0.0.1:8000/ciudades/${id}/`, data).then(res=> alert(`Ha editado con exito`));
        
        
       
    }
    
    return (
        <>
            {client ?
                <div className="container">
                    <div className= 'justify-content-center row' style={{marginTop:'20px'}}>
                    <h1>Editar Ciudad </h1>
                    </div>
            <div className='justify-content-center row' style={{marginTop:'20px', marginBottom:'20px'}}>
                <div className='col' style={{ margin: "50px"}}>
                    < div className='card-profile shadow  mt--200 card'>
                        <div className='card-title'>
                            <br />
                            <h4 className='text-center'>Ciudad</h4>
                        </div>
                        <div className='card-body'>

                            <form method="post">
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" defaultValue={client.nombre} required />
                                </div>
                                <div class="invalid-feedback">
                                    Por favor introduzca un valor
                                </div>
                                
                                <button type="submit" className="btn btn-primary"  onClick={EditUser}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>: <Loader />}

        </>
    );
}


export default EditarCiudad;





