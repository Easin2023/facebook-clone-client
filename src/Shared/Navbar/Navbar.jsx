import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiNotification2Fill, RiStore2Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { IoMenu, IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="md:h-16 h-32 shadow-lg">
      <div className="lg:flex md:flex justify-between md:items-center">
        <div className="flex justify-between items-center gap-2">
          <img
            className="w-10 py-3 ml-4"
            src="https://i.ibb.co/Cb3XBdq/380700650-10162533193146729-2379134611963304810-n.jpg"
            alt=""
          />
          <div className="md:visible md:flex hidden justify-center">
            <button className="bg-[#F0F2F5] md:visible hidden pt-1 pl-4 md:flex justify-center items-center w-8 h-9 rounded-l-full">
              <CiSearch />
            </button>
            <input
              id="inputField"
              className="bg-[#F0F2F5] h-9 pl-2 rounded-r-full placeholder:text-black placeholder:opacity-[0.4] "
              type="search"
              placeholder="search Facebook"
            />
          </div>
          <div className="flex gap-2">
            <div className="lg:hidden md:hidden visible bg-[#F0F2F5] p-3 opacity-[0.5] rounded-full">
              <Link>
                <IoSearch size={24} />
              </Link>
            </div>
            <div className="lg:hidden md:hidden visible bg-[#F0F2F5] p-2 opacity-[0.5] rounded-full">
              <Link>
                <IoMenu size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:gap-16 gap-9 mt-3 md:pl-5 md:pr-32 opacity-[0.5]">
          <Link className="md:btn md:btn-ghost md:text-[28px] text-[28px]">
            <FiHome />
          </Link>
          <Link className="md:btn md:btn-ghost md:text-[28px] text-[28px]">
            <MdOutlineOndemandVideo />
          </Link>
          <Link className="md:btn md:btn-ghost md:text-[28px] text-[28px]">
            <RiStore2Line />
          </Link>
          <Link className="md:btn md:btn-ghost md:text-[28px] text-[28px]">
            <HiOutlineUserGroup />
          </Link>
          <div className="visible md:hidden flex gap-10 items-center">
            <Link>
              <div>
                <svg
                  viewBox="0 0 12 13"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="x19dipnz x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                >
                  <g transform="translate(-450 -1073)">
                    <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path>
                  </g>
                </svg>
              </div>
            </Link>
            <Link>
              <IoNotificationsOutline size={30} />
            </Link>
          </div>
        </div>
        <div className="lg:flex items-center gap-2 hidden lg:visible">
          <div className="bg-[#F0F2F5] p-2 rounded-full">
            <Link>
              <CgMenuGridO size={32} />
            </Link>
          </div>
          <div className="bg-[#F0F2F5] p-[14px] rounded-full">
            <Link>
              <FaFacebookMessenger size={20} />
            </Link>
          </div>
          <div className="bg-[#F0F2F5] p-[12px] rounded-full">
            <Link>
              <RiNotification2Fill size={24} />
            </Link>
          </div>
          <div>
            <Link>
              <img
                className="w-12 rounded-full"
                src="https://en.reset.org/app/themes/reset/images/no-author.png"
                alt=""
              />
            </Link>
          </div>
          <div className="md:flex hidden lg:hidden bg-[#F0F2F5] p-2 opacity-[0.5] rounded-full">
            <Link>
              <IoMenu size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
