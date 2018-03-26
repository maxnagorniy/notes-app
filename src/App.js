import React, { Component } from 'react';

import NoteEditor from './NoteEditor'
import NotesGrid from './NotesGrid'

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        notes : []
    };
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
  }

  componentDidMount(){
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    if (savedNotes) {
      this.setState({notes: savedNotes})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.notes !== prevState.notes){
        this.saveToLocalStorage();
    }
  }

  handleNoteAdd = (newNote) => {
    this.setState({
        notes: [newNote, ...this.state.notes]
    })
  };

  handleNoteDelete = (noteId) => {
      this.setState({
          notes: this.state.notes.filter(note => note.id !== noteId)
      });
  };

  saveToLocalStorage(){
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }

  render() {
    return (
      <div className="App">
        <h1>NotesApp</h1>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
      </div>
    );
  }
}

export default App;
