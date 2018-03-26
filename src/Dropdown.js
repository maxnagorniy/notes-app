import React, { Component } from 'react';

import './App.css';

class Dropdown extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpened: false
        };
    }

    toggleState(){
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {

        console.log("isOpened", this.state.isOpened);

        let dropdownText;

        if(this.state.isOpened){
            dropdownText = <div>Here is what is show in dropdown</div>
        }

        return (
            <div onClick={this.toggleState.bind(this)}>
                It's dropdown baby
                {dropdownText}
            </div>

        );
    }
}

export default Dropdown;
