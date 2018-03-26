import React, {Component} from 'react';

import Note from './Note'

export default class NotesGrid extends Component {
    render(){
      const {
        notes,
        onNoteDelete,
        onNoteChange
      } = this.props;
      return(
          <div className="notes-grid-wrap">
              {
                notes.map(note =>
                  <Note
                      key={note.id}
                      color={note.color}
                      id={note.id}
                      text={note.text}
                      title={note.title}
                      onDelete={onNoteDelete}
                      onChange={onNoteChange}
                  />
                )
              }
          </div>
      )
    }
}