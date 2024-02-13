import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu'>
        <NavLink to={'/'} className={'menu-link'}>Главная</NavLink>
        <NavLink to={'/favorites'} className={'menu-link'}>Избранное</NavLink>
    </div>
  )
}

export default Menu;