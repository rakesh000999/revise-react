import React from 'react'


// const h2Element = React.createElement('h2', null, 'Learn JSX in a more fun way!')

const LearnJSX = () => {

    let stock = "Tesla"

    return (
        <>
            <h2>
                LearnJSX
            </h2>
            <p>I am learning React basically, I am revising the React concepts!</p>
            <h2>Price: {10 + 30} </h2>

            <h2>Stock name: {stock}</h2>

            <h2 className='bg-success'>Class</h2>

            <h2 className={stock}>Dynamic Class</h2>
        </>
    )
}

export default LearnJSX