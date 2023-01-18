import React, { useState } from "react";

import Button from "./components/UI/Button/Button";

import './App.css'

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false)

  const toggleShowParagraphHandler = () => {
    setShowParagraph((preState) => !preState) //short form of inversing boolean value
  }

  return(
    <div className="app">
      <h1>Hi, there.!</h1>
      {showParagraph && <p>This is new</p>}
      <Button onClick={toggleShowParagraphHandler}>Show Paragraph</Button>
    </div>
  )
}

export default App

// virtual DOM diffing
// finding out the difference between two snapshots (current & previous state) and update difference in the real DOM
