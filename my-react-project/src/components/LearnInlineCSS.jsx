import React from 'react'

const LearnInlineCSS = () => {

    const style = {
        container: {
            backgroundColor: 'lightblue',
            height: '100px',
            width: '100px',
        },
        h2Text: {
            fontSize: '30px',
            color: 'red',
        }
    }

    return (
        <>
            <p style={{ fontSize: '50px', fontWeight: 600, color: 'green' }}>Hello, this is a paragraph.</p>

            <div style={style.container}></div>

            <h2 style={style.h2Text}>Text H2 Element</h2>
        </>
    )
}

export default LearnInlineCSS