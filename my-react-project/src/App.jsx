// import React from 'react'

import LearnEvent from "./components/LearnEvent"
import LearnJSX from "./components/LearnJSX"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnProps from "./components/LearnProps"

function App() {
  // let price = 200

  const getStock = (stock) => {
    console.log(stock);
  }

  return (
    <>
      <h1>App Conponent</h1>
      {/* <LearnProps stock="Tesla" price={price} /> */}
      {/* <LearnEvent /> */}
      <LearnLiftingStateUp getStock={getStock} />
    </>
  )
}

export default App
