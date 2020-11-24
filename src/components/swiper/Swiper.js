// Import Swiper React components
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import sliderocean from "../../Assets/Images/son.jpg"
import img2 from "../../Assets/Images/img2.jpg"
import img3 from "../../Assets/Images/img3.jpg"
import img4 from "../../Assets/Images/img4.jpg"

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "./styles.scss"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="swiper">
		  <img  src={sliderocean} alt=""/>
		  <div className="sliderText">
			<p>Welcome</p>
		  	<p>Ocean Biscuit</p>
			<p>Spreading delight worldwide</p>
		  </div>
		  
	  </SwiperSlide>
    </Swiper>
  );
};