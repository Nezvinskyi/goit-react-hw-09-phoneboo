import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <NavLink to="/register" exact className="nav-link" activeClassName="active">
        Registration
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/login" exact className="nav-link" activeClassName="active">
        Login
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
