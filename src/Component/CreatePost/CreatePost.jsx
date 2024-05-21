import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { LuClapperboard } from "react-icons/lu";
import { MdPhotoLibrary } from "react-icons/md";

const CreatePost = () => {
  return (
    <div className="md:h-[130px] h-[90px] md:w-full w-[424px] bg-white md:mt-5 mt-3 rounded-lg">
      <div className="flex md:gap-4 gap-2 items-center md:mx-5 mx-2 md:py-3 py-1">
        <img
          className="md:w-10 w-7 rounded-full md:h-10 h-7"
          src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
          alt=""
        />
        <input
          className="bg-[#F0F2F5] md:h-[40px] h-[28px] placeholder:pl-4 rounded-full w-full"
          placeholder="What's on your mind, Easin?"
          type="text"
        />
      </div>
      <hr />
      <div className="grid grid-cols-3 md:mt-3 mt-[1.5px]">
        <button className="flex md:text-[22px] btn btn-ghost">
          <BsCameraVideoFill color="#E42645"  />
          <span className="md:text-[16px]">Live Video</span>
        </button>
        <button className="flex md:text-[22px] text btn btn-ghost">
          <MdPhotoLibrary  color="#E42645" />
          <span className="md:text-[16px]">Photo/Video</span>
        </button>
        <button className="flex md:text-[22px] btn btn-ghost ">
          <LuClapperboard color="#E42645" />
          <span className="md:text-[16px]">Reel</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
