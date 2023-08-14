import React from "react"
import logo from "./logo.svg"
import "./App.css"
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout"

function App() {
  return (
    <div className='App'>
      <DefaultLayout child={<div>Content</div>} />
    </div>
  )
}

export default App
