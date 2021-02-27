import React from "react";
import Logo from "../../Assets/Images/oceonlogo.png";
import Button from "../Button/Button";
import "./styles.scss";

const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="left">
        <div className="logoTitle">
          <img width="100" height="100" src={Logo} alt="" />
        </div>
        <p>
          By getting benefit of experiences since 2007, Ocean biscuits got
          established in Turkey’s Istanbul in 2018.
        </p>
        <div className="icons">
          <a
            href="https://instagram.com/oceanbiskuvi?igshid=1k0lv5zk3f277"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/biscuit_ocean?s=21" target="_blank">
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-ammar-%C3%A7elenk-8061a1166/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>

      {/* <div className="middle">
				<h2>Product</h2>
				<ul>
					<li>Quality Product</li>
					<li>Delicious Product</li>
					<li>Safe Production</li>
					<li>Rich Nutritional V.</li>
				</ul>
			</div> */}
      <div className="right">
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Basak mah. Ertugrulgazi Cad. Kanlıca Sitesi Basaksehir –
                  İstanbul / Turkey
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-phone-volume" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>
                  +90 537 407 3977 <br />
                  +90 538 871 6083
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="far fa-envelope" />
              </div>
              <div className="text">
                <h3>E-Mail</h3>
                <p>export@oceanbiskuvi.com</p>
                <span>export2@oceanbiskuvi.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
