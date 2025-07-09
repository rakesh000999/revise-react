import React, { useState, useRef } from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState("")
    const refElement = useRef('')
    // console.log(refElement.current.value);
    const previousNameRef = useRef("")

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }

    const handleInput = (e) => {
        previousNameRef.current = name
        setName(e.target.value)

    }
    return (
        <>
            <h1>Learn useRef</h1>
            <input ref={refElement} type="text" value={name} onChange={handleInput} />
            <button onClick={clearText}>Clear</button>
            <br />
            <p>Previous Name: {previousNameRef.current}</p>
        </>
    )
}

export default LearnUseRef