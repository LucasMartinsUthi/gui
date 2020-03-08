import React, { Component } from 'react';
import logo from '../assets/img/logo.png'
import Button from './Button'
import Rest from '../Rest'

export default class Navbar extends Component {
    state = { 
        button: this.buttonInitState()   
    }

    buttonInitState() { 
        return + Rest("getPlaying")
    } 

    render() { 
        return ( 
            <div style={{width: '100%', background: 'white'}}>
                <div className="navbar">
                    <div className="navbar__logo">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="navbar__nav">
                        <div className="navbar__nav__item navbar__nav__item--active">
                            <span>Environment</span>
                        </div>

                        <div className="navbar__nav__item">
                            <span>Camera</span>
                        </div>
                    </div>

                    <div className="navbar__button">
                        <Button toggleIcons={["faPlay", "faPause"]} initState={this.state.button} callback={"setPlaying"} data="teste"/>
                    </div>
                </div>
            </div>
        );
    }
}