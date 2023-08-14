import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      <h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/demographics'>Demographics</Link>
          </li>
        </ul>
      </h1>
    </div>
  )
}

export default Sidebar
