// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import sliderocean from "../../Assets/Images/son.jpg";
import News from "../News/News";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./styles.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="swiper">
        <img src={sliderocean} alt="" />
        <div className="sliderText">
          <News />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
