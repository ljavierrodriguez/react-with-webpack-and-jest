import React from 'react';
import rigo from './img/rigo-baby.jpeg';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-5 text-center">
                    <h1>Hola Rigo desde React <i className="fa-brands fa-react"></i>!</h1>
                    <img src={rigo} alt="rigo" className='my-5' />
                    <p className='my-5 p-3 alert-warning'>Para editar este componente abrir el archivo <strong>App.jsx</strong></p>
                </div>
            </div>
        </div>
    )
}

export default App;