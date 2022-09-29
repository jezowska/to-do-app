import { useEffect, useState } from 'react'

import { ReactComponent as AddIcon } from '../images/add-icon.svg'

const NewNote = () => {
    const [note, setNote] = useState([])

    useEffect(() => {

    }, [note])

    const createNote = async () => {
        await fetch('http://127.0.0.1:8000/api/new/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        })
        window.location.reload(false);
    }


    const changeNote = (value) => {
        setNote(note => ({
            ...note,
            body: value
        }))


    }


    return (
        <div className='new-note-container'>
            <AddIcon className='add-icon' onClick={createNote} />
            <textarea className='new-note-text resize-none' align='middle' onChange={(e) => { changeNote(e.target.value) }}>
            </textarea>
        </div>
    )
}

export default NewNote