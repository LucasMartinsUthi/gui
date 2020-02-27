import React from 'react';
import './styles/style.scss';
import Navbar from './components/Navbar';

export default class App extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <Navbar />
                <div className="container">
                    {/* TODO Transformar content em um component 
                        recebe como propriedade qual pagina carregar
                        assim posso separar as paginas em arquivos diferentes    
                    */}
                    <div className="content">
                        {/* vazio */}
                    </div>
                </div>
            </div>
        )
    }
}