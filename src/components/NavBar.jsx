import React from "react";
import { Link } from "react-router-dom";

/* assets && icons */
import {
  FaServicestack,
  FaRegUser,
  FaPhotoVideo,
  FaAtlas,
} from "react-icons/fa";

function NavBar() {
  return (
    <nav className="border-b border-b-gray-300 bg-white fixed top-0 w-full ">
      <div className="container py-[25px] flex items-center justify-between">
        <h1 className="text-[36px] flex items-center font-bold">
          <FaServicestack />
          Big<span className="text-amber-400">Pro</span>
        </h1>

        <ul className="flex gap-[23px] font-bold">
          <li>
            <Link
              to={"/"}
              href="#"
              className="group flex items-center bg-gray-800 text-white px-3 py-2 rounded-full overflow-hidden transition-all duration-300 hover:px-5 hover:text-amber-400"
            >
              <FaRegUser className="text-lg shrink-0 transition-colors duration-300" />
              <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-xs">
                Users
              </span>
            </Link>
          </li>

          <li>
            <Link
              to={"/albums"}
              href="#"
              className="group flex items-center bg-gray-800 text-white px-3 py-2 rounded-full overflow-hidden transition-all duration-300 hover:px-5 hover:text-amber-400"
            >
              <FaPhotoVideo className="text-lg shrink-0 transition-colors duration-300" />
              <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-xs">
                Albums
              </span>
            </Link>
          </li>

          <li>
            <Link
              to={"/posts"}
              href="#"
              className="group flex items-center bg-gray-800 text-white px-3 py-2 rounded-full overflow-hidden transition-all duration-300 hover:px-5 hover:text-amber-400"
            >
              <FaAtlas className="text-lg shrink-0 transition-colors duration-300" />
              <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-xs">
                Posts
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
