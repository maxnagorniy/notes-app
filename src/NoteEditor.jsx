import React, {Component} from 'react';

export default class NoteEditor extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            color: ''
        };
    }
    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };
    handleColorChange = (e) => {
        this.setState({
            color: e.target.value
        });
    };
    handleNoteAdd = (e) => {
        e.preventDefault();
        const newNote = {
            text: this.state.text,
            title: this.state.title,
            id: Date.now(),
            color: this.state.color
        };
        this.props.onNoteAdd(newNote);
        this.resetState();
    };
    resetState(){
        this.setState({
            text: '',
            title: ''
        })
    }
    render(){
        return(
            <div>
                <form action="" className="editor-form" onSubmit={this.handleNoteAdd}>
                    <input
                        type="text"
                        placeholder="Enter Your Title"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <textarea
                        rows={5}
                        placeholder="Enter Your Notes"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                    <input
                        type="color"
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        disabled={!this.state.text && !this.state.title}
                    >
                        Add
                    </button>
                </form>
            </div>
        )
    }
}