import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { setShowSearch } from "../store/slices/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [visible, setVisible] = useState(false);

  const handleSearchClick = (e) => {
    dispatch(setShowSearch(true));
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img src={assets.logo} alt="Logo" className="logo" />
        </NavLink>

        <ul className="d-none d-md-flex justify-content-center align-items-center gap-3 gap-lg-4 list-unstyled m-0">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/collections">COLLECTIONS</NavLink>
          </li>
          <li>
            <NavLink to="/orders">ORDERS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink
              to="https://admin.foreverbuy.in/"
              target="_blank"
              className="admin-panel"
            >
              Admin Panel
            </NavLink>
          </li>
        </ul>

        <div className="d-flex align-items-end gap-3 gap-lg-4">
          <NavLink to="/collections">
            <img
              src={assets.search_icon}
              alt="Search"
              className="icon search_icon"
              onClick={handleSearchClick}
            />
          </NavLink>

          <NavLink to="/login">
            <img src={assets.profile_icon} alt="Profile" className="icon" />
          </NavLink>

          <NavLink to="/cart" className="position-relative">
            <img src={assets.cart_icon} alt="Cart" className="icon" />
            <p className="cart-number">{cartTotalQuantity}</p>
          </NavLink>

          <img
            src={assets.menu_icon}
            alt="Menu"
            className="menu_icon d-md-none"
            onClick={() => setVisible(true)}
          />
        </div>

        {/* Sidebar menu for small screens */}
        <div className={`sidebar ${visible ? "visible" : "hidden"}`}>
          <div
            onClick={() => setVisible(false)}
            className="back-link d-flex align-items-center gap-3"
          >
            <img
              src={assets.dropdown_icon}
              alt="Back"
              className="dropdown_icon"
            />
            <p className="m-0 opacity-50">Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-4 border-top"
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-4 border-top"
            to="/collections"
          >
            COLLECTIONS
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-4 border-top"
            to="/orders"
          >
            ORDERS
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-4 border-top"
            to="/contact"
          >
            CONTACT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-4 border-top border-bottom"
            to="https://admin.foreverbuy.in/"
            target="_blank"
          >
            ADMIN PANEL
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
