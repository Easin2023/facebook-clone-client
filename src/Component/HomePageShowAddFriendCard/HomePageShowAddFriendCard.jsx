import React, { useState } from "react";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdPersonAddAlt1,
} from "react-icons/md";

const datas = [
  { id: 1, url: "https://i.ibb.co/sW0CMqD/qqqwww.jpg", name: "Easin Arafat" },
  { id: 1, url: "https://i.ibb.co/sW0CMqD/qqqwww.jpg", name: "Easin Arafat" },
  { id: 1, url: "https://i.ibb.co/sW0CMqD/qqqwww.jpg", name: "Easin Arafat" },
  { id: 1, url: "https://i.ibb.co/sW0CMqD/qqqwww.jpg", name: "Easin Arafat" },
  { id: 1, url: "https://i.ibb.co/sW0CMqD/qqqwww.jpg", name: "Easin Arafat" },
  { id: 1, url: "https://i.ibb.co/sW0CMqD/qqqwww.jpg", name: "Easin Arafat" },
  { id: 1, url: "https://i.ibb.co/sW0CMqD/qqqwww.jpg", name: "Easin Arafat" },
];

const HomePageShowAddFriendCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === datas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? datas.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="rounded-lg mt-4  overflow-hidden relative bg-white h-[350px] p-4">
      <h1 className="">People You May Know</h1>
      <div
        className="flex w-[180px] gap-3 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {datas.map((data, index) => (
          <div
            key={index}
            className="shrink-0 w-[180px]  mt-6 h-64 rounded-lg shadow-lg"
          >
            <div className="max-w-[250px] relative h-[150px]">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={`${data.url}`}
                alt=""
              />
              <button className="absolute text-white text-3xl top-0 btn btn-circle btn-ghost right-0">
                <span className="mb-2">x</span>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center px-1">
              <h1 className="font-bold -ml-5">{data.name}</h1>
              <p className="text-gray-400">mutual friend</p>
              <button className=" btn  w-full mt-2 btn-sm">
                <MdPersonAddAlt1 size={20} color="#005DC7" />
                <span className="text-[#005DC7] font-bold">Add friend</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-40 right-0 btn btn-circle btn-square"
      >
        <MdArrowForwardIos size={20} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute ${
          currentIndex === 0 ? "hidden" : "flex"
        } top-40 btn btn-circle btn-square`}
      >
        <MdArrowBackIos size={20} />
      </button>
    </div>
  );
};

export default HomePageShowAddFriendCard;
