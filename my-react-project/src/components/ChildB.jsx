import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {
    return (
        <>
            <h2>ChildB</h2>
            <ChildC stock={props.stock}/>
        </>
    )
}

export default ChildB