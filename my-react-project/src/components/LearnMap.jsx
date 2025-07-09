import React from 'react'

const LearnMap = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];

    return (
        <>
            <h1>Map Function</h1>
            <ul>
                {
                    names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default LearnMap