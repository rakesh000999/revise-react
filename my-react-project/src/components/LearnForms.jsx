import React, { useState } from 'react'

const LearnForms = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    return (
        <>
            <form action="">
                First Name: <input type="text" name='firstName' onChange={handleFirstName} value={firstName} />
                <br /><br />
                Last Name: <input type="text" name='lastName' value={lastName} onChange={handleLastName} />
            </form>
        </>
    )
}

export default LearnForms