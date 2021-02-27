import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "./news.scss";

const Fairs = [
  {
    id: 1,
    name: "2020 Dubai GulFood",
    description:
      "Şubat ayında düzenlenen Gulfood Dubai Fuarı, 2019 yılında 5.000 katılımcı firma ve 95.000 ziyaretçiye.... ",
    target: "https://www.veniatravel.com/gulfood-2021.html",
    time: "25 Fubruary 2020",
    images: [
      {
        id: 1,
        src: require("../../Assets/fuar/dubai.jpeg"),
      },
    ],
  },
  {
    id: 2,
    name: "Germany ISM Fair 2020",
    description:
      "ISM Cologne, the world’s leading trade fair for confectionery and snacks offers inspiration and innovation...",
    target: "https://www.ism-cologne.com/",

    time: "02-05 Fubruary 2020",
    images: [
      {
        id: 1,
        src: require("../../Assets/fuar/germany1.jpeg"),
      },
      {
        id: 2,
        src: require("../../Assets/fuar/germany2.jpeg"),
      },
      {
        id: 3,
        src: require("../../Assets/fuar/germany3.jpeg"),
      },
      {
        id: 4,
        src: require("../../Assets/fuar/germany4.jpeg"),
      },
      {
        id: 5,
        src: require("../../Assets/fuar/germany5.jpeg"),
      },
      {
        id: 6,
        src: require("../../Assets/fuar/germany5.jpeg"),
      },
    ],
  },
  {
    id: 3,
    name: "İstanbul 2019 Gıda Fuarı",
    description:
      "Türk gıda sektörünün uluslararası buluşma noktası olan WorldFood İstanbul birçok yeni ürünü ve en son teknolojileri....",
    target: "https://worldfood-istanbul.com/Ana-Sayfa",
    time: "04-07 September 2019",
    images: [
      {
        id: 1,
        src: require("../../Assets/fuar/istanbul1.jpg"),
      },
      {
        id: 2,
        src: require("../../Assets/fuar/istanbul2.JPEG"),
      },
      {
        id: 3,
        src: require("../../Assets/fuar/istanbul3.JPEG"),
      },
      {
        id: 4,
        src: require("../../Assets/fuar/istanbul5.jpeg"),
      },
    ],
  },
];

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const News = () => {
  return (
    <div className="blog-post">
      <Swiper
        className="blog-post-fair"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {Fairs.map((item) => (
          <SwiperSlide key={item.id} className="blog-post-fair-swiperSlide">
            <Swiper
              className="blog-post__img"
              slidesPerView={1}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
            >
              {item.images.map((item) => (
                <SwiperSlide key={item.id} className="blog_post-slide">
                  <img src={item.src} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="blog-post__info">
              <div className="blog-post__date">
                <span>{item.time}</span>
              </div>
              <h1 className="blog-post__title">{item.name}</h1>
              <p className="blog-post__text">{item.description}</p>
              {/* <a href={item.target} className="blog-post__cta" target="_blank">
                Read More
              </a> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
