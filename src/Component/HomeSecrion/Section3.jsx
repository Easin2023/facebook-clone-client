import React from "react";
import Sponsored from "../Sponsored/Sponsored";
import HomeFriendsRequestCard from "../HomeFriendsRequestCard/HomeFriendsRequestCard";

const Section3 = () => {
  return (
    <div className="lg:w-72 mt-5">
      <h1 className="font-medium mb-3 text-[18px]">sponsored</h1>
      <Sponsored />
      <Sponsored />
      <hr />
      <h1 className="font-medium mb-3 text-[18px] mt-2">Friend Request</h1>
      <HomeFriendsRequestCard />
    </div>
  );
};

export default Section3;
