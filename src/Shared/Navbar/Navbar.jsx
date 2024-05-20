import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="h-16 border-black border ">
      <div>
        <div className="flex items-center gap-2">
          <img
            className="w-9 py-3 ml-4"
            src="https://i.ibb.co/Cb3XBdq/380700650-10162533193146729-2379134611963304810-n.jpg"
            alt=""
          />
          <div className="flex justify-center">
            <button className="bg-[#F0F2F5] pt-1 pl-4 flex justify-center items-center w-8 h-9 rounded-l-full">
              <CiSearch />
            </button>
            <input
              id="inputField"
              className="bg-[#F0F2F5] h-9 pl-2 rounded-r-full placeholder:text-black placeholder:opacity-[0.4] "
              type="search"
              placeholder="search Facebook"
            />
          </div>
        </div>
        <div>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </div>
        <div>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
