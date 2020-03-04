import React, { Component } from 'react';

export class Filho extends Component {
    state = {
        value: 0
    }

    render() {
        return 
            <div>{this.state.value}</div>
    }
}

export default class Comunication extends Component {
    state = {
        sumValue: 2
    }

    sumProp = sum => {
        console.log(this, sum)
    }

    render() {
        return (
            <div> 
                <Filho onClick={this.sumProp(this.state.sumValue)}></Filho>
            </div>
        )
    }
}
