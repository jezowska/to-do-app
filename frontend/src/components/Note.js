import { ReactComponent as TrashIcon } from '../images/trash-icon.svg';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
const Note = ({ note }) => {

    const deleteNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/delete/${note.id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note)
            })
    }

    const changeCompleted = async () => {
        note.completed = !note.completed

        await fetch(`http://127.0.0.1:8000/api/update/${note.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        })
    }

    useEffect(() => {

    }, [changeCompleted, deleteNote])

    return (
        <div className='note-container' onClick={changeCompleted}>

            {note.completed ? (<p className='note completed'>{note?.body}</p>) : (<p className='note'>{note?.body}</p>)}

            <TrashIcon className='trash-icon' onClick={deleteNote} />
        </div>
    )
}

export default Note