import React from "react"
import ReactDOM from "react-dom/client"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "@nike/eds/dist/index.css"

import "./index.css"
import reportWebVitals from "./reportWebVitals"
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout"
import { ButtonStyled } from "@nike/nike-design-system-components"
import Login from "./Components/Login/Login"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DefaultLayout child={<div>Home</div>} />,
  },
  {
    path: "/demographics",
    element: <DefaultLayout child={<ButtonStyled>TEST</ButtonStyled>} />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
