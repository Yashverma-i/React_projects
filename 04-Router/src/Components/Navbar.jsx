import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className='d-flex nava'>
        <li ><NavLink className='na ' to='/'>Home</NavLink></li>
        <li ><NavLink className='na ' to='/about'>About</NavLink></li>
        <li ><NavLink className='na ' to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar;
