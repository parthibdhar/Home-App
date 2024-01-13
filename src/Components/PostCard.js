import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PostSkeleton from "./Skeleton/PostSkeleton";

const PostCard = ({ isLoading, profileImage, name, designation, image }) => {
  const postCardDiv = "my-5 border rounded-lg shadow-xl bg-white";
  console.log(isLoading);
  const [loading, setLoading] = useState(isLoading);
  const changeLoad = () => {
    setTimeout(() => {
      setLoading(false);
      console.log(loading);
    }, 3000);
  };

  useEffect(() => {
    changeLoad();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <PostSkeleton />
      ) : (
        <div className={postCardDiv}>
          <Card>
            <CardContent>
              <div className="flex">
                <img
                  src={`/images/${profileImage}`}
                  alt=""
                  srcset=""
                  className="w-12 rounded-full"
                />
                <div className="mx-4">
                  <Typography> {name ? name : null} </Typography>
                  <Typography sx={{ color: "#BFBFBF" }}>
                    {designation ? designation : null}
                  </Typography>
                </div>
              </div>
              <h5 className="font-bold mt-4">Description</h5>
            </CardContent>
            <CardMedia
              component="img"
              image={`/images/${image}`}
              className="h-96 "
            ></CardMedia>
          </Card>
        </div>
      )}
    </>
  );
};

export default PostCard;
