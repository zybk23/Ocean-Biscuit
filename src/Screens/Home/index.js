import React from "react";
import "./styles.scss";

import bgbis from "../../Assets/Images/ocb13.png";
import services from "../../Assets/Images/services.png";
import Swiper from "../../components/swiper/Swiper"
import Footer2 from "../../components/Footer2/Footer2"


class Home extends React.Component {
  render() {
    return (
      <section className={"home__section"}>
        <Swiper />

        <div
          style={{ backgroundImage: `url(${services})` }}
          className="home__section__info"
        >
          <div className="home__section__info__text">
            <p className="title">Welcome Ocean Biscuit</p>
            <p className="home__section__info__text__company">Our Company</p>
            <p className="long">
              By getting benefit of experiences since 2007, Ocean biscuits got
              established in Turkey’s Istanbul in 2018. Its further step is to
              open up to the world market with its unique taste.. Ocean Biscuits
              and Confectionary Industry has recorded remarkably rapid expansion
              and development due to its application of modern food processing
              techniques in all aspects of production...
              <a href={"/products"}>Read More {">"} </a>
            </p>
            <div className="home__section__info__icons">
              <div className="home__section__info__icons__side">
                <div className="home__section__info__icon">
                  <i className="fas fa-check-circle" />
                  <p>Quality Product</p>
                </div>
                <div className="home__section__info__icon">
                  <i className="fas fa-check-circle" />
                  <p>Safe Production</p>
                </div>
              </div>
              <div className="home__section__info__icons__side">
                <div className="home__section__info__icon">
                  <i className="fas fa-check-circle" />
                  <p>Delicious Product</p>
                </div>
                <div className="home__section__info__icon">
                  <i className="fas fa-check-circle" />
                  <p>Rich Nutritional V.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home__section__info__img">
            <div className="home__section__info__img__container">
              <img className="home__section__info__img1" src={bgbis} alt="" />
            </div>
          </div>
        </div>

        <Footer2/>
      </section>
    );
  }
}

export default Home;
