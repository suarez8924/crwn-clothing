import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/svg/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <ul className="nav-links-container">
          <li className="nav-link-item">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Navigation;
