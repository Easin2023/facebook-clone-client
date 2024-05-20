import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
const StorySection = () => {
  return (
    <div className="mt-5 flex gap-2">
      <div className="h-[200px] cursor-pointer relative rounded-lg bg-white w-32 ">
        <img
          className="h-[150px] hover:scale-110 transition-all duration-300 w-full bg-cover rounded-lg hover:opacity-75"
          src="https://i.ibb.co/5MWWZD7/394559949-374692381622478-7628019852304827346-n-1-removebg-preview-1.png"
          alt=""
        />
        <div>
          <span className="p-[3px] bg-white rounded-full absolute  right-12 top-[130px]">
            <FaCirclePlus size={30} color="#075CE5" />
          </span>
          <p className="text-[12px] text-center mt-4">Create story</p>
        </div>
      </div>

      <div className="h-[200px] cursor-pointer overflow-hidden relative rounded-lg w-32">
        <img
          className="w-full hover:scale-110 transition-all duration-300 relative bg-black hover:opacity-80 "
          src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
          alt=""
        />
        <div className="">
          <img
            className="w-8 h-8 bg-[#075CE5] p-[3px] rounded-full absolute top-2 left-2"
            src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
            alt=""
          />
          <p className="text-white font-normal text-sm absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
      <div className="h-[200px] cursor-pointer overflow-hidden relative rounded-lg w-32">
        <img
          className="w-full hover:scale-110 transition-all duration-300 relative bg-black hover:opacity-80 "
          src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
          alt=""
        />
        <div className="">
          <img
            className="w-8 h-8 bg-[#075CE5] p-[3px] rounded-full absolute top-2 left-2"
            src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
            alt=""
          />
          <p className="text-white font-normal text-sm absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
      <div className="h-[200px] cursor-pointer overflow-hidden relative rounded-lg w-32">
        <img
          className="w-full hover:scale-110 transition-all duration-300 relative bg-black hover:opacity-80 "
          src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
          alt=""
        />
        <div className="">
          <img
            className="w-8 h-8 bg-[#075CE5] p-[3px] rounded-full absolute top-2 left-2"
            src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
            alt=""
          />
          <p className="text-white font-normal text-sm absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
      <div className="h-[200px] cursor-pointer overflow-hidden relative rounded-lg w-32">
        <img
          className="w-full hover:scale-110 transition-all duration-300 relative bg-black hover:opacity-80 "
          src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
          alt=""
        />
        <div className="">
          <img
            className="w-8 h-8 bg-[#075CE5] p-[3px] rounded-full absolute top-2 left-2"
            src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
            alt=""
          />
          <p className="text-white font-normal text-sm absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
