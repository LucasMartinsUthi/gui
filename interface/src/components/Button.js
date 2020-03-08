import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';

export default class Button extends Component {
    state = {
        toggle: this.props.toggle,
        icon: this.props.toggleIcons[0],
        toggleIcons: this.props.toggleIcons
    }

    toggleButton = () => {
        let index = this.state.toggleIcons.indexOf(this.state.icon)
        index ^= 1
        this.setState({
            icon: this.state.toggleIcons[index]
        })

        // TODO callback
    }

    render() {
        return (
            <button href="#" onClick={this.toggleButton}>
                <FontAwesomeIcon icon={Icons[this.state.icon]}/>
            </button>
        )
    }
}
