import React from "react";
import { MdPhotoLibrary } from "react-icons/md";
const ResponsiveCreatePost = () => {
  return (
    <div>
      <div className="md:hidden bg-white h-[60px] shadow-lg flex items-center justify-around mt-3 p-3 rounded-lg ">
        <img
          className="w-10 h-10 rounded-full"
          src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
          alt=""
        />
        <input
          placeholder="What's on your mind?"
          className="bg-[#F0F2F5] h-[30px] rounded-full placeholder:text-sm placeholder:pl-1 placeholder:text-black pl-3"
          type="text"
          name=""
          id=""
        />
        <div className="">
          <button className="flex flex-col items-center">
            <MdPhotoLibrary size={24} color="#E42645" />
            <span className="text-xs">photo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCreatePost;
