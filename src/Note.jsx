import React, {Component} from 'react';


export default class Note extends Component {
    constructor(){
        super();
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    };

    handleChange = (e) => {
        console.log(this.props);
        this.setState({
            text: e.target.value,
            title: e.target.value,
            color: e.target.value
        });
        console.log(this.setState);
    };

    render(){
        const {
            color,
            text,
            title,
            onDelete
        } = this.props;
        return(
            <div className="note-item" style={{backgroundColor: color}}>
                <button onClick={this.handleChange}>Change</button>
                <button onClick={this.handleDelete}>x</button>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        )
    }
}