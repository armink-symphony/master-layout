import { ReactNode } from "react"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar"

interface LayoutInterface {
  child?: ReactNode
}
const DefaultLayout = ({ child }: LayoutInterface) => {
  return (
    <>
      <Header />
      <Sidebar />
      {child}
    </>
  )
}

export default DefaultLayout
