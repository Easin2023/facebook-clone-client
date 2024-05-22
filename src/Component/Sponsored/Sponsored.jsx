import React from "react";

const Sponsored = () => {
  return (
    <div className="ml-3">
      <div className="flex gap-4 items-center p-3 rounded-xl hover:bg-slate-300 transition cursor-pointer">
        <div className="w-[100px] h-[100px]">
          <img
            className="w-full h-full object-contain rounded-xl"
            src="https://images-cdn.ubuy.co.id/654228ac3e752c15836b1e18-architect-tshirt-gifts-architecture.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-medium text-sm">start to grow your e-commerce business</h1>
          <h1 className="text-xs">t-shirt.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
