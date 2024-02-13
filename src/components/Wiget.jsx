import Menu from './Menu/Menu'
import { Outlet } from 'react-router-dom'

function Wiget() {
  return (
    <div className="wiget">
      <Menu />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default Wiget;