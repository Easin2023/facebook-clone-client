import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Section1 = () => {
  return (
    <div>
      <div className="flex flex-col w-full mt-10">
        <button className="flex items-center justify-start btn w-full">
          <img
            className="w-10 rounded-full"
            src="https://i.ibb.co/5MWWZD7/394559949-374692381622478-7628019852304827346-n-1-removebg-preview-1.png"
            alt=""
          />
          <span>Easin Arafat</span>
        </button>
        <button className="flex items-center justify-start btn w-full">
          <img
            className="w-12"
            src="https://i.ibb.co/zHdx3bt/images-removebg-preview.png"
            alt=""
          />
          <span>Friends</span>
        </button>
        <button className="flex items-center btn justify-start w-full">
          <img
            className="w-10"
            src="https://i.ibb.co/f2gJ7fm/images-2-removebg-preview-1.png"
            alt=""
          />
          <span>Feeds</span>
        </button>
        <button className="flex items-center btn justify-start w-full">
          <img
            className="w-10"
            src="https://i.ibb.co/VppHNLn/images-1-removebg-preview.png"
            alt=""
          />
          <span>Groups</span>
        </button>
        <button className="flex items-center btn justify-start w-full">
          <img
            className="w-9"
            src="https://i.ibb.co/71hJtxj/images-2-removebg-preview.png"
            alt=""
          />
          <span>Marketplace</span>
        </button>
        <button className="flex items-center justify-start btn w-full">
          <img
            className="w-8"
            src="https://i.ibb.co/2n3sMCm/images-3-removebg-preview.png"
            alt=""
          />
          <span>Video</span>
        </button>
        <button className="flex items-center justify-start btn w-full">
          <span className="bg-[#c8c9cc] p-3 rounded-full">
            <IoIosArrowDown />
          </span>
          <span>see more</span>
        </button>
      </div>
    </div>
  );
};

export default Section1;
