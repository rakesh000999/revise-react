// import React from 'react'

import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"

function App() {
  let price = 200

  return (
    <>
      <h1>App Conponent</h1>
      <LearnProps stock="Tesla" price={price} />
    </>
  )
}

export default App
