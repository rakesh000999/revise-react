import React from 'react'
import '../assets/css/style.css'

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
            <style>
                {`
                    .container{
                        background-color: #00ff00;
                        height: 100px;
                        width: 100px;
                    }
                `}
            </style>

            <h1>Inline CSS</h1>
            <p style={{ fontSize: '50px', fontWeight: 600, color: 'green' }}>Hello, this is a paragraph.</p>

            <div style={style.container}></div>

            <h2 style={style.h2Text}>Text H2 Element</h2>

            <hr />

            <h1>Internal CSS</h1>
            <div className='container'>

            </div>

            <hr />
            <h1>External CSS</h1>

            <div className='yellowbox'>

            </div>
            <h2 className='yellowtext'>Yellow Text</h2>
        </>
    )
}

export default LearnInlineCSS