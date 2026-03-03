import React from "react";
import { FaPlus } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navbar  bg-white text-black shadow-2xl">
      <div className="flex-1">
        <a className=" text-xl font-bold">CS — Ticket System</a>
      </div>
      <div className="flex-none justify-center items-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <button className="btn bg-gradient-to-r from-purple-600 to-fuchsia-500">
            <FaPlus /> New Ticket
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
