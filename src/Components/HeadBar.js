import React from "react";
import { TextField } from "@mui/material";
import { GoFileMedia } from "react-icons/go";
import { MdEventNote } from "react-icons/md";
import { PiArticleNyTimesBold } from "react-icons/pi";

const HeadBar = () => {
  return (
   
      <div className=" border-1 border-gray-400 shadow-lg  rounded-lg p-4   bg-white">
        <div className="w-full flex items-center gap-4 mb-6 ">
          <img
            src="/images/profilePic.jpeg"
            alt=""
            srcset=""
            className="rounded-full w-12   "
          />

          <TextField
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: 25,
              },
            }}
            label="Start a post"
            className="w-full px-4"
          />
        </div>
        <div className=" grid grid-cols-3 px-8">
          <div className="col-span-1 flex  gap-3">
            <GoFileMedia size={20} className="text text-mediablue " />{" "}
            <p className="mx-2text text-textLight">Media</p>
          </div>
          <div className="col-span-1 flex justify-center gap-3">
            <MdEventNote className="text text-eventcolor  " size={20} />
            <p className="text text-textLight">Event</p>
          </div>
          <div className="col-span-1 flex justify-end gap-3">
            <PiArticleNyTimesBold
              className="text text-article "
              size={20}
            />
            <p className="text text-textLight">Article</p>
          </div>
        </div>
      </div>
    
  );
};

export default HeadBar;
