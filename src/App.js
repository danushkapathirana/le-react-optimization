import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo";

import './App.css'

const App = () => {
  console.log('APP IS RUNNING')

  const [showParagraph, setShowParagraph] = useState(false)

  const toggleShowParagraphHandler = () => {
    setShowParagraph((preState) => !preState) //short form of inversing boolean value
  }

  return(
    <div className="app">
      <h1>Hi, there.!</h1>
      <Demo onShow={false} /> {/**c-2 */}
      <Button onClick={toggleShowParagraphHandler}>Show Paragraph</Button>
    </div>
  )
}

export default App

// virtual DOM diffing
// finding out the difference between two snapshots (current & previous state) and update difference in the real DOM

// c-2
// <Demo onShow={showParagraph} /> => this child component is re-evaluating and RE-RENDERING since state is changing
// <Demo onShow={false} /> => this child component is re-evaluating (becz if a component is re-evaluated all its child component is also re-evaluated)
// but not RE-RENDERING becz state (show={false}) is never changing

// export default React.memo(Button) => should not re-evaluated, but it does, why?
// becz React.memo(), works only for JavaScript primitive values only
// <Demo onShow={false} />, false is a primitive value so, React.memo() works, it did not re-evaluated
// <Button onClick={toggleShowParagraphHandler}>Show Paragraph</Button> => toggleShowParagraphHandler is a just JS function, not a primitive value, so React.memo() does not work,
// since it is a new value always when re-evaluate the App.js
