import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = "font-bold text-sky-400 border-b-[1px] border-sky-400 pb-2";
  return (
    <div className="flex justify-between items-center px-[50px] py-4 bg-violet-950 text-sky-200 sticky top-0 z-10">
      <h1 className="text-2xl text-sky-400 font-extrabold m-0">
        ContactAPP
      </h1>
      <ul className="flex justify-between  w-[40%]">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
