import React from 'react'
import { StockContext } from '../App'

const ChildC = () => {
    return (
        <>
            <StockContext.Consumer>
                {
                    ({ stock, price }) => {
                        return (
                            <>
                                <h2>ChildC - {stock}: {price}</h2>
                            </>
                        )
                    }
                }
            </StockContext.Consumer>
        </>
    )
}

export default ChildC

// Consumer always accepsts a function with a single argument