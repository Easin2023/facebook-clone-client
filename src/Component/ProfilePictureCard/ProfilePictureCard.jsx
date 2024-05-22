import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { MdClose, MdMoreHoriz } from "react-icons/md";
import { PiShareFatThin } from "react-icons/pi";
import { SlLike } from "react-icons/sl";

const ProfilePictureCard = () => {
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

      <div className="bg-white">
        <div className="w-full relative md:h-[400px] h-[300px] overflow-hidden ">
          <img
            className="object-contain -mt-[70px] md:-mt-[50px] lg:-mt-[70px] w-full h-full"
            src="https://i.pinimg.com/736x/14/14/38/141438fcf06d3af40c515fe0de3217a2.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex justify-center items-center  ">
            <div className="bg-white  md:w-[350px] w-[250px] h-[250px] rounded-full md:h-[350px] overflow-hidden px-4 mx-auto border-4 border-white">
              <img
                className="object-cover w-full h-full"
                src="https://i.ibb.co/sW0CMqD/qqqwww.jpg"
                alt="Architectural Digest"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
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

export default ProfilePictureCard;
