import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdClose, MdMoreHoriz } from "react-icons/md";
import { PiShareFatThin } from "react-icons/pi";
import { SlLike } from "react-icons/sl";

const PostCards = () => {
  return (
    <div className="bg-white shadow-md mt-3 rounded-lg ">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="font-medium text-sm">Abdullah Al Amin</p>
            <p className="text-sm font-medium">10h</p>
          </div>
        </div>
        <div className="text-[24px] flex gap-2">
          <button>
            <MdMoreHoriz />
          </button>
          <button>
            <MdClose />
          </button>
        </div>
      </div>
      <div className="mx-3 p-2">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          deserunt doloremque vel repellendus, similique aspernatur odio
          accusamus distinctio quos, autem vero natus provident ipsa
          reprehenderit sed, atque modi. Repudiandae, illo.
        </p>
      </div>
      <div className="bg-slate-300">
        <div className="max-w-full md:min-w-[500px] mt-4 w-[calc(-243.866px + 75.0357vh)] overflow-hidden">
          <div className="relative md:h-[750px] w-full px-4">
            <img
              className="h-full w-full object-contain mx-auto"
              src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
              alt="Architectural Digest"
            />
          </div>
        </div>
      </div>

      <div className="my-2 flex justify-between mx-3">
        <h1 className="p-1 w-5 h-5 flex justify-center items-center rounded-full bg-[#039CFC]">
          <AiFillLike color="#fff" />
        </h1>
        <span>comments</span>
      </div>
      <hr />
      <div className="w-full flex justify-between mt-2">
        <button className="btn btn-ghost flex-1 text-[17px]">
          <SlLike />
          <span className="text-[14px]">Like</span>
        </button>
        <button className="btn btn-ghost flex-1 text-[17px]">
          <FaRegComment />
          <span className="text-[14px]">comments</span>
        </button>
        <button className="btn btn-ghost flex-1 text-[17px]">
          <PiShareFatThin />
          <span className="text-[14px]">Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCards;
