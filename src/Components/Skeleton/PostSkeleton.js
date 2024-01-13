import React from "react";
import { Card, CardContent, Skeleton} from "@mui/material";

const PostSkeleton = () => {
  return (
    <div className=" my-5  border rounded-lg shadow-xl bg-white">
      <Card>
        <CardContent className="flex">
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <CardContent className="w-full">
            <Skeleton animation="wave" height={10} width="35%" />
            <Skeleton animation="wave" height={10} width="80%" />
          </CardContent>
        </CardContent>

        <CardContent height={96}>
          {" "}
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default PostSkeleton;
