import React from "react";

const SideBar = () => {
  return (
    <div className=" hidden md:block border-1 border-gray-400 shadow-lg  rounded-lg h-96  bg-white">
      <img
        src="/images/profileBackground.jpg"
        alt=""
        srcset=""
        className="h-16 w-full rounded-t-lg"
      />
      <div className=" flex-colo text-center gap-2 -mt-8">
        <img
          src="/images/profilePic.jpeg"
          alt=""
          srcset=""
          className="w-16 rounded-full"
        />
        <h3 className=" font-bold  "> Tyrant Gaming</h3>
      </div>

      <p className="text text-center font-extralight text text-gray-400 px-2">
        Student at Narula Institute Of Technology
      </p>
    
    </div>
  );
};

export default SideBar;
