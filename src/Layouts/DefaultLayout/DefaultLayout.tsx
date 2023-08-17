import { ReactNode } from "react"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar"

import "./DefaultLayout.scss"
interface LayoutInterface {
  child?: ReactNode
}
const DefaultLayout = ({ child }: LayoutInterface) => {
  return (
    <>
      <div className='default-layout-wrapper'>
        <Sidebar />
        <div className='default-layout-wrapper-header_content'>
          <Header />
          <div className='default-layout-wrapper-content'>{child}</div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
