import * as React from "react";
import { Grid } from "@mui/material";

const Navbar = () => {
  return (
    <>
    <div className="sticky top-0 z-10">
      <Grid container className="bg-white shadow-lg py-2">
        <Grid item xs={4}>
          <img
            src="/images/logo.png"
            alt=""
            srcset=""
            className="rounded-full w-10 mx-5 "
          />
        </Grid>
        <Grid item container xs={4}>
          <Grid item xs={6}>
            <img
              src="/images/faviconImage.jpg"
              alt=""
              srcset=""
              className="w-8 "
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src="/images/faviconText.png"
              alt=""
              srcset=""
              className="w-8 float-right "
            />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <img src="/images/profilePic.jpeg" alt="" srcset="" className="w-10 rounded-full float-right mx-5"/>
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default Navbar;
