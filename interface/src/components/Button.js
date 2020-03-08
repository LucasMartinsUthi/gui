import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Rest from '../Rest'

export default class Button extends Component {
    constructor(props) {
        super(props)

        let initState = this.props.toggleIcons[0]
        if(this.props.initState !== undefined)
            initState = this.props.toggleIcons[this.props.initState]

        this.state = {
            toggle: this.props.toggle,
            icon: initState,
            toggleIcons: this.props.toggleIcons
        }
    }
    

    toggleButton = () => {
        let index = this.state.toggleIcons.indexOf(this.state.icon)
        index ^= 1
        this.setState({
            icon: this.state.toggleIcons[index]
        })
    }

    callback = () => {
        this.toggleButton()
        Rest(this.props.callback)
    }

    render() {
        return (
            <button href="#" onClick={this.callback}>
                <FontAwesomeIcon icon={Icons[this.state.icon]}/>
            </button>
        )
    }
}
