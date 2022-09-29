import React, { useEffect, useState } from 'react'
import Note from '../components/Note'

import NewNote from '../components/NewNote'
const Main = () => {

    const [notes, setNotes] = useState([])
    console.log(notes)

    useEffect(() => {
        getNotes()
    }, [notes])

    const getNotes = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/all/')
        let data = await response.json()
        setNotes(data)
    }
    return (
        <div className='main'>
            <h1>To Do</h1>
            {notes.map((note, index) => (<Note key={index} note={note} index={index} />))}

            <NewNote />
        </div>
    )
}

export default Main