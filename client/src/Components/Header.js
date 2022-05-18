import React from "react";
import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <header className='appHeader'>
      <nav>
      <Link to="/" style={{borderBottom: "none"}}>
          <h1 className="branding">
            Sneaker World
          </h1>
        </Link>
        <div className="navigation">
          <NavLink className="button" exact to="/sneakers">
            Shop Sneakers
          </NavLink>
          <NavLink className="button" exact to="/sneakercollection">
            Your Collection
          </NavLink>
          <NavLink className="button" exact to="/wishlist">
            Wish List
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
