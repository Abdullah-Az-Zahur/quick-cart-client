import { Link, NavLink } from 'react-router-dom';
import  userImage from '../../../assets/image/user.png'
const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to='/products'>Products</NavLink>
      </li>

      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Quick Cart</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {/* Profile DropDown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            User
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a href='/'>Dashboard</a>
            </li>
            <li>
              <a href='login'>Login</a>
            </li>
            <li>
              <a>Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
