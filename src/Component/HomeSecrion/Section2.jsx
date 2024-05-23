import React from "react";

import StorySection from "../StorySection/StorySection";
import CreatePost from "../CreatePost/CreatePost";
import PostCards from "../PostCards/PostCards";
import ResponsiveCreatePost from "../ResponsiveCreatePost/ResponsiveCreatePost";
import ProfilePictureCard from "../ProfilePictureCard/ProfilePictureCard";
import VideoPostCard from "../VideoPostCard/VideoPostCard";
import AllReelsCard from "../AllReelsCard/AllReelsCard";

const Section2 = () => {
  return (
    <div className="">
      <StorySection />

      {/* CreatePost */}
      <div>
        <div className="md:flex hidden">
          <CreatePost />
        </div>

        {/* small Devise create post */}
        <ResponsiveCreatePost />
      </div>

      {/* PostCards */}
      <div>
        <PostCards />
        <ProfilePictureCard />
        <VideoPostCard />
      </div>

      {/* reel cards */}
      <div>
        <AllReelsCard />
      </div>
    </div>
  );
};

export default Section2;
