import React, { useState } from 'react'

const LearnForms = () => {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const handleLastName = (e) => {
    //     setLastName(e.target.value)
    // }


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    }

    return (
        <>
            {/* <form action="">
                First Name: <input type="text" name='firstName' onChange={handleFirstName} value={firstName} />
                <br /><br />
                Last Name: <input type="text" name='lastName' value={lastName} onChange={handleLastName} />
            </form> */}


            <form action="" onSubmit={handleFormSubmit}>
                First Name: <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} />
                <br /><br />
                Last Name: <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default LearnForms