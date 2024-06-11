import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SlMenu } from "react-icons/sl";
import "./Dropdown.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const state = useSelector((state) => state.handleCart);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const dropdownContent = isOpen &&(
    <div
      className="dropdown-content"
      ref={dropdownRef}
      // style={{ display: isOpen ? "block" : "none" }}
    >
      <NavLink to={"/login"}>
        <i className="fa fa-sign-in me-1"></i>
        Login
      </NavLink>
      <NavLink to={"/register"}>
        <i className="fa fa-user-plus me-1"></i>
        Register
      </NavLink>
      <NavLink to={"/cart"}>
        <i className="fa fa-shopping-cart me-1"></i>
        Cart ({state.length})
      </NavLink>
    </div>
  );

  return (
    <div className="dropdown">
      <button type="button" className="dropbtn" onClick={handleClick}>
        <SlMenu size={20} />
      </button>
      {dropdownContent}
    </div>
  );
}

export default Dropdown;
