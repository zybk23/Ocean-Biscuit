import React from "react";
import "./styles.scss";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import Logo from "../Assets/Images/oceonlogo.png";

class Navigation extends React.Component {
  ChangeNav = () => {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    navLinks.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = ``;
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });

    nav.classList.toggle("nav-active");
  };
  render() {
    return (
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className={"nav-links"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products & AboutUs</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a className="withIcon" href="/contact">
              <FaMailBulk />
              <p>export@oceanbiskuvi.com</p>
            </a>
          </li>
          <li>
            <a className="withIcon" href="/contact">
              <FaPhone />
              <p>export@oceanbiskuvi.com</p>
            </a>
          </li>
        </ul>
        <div className={"menu"} onClick={this.ChangeNav}>
          <div className={"line-1"} />
          <div className={"line-2"} />
          <div className={"line-3"} />
        </div>
      </nav>
    );
  }
}

export default Navigation;
