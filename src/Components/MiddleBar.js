import React from "react";

import PostCard from "./PostCard";
import HeadBar from "./HeadBar";

const MiddleBar = () => {
  
  return (
    <>
      <HeadBar />
      {
        [...Array(10)].map((_, index) => (
          <PostCard
          key={index}
          isLoading={true}
          profileImage={"profilePic.jpeg"}
          name={"Tyrant Gaming"}
          designation={"Student at Narula Institute Of Technology"}
          image={"linkedinPost.png"}
        />
        ))
      }

     
    </>
  );
};

export default MiddleBar;
