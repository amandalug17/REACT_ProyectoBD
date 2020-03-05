import React from 'react'
import {Link} from 'react-router-dom';

const HomePage = () => {

    return (
        <div className='justify-content-center row'>
            <div className='col-lg-12' style={{padding:'0'}}>
                <div className='row-grid justify-content-center row' style={{marginTop: '40px'}}>
                    <div className='col-sm-1'>

                    </div>
                    
                    <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>MUNICIPIOS</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>M</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/municipios'className='btn btn-dark' size='sm'>IR A MUNICIPIOS</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>CIUDADES</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>C</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/ciudades' className='btn btn-dark' size='sm'>IR A CIUDADES</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>CLIENTES</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>C</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/clientes' className='btn btn-dark' size='sm'>IR A CLIENTES</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>EMPLEADOS</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>E</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/empleados' className='btn btn-dark' size='sm'>IR A EMPLEADOS</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-sm-1'>

                    </div>
                </div>
                <div className='row-grid row' style={{marginTop: '20px', marginBottom:'20px'}}>
                <div className='col-sm-1'>

                </div>
                <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>PRODUCTOS</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>P</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/productos' className='btn btn-dark' size='sm'>IR A PRODUCTOS</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>SUCURSALES</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>S</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/sucursales' className='btn btn-dark' size='sm'>IR A SUCURSALES</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>MUNICIPIOS</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>M</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/municipios'className='btn btn-dark' size='sm'>IR A MUNICIPIOS</Link>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='col-sm-2'>
                        <div className='card-lift--hover shadow border-0 card'>
                            <br />
                                <div className='card-title'>
                                    <h6 className='text-center'><strong>SUSCRIPCIONES</strong></h6>
                                </div>
                                <div className='py-2 card-body'>
                                    <h1 className='text-center' style={{ fontSize: '100px' }}>S</h1>
                                </div>
                                <div className='card-footer'>
                                    <div className='justify-content-center row'>
                                    <Link to='/view/suscripciones' className='btn btn-dark' size='sm'>IR A SUSCRIPCIONES</Link>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default HomePage;
