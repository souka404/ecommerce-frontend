import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "components/layouts/dropdown/Dropdown";

const Nav = () => {
  const state = useSelector((state) => state.handleCart);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <header>
      <div className="navbar">
        <Link to={"/"}>
          <h2>collection</h2>
        </Link>
        <form className="search">
          <input
            type="text"
            required
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input
            type="submit"
            value={"Search"}
            onClick={(e) => {
              e.preventDefault();
              if (searchText) navigate(`/search/${searchText}`);
            }}
          />
        </form>
        <nav>
          <NavLink to={"/login"}>
            <button>
              <i className="fa fa-sign-in me-1"></i>
              Login
            </button>
          </NavLink>
          <NavLink to={"/register"}>
            <button>
              <i className="fa fa-user-plus me-1"></i>
              Register
            </button>
          </NavLink>
          <NavLink to={"/cart"}>
            <button>
              <i className="fa fa-shopping-cart me-1"></i>
              Cart ({state.length})
            </button>
          </NavLink>
        </nav>
        <Dropdown />
      </div>
      <div className="sub-navbar">
        <div className="container">
          <nav>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/products"}>products</NavLink>
            <NavLink to={"/about"}>about</NavLink>
            <NavLink to={"/contact"}>contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Nav;
