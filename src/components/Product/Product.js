import React from "react";
import "./styles.scss";
import Footer from "../../components/Footer2/Footer2";

const products = [
  {
    id: 1,
    img: require("../../Assets/Images/ocb1.png"),

    description:
      "COOKIES WITH COCOA CREAM FILLING 44gr 24x6 2950  CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 2,
    img: require("../../Assets/Images/ocb2.png"),

    description:
      "COOKIES WITH COCOA CREAM FILLING 44gr 24x6 2950  CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 3,
    img: require("../../Assets/Images/ocb3.png"),

    description:
      "COOKIES WITH COCOA CREAM FILLING 44gr 24x6 2950  CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 31,
    img: require("../../Assets/Images/ocb27.png"),
    description:
      "DENGO BISCUITS WITH COCOA CREAM FILLING 100gr 24x6 1500 CARTOON IN 40 HC CONTAINER",
    discount: "NEW",
  },
  {
    id: 6,
    img: require("../../Assets/Images/ocb6.png"),

    description:
      "BISCUITS WITH COCOA DROPS 62gr 24x6 1730 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 7,
    img: require("../../Assets/Images/ocb7.png"),
    description:
      "BISCUITS WITH COCOA CREAM FILLING 36gr 24x6 3600 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 8,
    img: require("../../Assets/Images/ocb8.png"),

    description:
      "BISCUITS WITH COCOA DROPS 62gr 24x6 1730  CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 4,
    img: require("../../Assets/Images/ocb4.png"),

    description:
      "DARK WAFER WITH COCOA CREAM 60gr 24x6 2200 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 5,
    img: require("../../Assets/Images/ocb5.png"),

    description:
      "WAFER WITH COCONAT AND VANILYA CREAM 60gr 24x6 2200 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 19,
    img: require("../../Assets/Images/ocb19.png"),
    description:
      "COCOA COATED WAFER WITH HAZELNUT CREAM 30gr 24x6 2700 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 27,
    img: require("../../Assets/Images/ocb21.png"),
    description:
      "WAFER COATED WITH COCOA CHOCOLATE 70gr 24x6 1700 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 26,
    img: require("../../Assets/Images/ocb23.png"),
    description:
      "DUEX WAFER CACAO COATED WİTH CACAO CREAM 30GR 48X6 1900 CARTON IN 40 HC CONTAINER",
    discount: "NEW",
  },

  {
    id: 11,
    img: require("../../Assets/Images/ocb11.png"),

    description:
      "WAFER COATED WITH COCOA CREAM 45gr 24x6 2700 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 12,
    img: require("../../Assets/Images/ocb12.png"),
    description:
      "WAFER COATED WITH WHITE CREAM 45gr 24x6 2700 CARTOON IN 40 HC CONTAINER",
  },

  {
    id: 15,
    img: require("../../Assets/Images/ocb15.png"),
    description:
      "HARD CANDY CENTER FILLED FRUIT FLAVORE 700grx10 2500  CARTOON IN 40 HC CONTAINER",
    discount: "NEW",
  },
  {
    id: 16,
    img: require("../../Assets/Images/ocb16.png"),
    description:
      "HARD CANDY CENTER FILLED COFFEE FLAVORE 700grx10 2500  CARTOON IN 40 HC CONTAINER",
    discount: "NEW",
  },
  {
    id: 25,
    img: require("../../Assets/Images/ocb22.png"),
    description:
      "HARD CANDY CENTER FILLED MILK FLAVORE 700grx10 2500  CARTOON IN 40 HC CONTAINER",
    discount: "NEW",
  },
  {
    id: 14,
    img: require("../../Assets/Images/ocb14.png"),
    description:
      "SOFT CANDY CENTER FILLED FRUIT CHEWS 700grx12 2500 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 28,
    img: require("../../Assets/Images/ocb24.png"),

    description:
      "HARD CANDY CENTER FILLED COFFEE FLAVORE 1000grx8pvc 2200 CARTOON IN 40 HC CONTAINER",
    discount: "NEW",
  },
  {
    id: 29,
    img: require("../../Assets/Images/ocb25.png"),

    description:
      "HARD CANDY CENTER FILLED MILK FLAVORE 1000grx8pvc 2200 CARTOON IN 40 HC CONTAINER",
    discount: "NEW",
  },
  {
    id: 30,
    img: require("../../Assets/Images/ocb26.png"),

    description:
      "HARD CANDY CENTER FILLED FRUIT FLAVORE 1000grx8pvc 2200 CARTOON IN 40 HC CONTAINER",
    discount: "NEW",
  },

  {
    id: 21,
    img: require("../../Assets/Images/sarı.png"),
    description:
      "DREAM BISCUIT WITH CARAMEL CHOCOLATE 40gr 24x6 1800 CARTOON IN 40 HC CONTAINER ",
  },
  {
    id: 22,
    img: require("../../Assets/Images/sarı1.png"),
    description:
      "DREAM BISCUIT WITH BANANA CHOCOLATE 40gr 24x6 1800 CARTOON IN 40 HC CONTAINER ",
  },
  {
    id: 23,
    img: require("../../Assets/Images/siyah.png"),
    description:
      "DREAM BISCUIT WITH COCOA CHOCOLATE 40gr 24x6 1800 CARTOON IN 40 HC CONTAINER ",
  },
  {
    id: 13,
    img: require("../../Assets/Images/ocb13.png"),
    description:
      "COCOA CAKE WITH COCONUT 50gr 24x6 1650 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 17,
    img: require("../../Assets/Images/ocb17.png"),
    description:
      "BISCUIT WITH MARSHMALLOW COATED BY COCOA 25gr 24x6 2850 CARTOON IN 40 HC CONTAINER",
  },

  {
    id: 9,
    img: require("../../Assets/Images/ocb9.png"),

    description:
      "MILKY CREAM FILLED COMPOUND CHOCOLATE 10grx100picesx8pvc 1750 CARTOON IN 40 HC CONTAINER",
  },

  {
    id: 10,
    img: require("../../Assets/Images/ocb10.png"),

    description:
      "MILKY CREAM FILLED COMPOUND CHOCOLATE 10grx100picesx1box 1750 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 20,
    img: require("../../Assets/Images/ocb20.png"),
    description:
      "DREAM BISCUIT WITH COCOA CHOCOLATE 11gr 48x12 2850 CARTOON IN 40 HC CONTAINER",
  },
  {
    id: 24,
    img: require("../../Assets/Images/maxcoco.png"),
    description:
      "CAKE FILLED WITH COCOA 40gr 24x6 1800 CARTOON IN 40 HC CONTAINER",
  },
];

const about = [
  {
    id: 2,
    smTitle: "Ocean Biscuit",
    mdTitle: "Our Quality & Sense",
    dsc:
      "To produce with perfectionism principle by adapting changing economic conditions. To work with certain rules and principles in a systematic manner in order to contribute Turkish economy. To comply fully....",
    btn: "Show More...",
  },
  {
    id: 3,
    smTitle: "Ocean Biscuit",
    mdTitle: "Our Mission & Vision",
    dsc:
      "To become a future company which contributes positive values to the Turkish economy while growing constantly through our respects humanity, environment and life and future. To raise the standards through...",
    btn: "Show More...",
  },
];

const NewProduct = (props) => {
  return (
    <>
      <div className="tahaNew">
        <div className="product-collection">
          <div className="leftSide">
            {/* <h2 className= "sm-title2">Ocean Biscuit </h2> */}
            <h2 className="md-title">About Us </h2>
            <p className="text-light">
              By getting benefit of experiences since 2007, Ocean biscuits got
              established in Turkey’s Istanbul in 2018. Its further step is to
              open up to the world market with its unique taste. Ocean Biscuits
              and Confectionary Industry has recorded remarkably rapid expansion
              and development due to its application of modern food processing
              techniques in all aspects of production...
            </p>
            <button
              onClick={() => props.handleShow(1)}
              type="button"
              className="btn-dark"
            >
              Show More...
            </button>
          </div>
          <div className="rightSide">
            {about.map((item) => (
              <div className="info1" key={item.id}>
                <h2 className="md-title">{item.mdTitle}</h2>
                <p className="text-light">{item.dsc}</p>
                <button
                  onClick={() => props.handleShow(item.id)}
                  type="button"
                  className="btn-dark"
                >
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="products">
          <div className="container">
            <div className="product-items">
              {products.map((item, index) => (
                <div className="product" key={index}>
                  <div className="product-content">
                    <div className="product-img">
                      <img src={item.img} alt="product image" />
                    </div>
                    {/* <div className= "product-btns">
									<a href="https://instagram.com/oceanbiskuvi?igshid=1k0lv5zk3f277" target="_blank">
										<i className="fab fa-instagram"/>
									</a>	
									<a href="https://twitter.com/biscuit_ocean?s=21" target="_blank">
										<i className="fab fa-twitter"/>
									</a>
									<a href="https://www.linkedin.com/in/muhammed-ammar-%C3%A7elenk-8061a1166/" target="_blank">
										<i className="fab fa-linkedin-in"/>
									</a>
								</div> */}
                  </div>

                  <div className="product-info">
                    <div className="product-name">{item.description}</div>
                  </div>
                  {item.discount && (
                    <div className="off-info">
                      <h2 className="sm-title">{item.discount}</h2>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewProduct;
