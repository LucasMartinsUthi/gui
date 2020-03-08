import React, { Component } from 'react';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<<<<<<< HEAD
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
=======
import { faPlay } from '@fortawesome/free-solid-svg-icons'
>>>>>>> 1eacc8f2c32b1502066c50893c97668eb0d509a7

export default class Navbar extends Component {
    state = { 
        
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
                        {/* TODO Esse botão pode virar um component que recebe como propriedade um callback */}
                        <Button toggleIcons={["faPlay", "faPause"]}/>
                    </div>
                </div>
            </div>
        );
    }
}

// TODO 
// toggle button