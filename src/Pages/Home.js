import React from "react";
import Layout from "../Layout/Layout";
// import SearchBar from "../Components/SearchBar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SideBar from "../Components/SideBar";
// import { Grid } from "@mui/material";
import MiddleBar from "../Components/MiddleBar";
import RightBar from "../Components/RightBar";
const HomeScreen = () => {
  return (
    <Layout>
      <div className="my-8 lg:w-9/12 md:w-10/12 w-11/12 mx-auto grid grid-cols-8  gap-4">
          <div className="col-span-2" ><SideBar/></div>
          <div className="col-span-8 lg:col-span-4 md:col-span-6"><MiddleBar/></div>
          <div className="col-span-2"><RightBar/></div>
      </div>
      
    </Layout>
  );
};

export default HomeScreen;
