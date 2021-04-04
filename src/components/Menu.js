import React, { Component } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import ProductListPage from "./ProductListPage";

// const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
//   return (
//     <Route
//       path={to}
//       exact={activeOnlyWhenExact}
//       children={({ match }) => {
//         var active = match ? "active abc" : "";
//         return (
//           <li className={active}>
//             <Link to={to} className="my-link">
//               {label}
//             </Link>
//           </li>
//         );
//       }}
//     />
//   );
// };
class Menu extends Component {
  render() {
    // var menus = [
    //   {
    //     name:'Trang chủ',
    //     to:'/',
    //     exact:true
    //   },
    //   {
    //     name:'Quản lý sản phẩm',
    //     to:'/',
    //     exact:true
    //   }
    // ];
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="/#">
            CALL API
          </a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" exact>Trang chủ</Link>
              </li>
              <li className="nav-item">
              <li className="nav-item">
                <Link className="nav-link" to="/product-list" exact>Quản lý sản phẩm</Link>
              </li>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
