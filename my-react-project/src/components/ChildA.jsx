import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
    return (
        <>
            <h2>ChildA</h2>
            <ChildB stock={props.stock}/>
        </>
    )
}

export default ChildA