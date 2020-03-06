import React from 'react';
import './styles/style.scss';
import Navbar from './components/Navbar';
import Rest from './Rest'

export default class App extends React.Component {

    // Rest arquivo onde fica as funções da api
    componentDidMount() {
        Rest("getContacts")
        console.log(Rest("saveContacts", "data"))
    }

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