import React from 'react'
import { StockContext, UserContext } from '../App'

const ChildC = () => {
    return (
        <>
            <StockContext.Consumer>
                {
                    ({ stock, price }) => {
                        return (
                            <UserContext.Consumer>
                                {
                                    ({ user }) => {
                                        return (
                                            <>
                                                <h2>User: {user.name}</h2>
                                                <h2>Logged In : {user.isLoggedIn}</h2>
                                                <h2>ChildC - {stock}: {price}</h2>
                                            </>
                                        )
                                    }
                                }
                            </UserContext.Consumer>
                        )
                    }
                }
            </StockContext.Consumer>
        </>
    )
}

export default ChildC

// Consumer always accepsts a function with a single argument