import React from "react";
import Section1 from "../../Component/HomeSecrion/Section1";
import Section2 from "../../Component/HomeSecrion/Section2";
import Section3 from "../../Component/HomeSecrion/Section3";

const Home = () => {
  return (
    <div className="bg-[#F0F2F5] flex h-[100vh] gap-10">
      <div className="w-72">
        <Section1 />
      </div>
      <div className="">
        <Section2 />
      </div>
      <div className="w-72">
        <Section3 />
      </div>
    </div>
  );
};

export default Home;
