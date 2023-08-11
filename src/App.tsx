import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Layout from "./Components/Layout/Layout"

function App() {
  return (
    <div className='App'>
      <Layout child={<div>Content</div>} />
    </div>
  )
}

export default App
