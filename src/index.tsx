import React from "react"
import ReactDOM from "react-dom/client"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import reportWebVitals from "./reportWebVitals"
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout"
import {
  ButtonStyled,
  ListStyled,
  TextStyled,
} from "@nike/nike-design-system-components"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout
        child={
          <ListStyled listStyle='none' aria-label='descriptive aria label'>
            <li>
              <TextStyled appearance='body1Strong'>
                4 Frozen Bananas, Sliced
              </TextStyled>
            </li>
            <li>
              <TextStyled appearance='body1Strong'>
                2 Cups Frozen Mango Cubes
              </TextStyled>
            </li>
            <li>
              <TextStyled appearance='body1Strong'>4 Frozen Bananas</TextStyled>
              <TextStyled appearance='body2' color='secondary'>
                Sliced
              </TextStyled>
            </li>
          </ListStyled>
        }
      />
    ),
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
