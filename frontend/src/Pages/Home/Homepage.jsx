import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeBanner, others } from "../../Assets";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import animations from "../../animation/gsapAnim";

const Homepage = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let creative = useRef(null);
  let context = useRef(null);
  let establish = useRef(null);
  let company = useRef(null);
  let mainCTA = useRef(null);

  useEffect(() => {
    animations(creative, company, establish, context, mainCTA);
  }, []);

  return (
    <div id="homepage">
      <div className="titleSection">
        <div className="firstRow">
          <h1 ref={(el) => (creative = el)}>Creative</h1>
          <p ref={(el) => (context = el)}>
            We are digital expressions. Digital Expressions is a creative
            digital agency with sevaral services which focused on quality and
            innovations for your company.
          </p>
        </div>
        <div className="secondRow">
          <div className="establish" ref={(el) => (establish = el)}>
            <small>Establish</small>
            <h2>2016</h2>
          </div>
          <h1 ref={(el) => (company = el)}>Digital Expressions</h1>
          <button className="mainCTA" ref={(el) => (mainCTA = el)}>
            <Link className="cta" to="/contact">
              Contact Us <BsArrowRight className="arrowRight" />
            </Link>
          </button>
        </div>
      </div>
      <div className="link-banner">
        <div className="links">
          <ScrollLink
            className="navLink"
            to="about"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
          >
            <button className="active">About Us</button>
          </ScrollLink>

          <ScrollLink
            className="navLink"
            to="services"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
          >
            <button>Services</button>
          </ScrollLink>

          <ScrollLink
            className="navLink"
            to="projects"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
          >
            <button>Projects</button>
          </ScrollLink>

          <ScrollLink
            className="navLink"
            to="client"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
          >
            <button>Client Says</button>
          </ScrollLink>
          <div className="social">
            <div className="line"></div>
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>
        <div className="banner">
          <img src={homeBanner} alt="" />
        </div>
      </div>

      <div className="company-slider">
        <Slider {...settings}>
          <div className="companyImg">
            <img src={others} alt="company1" />
          </div>
          <div className="companyImg">
            <img src={others} alt="company1" />
          </div>
          <div className="companyImg">
            <img src={others} alt="company1" />
          </div>
          <div className="companyImg">
            <img src={others} alt="company1" />
          </div>
          <div className="companyImg">
            <img src={others} alt="company1" />
          </div>
          <div className="companyImg">
            <img src={others} alt="company1" />
          </div>
          <div className="companyImg">
            <img src={others} alt="company1" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Homepage;
