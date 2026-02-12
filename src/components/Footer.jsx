import React from "react";

/* assets && icons */
import {
  FaServicestack,
  FaRegUser,
  FaPhotoVideo,
  FaAtlas,
} from "react-icons/fa";

function Footer() {
  return (
    <nav className="border-t border-t-gray-300">
      <div className="container py-[25px] flex items-center justify-between">
        <h1 className="text-[36px] flex items-center font-bold">
          <FaServicestack />
          Big<span className="text-amber-400">Pro</span>
        </h1>
      </div>
    </nav>
  );
}

export default Footer;
