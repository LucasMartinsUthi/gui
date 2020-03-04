import React from 'react';
import './styles/style.scss';
import Navbar from './components/Navbar';

export default class App extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                <Navbar />
                {/* TODO Transformar content em um component 
                    recebe como propriedade qual pagina carregar
                    assim posso separar as pagina em    
                */}
                <div className="content container">
                        {/* vazio */}
                </div>
            </div>
        )
    }
}