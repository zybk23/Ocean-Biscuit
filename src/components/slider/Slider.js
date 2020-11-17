import React, { useState } from "react";
import slider1 from "../../Assets/Images/img1.jpg";
import slider2 from "../../Assets/Images/img2.jpg";
import slider3 from "../../Assets/Images/img3.jpg";
import slider4 from "../../Assets/Images/img4.jpg";

import "./styles.scss";
const sliderItems = [
  {
    id: 1,
    image: slider1,
    title: "Blonkisoaz",
    description: "Omuke trughte a otufta",
  },
  {
    id: 2,
    image: slider2,
    title: "Blonkisoaz",
    description: "Omuke trughte a otufta",
  },
  {
    id: 3,
    image: slider3,
    title: "Blonkisoaz",
    description: "Omuke trughte a otufta",
  },
  {
    id: 4,
    image: slider4,
    title: "Blonkisoaz",
    description: "Omuke trughte a otufta",
  },
  {
    id: 5,
    image: slider2,
    title: "Blonkisoaz",
    description: "Omuke trughte a otufta",
  },
];
const Slider = (props) => {
  const [changeId, setChangeId] = useState(2);

  const changePicture = (id) => {
    const currentSlider = sliderItems.find((i) => i.id == id);
    setChangeId(currentSlider.id);
  };

  return (
    <div className="home__section__slider">
      <div className="options">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={item.id == changeId ? "option active" : "option"}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => changePicture(item.id)}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking" />
              </div>
              <div className="info">
                <div className="main">{item.title}</div>
                <div className="sub">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="http://victorofvalencia-blog.tumblr.com"
        target="_blank"
        className="credit"
      >
        Photos from Victor of Valencia on tumblr
      </a>
    </div>
  );
};

export default Slider;
