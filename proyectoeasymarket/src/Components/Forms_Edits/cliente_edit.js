import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Loader'


const EditarCliente = (props) => {
    

    const [client, SetClient] = useState(undefined)
    const id = props.match.params.id
    console.log(id)
   
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/clientes/${id}/`).then(res => SetClient(res.data)).catch(err => console.log(err))
    }, [])
    console.log(client)
    const EditUser = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const cedula = document.getElementById('cedula').value;
        const apellido = document.getElementById('apellido').value;
        const telefono = document.getElementById('telefono').value;
        const data = {
                'cedula': cedula,
                'nombre': nombre,
                'apellido': apellido,
                'telefono': telefono,
                
        }
            axios.put(`http://127.0.0.1:8000/clientes/${id}/`, data).then(res=> alert(`Ha editado con exito`)).then(res=> window.location.replace("http://localhost:3000/view/clientes"));
           console.log(data);
          
        
       
    }
   
    return (
        
        <>
            {client ?
                <div className="container">
                    
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
                                    <input type= "number" className='form-control' id='cedula' name="cedula" defaultValue={client.cedula}  required />
                                </div>
                                <div className='form-group'>
                                    <label >Nombre</label>
                                    <input type= "text" className='form-control' id='nombre' name="nombre" defaultValue={client.nombre} required />
                                </div>
                                <div className='form-group'>
                                    <label >Apellido</label>
                                    <input type= "text" className='form-control' id='apellido' name="apellido" defaultValue={client.apellido} required />
                                </div>
                               
                                <div className='form-group'>
                                    <label >Teléfono</label>
                                    <input type= "number" className='form-control' id='telefono' name="telefono" defaultValue={client.telefono} required />
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


export default EditarCliente;
