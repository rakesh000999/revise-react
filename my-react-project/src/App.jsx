// import React from 'react'

import { createContext } from "react"
import CounterApp from "./components/CounterApp"
import LearnEvent from "./components/LearnEvent"
import LearnJSX from "./components/LearnJSX"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnProps from "./components/LearnProps"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import LearnUseState from "./components/LearnUseState"
import ChildA from "./components/ChildA"

// Context API is used to share data between components without passing props through every level of the component tree.

// create , provider, consumer

const StockContext = createContext();

function App() {
  let price = 200
  let stock = "Tesla"

  const getStock = (stock) => {
    console.log(stock);
  }


  return (
    <>
      <h1>App Component</h1>
      {/* <LearnProps stock="Tesla" price={price} /> */}
      {/* <LearnEvent /> */}
      {/* <LearnLiftingStateUp getStock={getStock} /> */}
      {/* <LearnUseState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}

      <StockContext.Provider value={{ stock, price }}>
        <ChildA />
      </StockContext.Provider>
    </>
  )
}

export default App
export { StockContext }
