import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { LuClapperboard } from "react-icons/lu";
import { MdPhotoLibrary } from "react-icons/md";

const CreatePost = () => {
  return (
    <div className="h-[130px] bg-white mt-5 rounded-lg">
      <div className="flex gap-4 items-center mx-5 py-3">
        <img
          className="w-10 rounded-full h-10"
          src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
          alt=""
        />
        <input
          className="bg-[#F0F2F5] h-[40px] placeholder:pl-4 rounded-full w-full"
          placeholder="What's on your mind, Easin?"
          type="text"
        />
      </div>
      <hr />
      <div className="grid grid-cols-3 mt-3">
        <button className="flex btn btn-ghost">
          <BsCameraVideoFill size={24} color="#E42645"  />
          <span>Live Video</span>
        </button>
        <button className="flex btn btn-ghost">
          <MdPhotoLibrary size={24} color="#E42645" />
          <span>Photo/Video</span>
        </button>
        <button className="flex btn btn-ghost ">
          <LuClapperboard size={24} color="#E42645" />
          <span>Reel</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
