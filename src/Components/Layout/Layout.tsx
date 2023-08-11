import { ReactNode } from "react"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

interface LayoutInterface {
  child?: ReactNode
}
const Layout = ({ child }: LayoutInterface) => {
  return (
    <>
      <Header />
      <Sidebar />
      {child}
    </>
  )
}

export default Layout
