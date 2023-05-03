import React from "react";
import { homeBanner, smoke } from "../../Assets";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { team1 } from "../../Assets";
import { motion } from "framer-motion";
import { RiUser4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
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

  return (
    <section className="aboutPage-section">
      <div className="section-intro">
        <div className="info-sec">
          <motion.h1
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.7 }}
          >
            Digital <br /> <span>Expressions</span>
          </motion.h1>
          <motion.p
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae laborum doloribus tempore dolorum quo accusamus
            voluptatem cum error porro unde!
          </motion.p>

          <motion.div
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="section-title"
          >
            <h2>
              {" "}
              <RiUser4Line className="ico" /> About Us
            </h2>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="banner-sec"
        >
          <img src={homeBanner} alt="" />
        </motion.div>
      </div>

      <div className="aboutCont">
        <video
          className="bg-vid"
          src={smoke}
          autoPlay={true}
          loop={true}
        ></video>

        <motion.p
          whileInView={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ duration: 0.7 }}
          className="about-content"
        >
          Sed ut perspiciatis unde{" "}
          <span>
            <span>Neque </span>{" "}
          </span>
          x iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo.{" "}
          <span> voluptatem </span> enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. <span>Neque </span> porro
          quisquam est, qui dolorem ipsum quia dolor sit amet.
        </motion.p>
      </div>

      <div className="key-points">
        <motion.div
          whileInView={{ opacity: [0, 1], rotate: [-30, 0] }}
          transition={{ duration: 0.7 }}
          className="bigKey"
        >
          <h1>07</h1>
          <p>years of experience</p>
        </motion.div>

        <div className="title-left--keys">
          <motion.h1
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ duration: 0.7 }}
            className="keys-title"
          >
            Over the years
          </motion.h1>
          <motion.p
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="keys-subTitle"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            quidem!
          </motion.p>

          <div className="small-keys">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="key"
            >
              <h5>100+</h5>
              <p>projects done</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="key"
            >
              <h5>100+</h5>
              <p>projects done</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="key"
            >
              <h5>100+</h5>
              <p>projects done</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="feature-projects">
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.7 }}
          className="keys-title"
        >
          Feature Projects
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="keys-subTitle"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quidem!
        </motion.p>

        <div className="big-project">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [-100, 0] }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="banner"
          >
            <img src={homeBanner} alt="" />
            <div className="details">
              <div className="title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
              <div className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                praesentium ea facilis deserunt numquam autem accusantium quam
                odit qui dicta.
              </div>
              <Link to="/projects">
                <button className="viewMore">
                  View more <BsArrowRight className="arrow" />
                </button>
              </Link>
            </div>
          </motion.div>
          <div className="banner-group">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="small-banner"
            >
              <img src={homeBanner} alt="" />
              <div className="details">
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  praesentium ea facilis deserunt numquam autem accusantium quam
                  odit qui dicta.
                </div>
                <Link to="/projects">
                  <button className="viewMore">
                    View more <BsArrowRight className="arrow" />
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [100, 0] }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="small-banner"
            >
              <img src={homeBanner} alt="" />
              <div className="details">
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
                <div className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  praesentium ea facilis deserunt numquam autem accusantium quam
                  odit qui dicta.
                </div>
                <Link to="/projects">
                  <button className="viewMore">
                    View more <BsArrowRight className="arrow" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="vision">
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ duration: 0.7 }}
          className="keys-title"
        >
          Our vision
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="keys-subTitle"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quidem!
        </motion.p>

        <div className="vision-gal">
          <motion.div
            whileInView={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="card"
          >
            <h2>Always be nice and respectful</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="card"
          >
            <h2>Belive in dreames will becoming in reality</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="card"
          >
            <h2>Care and share with the less fortunate</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="card"
          >
            <h2>Own it! Even if it's a mistake</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="card"
          >
            <h2>Always cultivate and learn daily</h2>
          </motion.div>
        </div>
      </div>

      <div className="team">
        <motion.h1
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.7 }}
          className="keys-title"
        >
          Our team
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="keys-subTitle"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quidem!
        </motion.p>

        <Slider {...settings}>
          <div className="teamCard">
            <div className="tc1">
              <img src={team1} alt="" />
              <div className="info">
                <h4>Shykat Raha</h4>
                <p>Web Designer and Developer</p>
              </div>
            </div>
          </div>

          <div className="teamCard">
            <div className="tc2">
              <img src={team1} alt="" />
              <div className="info">
                <h4>Shykat Raha</h4>
                <p>Web Designer and Developer</p>
              </div>
            </div>
          </div>

          <div className="teamCard">
            <div className="tc3">
              <img src={team1} alt="" />
              <div className="info">
                <h4>Shykat Raha</h4>
                <p>Web Designer and Developer</p>
              </div>
            </div>
          </div>

          <div className="teamCard">
            <div className="tc4">
              <img src={team1} alt="" />
              <div className="info">
                <h4>Shykat Raha</h4>
                <p>Web Designer and Developer</p>
              </div>
            </div>
          </div>

          <div className="teamCard">
            <div className="tc5">
              <img src={team1} alt="" />
              <div className="info">
                <h4>Shykat Raha</h4>
                <p>Web Designer and Developer</p>
              </div>
            </div>
          </div>

          <div className="teamCard">
            <div className="tc6">
              <img src={team1} alt="" />
              <div className="info">
                <h4>Shykat Raha</h4>
                <p>Web Designer and Developer</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
