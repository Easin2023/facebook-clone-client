import React from "react";

const HomeFriendsRequestCard = () => {
  return (
    <div className="flex items-center gap-3 mt-2 p-4 rounded-xl hover:bg-slate-200 cursor-pointer hover:shadow-sm">
      <div className="pb-6">
        <img
        className="w-12 rounded-full h-12"
        src="https://i.ibb.co/sW0CMqD/qqqwww.jpg" alt="" />
      </div>
      <div>
        <h1 className="text-sm font-medium">Abdullah Al Amin</h1>
        <p className="text-xs">7 mutual friend</p>
        <div className="flex gap-4 mt-3">
          <button className="btn btn-primary btn-sm">conform</button>
          <button className="btn btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default HomeFriendsRequestCard;
