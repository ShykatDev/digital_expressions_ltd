import React from "react";
import { services, logo, grad1, grad2 } from "../../Assets";
import { Link as ScrollLink } from "react-scroll";
import { BsClockFill, BsHeadset, BsFillHeartFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdPriceCheck } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import OddServies from "../../Components/services/OddServies";
import EvenServices from "../../Components/services/EvenServices";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <section className="services-page">
      <div className="first-sec">
        <motion.h1
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          The Power of Imagination
        </motion.h1>

        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1], rotate: [180, 0] }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="sec-title"
        >
          <h1>Our Services</h1>
        </motion.div>

        <div className="contents">
          <motion.div className="left-cont">
            <motion.p
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit atque velit exercitationem distinctio quibusdam
              cupiditate a, maiores deleniti itaque iure, hic, asperiores
              pariatur molestiae enim voluptas quo eveniet est accusamus!
            </motion.p>

            <ScrollLink
              className="navLink"
              to="allServices"
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
            >
              <motion.button
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                Explore
              </motion.button>
            </ScrollLink>
          </motion.div>
          <div className="banner-cont">
            <motion.img
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.7, delay: 1 }}
              src={services}
              alt=""
            />
          </div>
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="right-cont"
          >
            <div>
              <div className="cir"></div>
              <h5>Infinite Power</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              doloribus incidunt totam assumenda ipsam odio quia harum provident
              beatae impedit!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="addons">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="item"
        >
          <h2>Addons</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            nesciunt eius mollitia dolore aut! Atque harum repellat fugiat
            voluptatem eaque.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="item"
        >
          <BsClockFill className="ico" />
          <h2>Quick Order</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            corporis corrupti dolorum at ea. Quibusdam.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="item"
        >
          <FaShippingFast className="ico" />
          <h2>Extra Fast Delivery</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            corporis corrupti dolorum at ea. Quibusdam.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="item"
        >
          <MdPriceCheck className="ico" />
          <h2>Best Price</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            corporis corrupti dolorum at ea. Quibusdam.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="item"
        >
          <BsHeadset className="ico" />
          <h2>24x7 Support</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            corporis corrupti dolorum at ea. Quibusdam.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="item"
        >
          <GiReturnArrow className="ico" />
          <h2>Return Policy</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            corporis corrupti dolorum at ea. Quibusdam.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="item"
        >
          <BsFillHeartFill className="ico" />
          <h2>Suitable for all</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            corporis corrupti dolorum at ea. Quibusdam.
          </p>
        </motion.div>
      </div>

      <div id="allServices">
        <motion.h1
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
        >
          Services we provide
        </motion.h1>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          reiciendis tempora natus, debitis consectetur impedit.
        </motion.p>

        <OddServies />
        <EvenServices />
        <OddServies />
        <EvenServices />
        <OddServies />
        <EvenServices />
      </div>

      <div className="stats">
        <motion.h2
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
        >
          Our Stats
        </motion.h2>
        <motion.p
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          asperiores magnam obcaecati ratione beatae.
        </motion.p>

        <div className="row">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="col1"
          >
            <h3>7+ years of exprience</h3>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col2"
          >
            <h3>100+ project complete </h3>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="col3"
          >
            <h3>100+ happy client</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
