import React, { useState } from "react";
import { FaClapperboard, FaPlay } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const content = [
  {
    id: 1,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    views: "13M",
  },
  {
    id: 2,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    views: "758K",
  },
  {
    id: 3,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    views: "3.3M",
  },
  {
    id: 4,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    views: "2.2M",
  },
];

const AllReelsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-[500px] relative w-full overflow-hidden mb-10 bg-white mt-4 shadow-md p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="text-sm md:text-xl font-medium flex items-center gap-4">
          <FaClapperboard />
          <h1>Reels and short video</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-sm btn-ghost text-blue-500">create</button>
          <button className="btn btn-circle btn-ghost">
            <IoIosMore size={20} />
          </button>
        </div>
      </div>

      <div className=" ">
        <div
          className="max-w-52 w-full h-[390px] flex transition-transform duration-500 ease-in-out  gap-4  mt-2 rounded-lg"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {content.map((video, index) => (
            <div className="shrink-0 relative w-full h-full" key={video.id}>
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
                src={video?.src}
              ></video>
              <div className="absolute flex items-center bottom-2 left-2 text-white">
                <FaPlay />
                <span>1.1M</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-60 right-0 btn btn-circle btn-square"
      >
        <MdArrowForwardIos size={20} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute ${
          currentIndex === 0 ? "hidden" : "flex"
        } top-60 btn btn-circle btn-square`}
      >
        <MdArrowBackIos size={20} />
      </button>
    </div>
  );
};

export default AllReelsCard;
