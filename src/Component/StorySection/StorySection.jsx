import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
const StorySection = () => {
  return (
    <div className="mt-5 overflow-x-scroll flex gap-2">
      <Link>
        <div className="md:h-[200px] h-[150px] cursor-pointer relative rounded-lg bg-white md:w-32 w-24">
          <img
            className="md:h-[150px] h-[110px] hover:scale-110 transition-all duration-300 w-full bg-cover rounded-lg hover:opacity-75"
            src="https://i.ibb.co/5MWWZD7/394559949-374692381622478-7628019852304827346-n-1-removebg-preview-1.png"
            alt=""
          />
          <div>
            <span className="p-[3px] md:text-3xl text-2xl bg-white rounded-full absolute  md:right-12 right-[36px] top-[95px] md:top-[130px]">
              <FaCirclePlus color="#075CE5" />
            </span>
            <p className="md:text-[12px] text-[10px] text-center mt-4">
              Create story
            </p>
          </div>
        </div>
      </Link>

      <div className="md:h-[200px] h-[150px] cursor-pointer shrink-0 overflow-hidden relative rounded-lg md:w-32 w-24">
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
          <p className="text-white font-normal md:text-sm text-[10px] absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
      <div className="md:h-[200px] h-[150px] cursor-pointer shrink-0 overflow-hidden relative rounded-lg md:w-32 w-24">
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
          <p className="text-white font-normal md:text-sm text-[10px] absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
      <div className="md:h-[200px] h-[150px] cursor-pointer shrink-0 overflow-hidden relative rounded-lg md:w-32 w-24">
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
          <p className="text-white font-normal md:text-sm text-[10px] absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>

      <div className="md:h-[200px] h-[150px] cursor-pointer shrink-0 overflow-hidden relative rounded-lg md:w-32 w-24">
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
          <p className="text-white font-normal md:text-sm text-[10px] absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
      <div className="md:h-[200px] h-[150px] cursor-pointer shrink-0 overflow-hidden relative rounded-lg md:w-32 w-24">
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
          <p className="text-white font-normal md:text-sm text-[10px] absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
      <div className="md:h-[200px] h-[150px] cursor-pointer shrink-0 overflow-hidden relative rounded-lg md:w-32 w-24">
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
          <p className="text-white font-normal md:text-sm text-[10px] absolute bottom-2  left-2">
            Easin Arafat
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
