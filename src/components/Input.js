
import React, { Component } from 'react';


class Input extends Component {

    change(event) {
        event.preventDefault();
        this.props.change(event.target.value);
    }

    render() {
        return (
            <input type="text" onChange={this.change.bind(this)} />
        )
    }
}

export default Input;