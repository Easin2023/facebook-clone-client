import React from "react";
import Section1 from "../../Component/HomeSecrion/Section1";
import Section2 from "../../Component/HomeSecrion/Section2";
import Section3 from "../../Component/HomeSecrion/Section3";

const Home = () => {
  return (
    <div className="bg-[#F0F2F5] flex h-full lg:gap-3">
      <div className="lg:w-72 ">
        <Section1 />
      </div>
      <div className="lg:w-[calc(100%-576px)] md:w-full w-full">
        <Section2 />
      </div>

      <div className="lg:w-72 lg:flex hidden">
        <Section3 />
      </div>
    </div>
  );
};

export default Home;
