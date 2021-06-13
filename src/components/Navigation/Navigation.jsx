// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { authSelectors } from '../../redux/auth';

// const Navigation = ({ isAuthenticated }) => (
//   <>
//     {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
//     <li className="nav-item">
//       <NavLink to="/" exact className="nav-link" activeClassName="active">
//         Main
//       </NavLink>
//     </li>
//     <li className="nav-item">
//       {isAuthenticated && (
//         <NavLink to="/contacts" exact className="nav-link" activeClassName="active">
//           Contacts
//         </NavLink>
//       )}
//     </li>
//     {/* </ul> */}
//   </>
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });
// export default connect(mapStateToProps)(Navigation);
