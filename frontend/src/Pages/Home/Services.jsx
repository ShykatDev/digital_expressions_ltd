import React, { useState } from "react";
import { homeBanner } from "../../Assets";
import { CgWebsite } from "react-icons/cg";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { MdMobileFriendly } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeShowcase1, setActiveShowcase1] = useState(true);
  const [activeShowcase2, setActiveShowcase2] = useState(false);
  const [activeShowcase3, setActiveShowcase3] = useState(false);
  const [activeShowcase4, setActiveShowcase4] = useState(false);

  const handleActiveShowcase = (act, inact1, inact2, inact3) => {
    act(true);
    inact1(false);
    inact2(false);
    inact3(false);
  };

  return (
    <div id="services">
      <div className="section-title">
        <div className="heading">
          <motion.h1
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ duration: 0.75 }}
          >
            Our <span>Services</span>
          </motion.h1>
          <div className="line"></div>
        </div>

        <motion.p
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.75 }}
        >
          Digital expressions is one-stop agency. We offer all the services you
          need to help get your business.
        </motion.p>
      </div>

      <motion.div
        className="service-section"
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.75 }}
      >
        <motion.div
          whileTap={{ y: [20, 0] }}
          transition={{ duration: 0.5 }}
          className={
            activeShowcase1 ? "single-service active" : "single-service"
          }
        >
          <div
            className="titleBar"
            onClick={(e) =>
              handleActiveShowcase(
                setActiveShowcase1,
                setActiveShowcase2,
                setActiveShowcase3,
                setActiveShowcase4
              )
            }
          >
            <div>
              <CgWebsite className="serviceIcon" />
              <h1>Website Design</h1>
            </div>
            {activeShowcase1 && (
              <p>
                We can build your responsive web solution your businees needs to
                make perfect first impression.
              </p>
            )}
            {activeShowcase1 ? (
              <BiUpArrow className="serviceArrow" />
            ) : (
              <BiDownArrow className="serviceArrow" />
            )}
          </div>
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="pictureCase"
          >
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          whileTap={{ y: [20, 0] }}
          transition={{ duration: 0.5 }}
          className={
            activeShowcase2 ? "single-service active" : "single-service"
          }
        >
          <div
            className="titleBar"
            onClick={(e) =>
              handleActiveShowcase(
                setActiveShowcase2,
                setActiveShowcase1,
                setActiveShowcase3,
                setActiveShowcase4
              )
            }
          >
            <div>
              <MdMobileFriendly className="serviceIcon" />
              <h1>App Design</h1>
            </div>
            {activeShowcase2 && (
              <p>
                We can build your responsive web solution your businees needs to
                make perfect first impression.
              </p>
            )}
            {activeShowcase2 ? (
              <BiUpArrow className="serviceArrow" />
            ) : (
              <BiDownArrow className="serviceArrow" />
            )}
          </div>
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="pictureCase"
          >
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          whileTap={{ y: [20, 0] }}
          transition={{ duration: 0.5 }}
          className={
            activeShowcase3 ? "single-service active" : "single-service"
          }
        >
          <div
            className="titleBar"
            onClick={(e) =>
              handleActiveShowcase(
                setActiveShowcase3,
                setActiveShowcase1,
                setActiveShowcase2,
                setActiveShowcase4
              )
            }
          >
            <div>
              <FaConnectdevelop className="serviceIcon" />
              <h1>Development</h1>
            </div>
            {activeShowcase3 && (
              <p>
                We can build your responsive web solution your businees needs to
                make perfect first impression.
              </p>
            )}
            {activeShowcase2 ? (
              <BiUpArrow className="serviceArrow" />
            ) : (
              <BiDownArrow className="serviceArrow" />
            )}
          </div>
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="pictureCase"
          >
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          whileTap={{ y: [20, 0] }}
          transition={{ duration: 0.5 }}
          className={
            activeShowcase4 ? "single-service active" : "single-service"
          }
        >
          <div
            className="titleBar"
            onClick={(e) =>
              handleActiveShowcase(
                setActiveShowcase4,
                setActiveShowcase1,
                setActiveShowcase2,
                setActiveShowcase3
              )
            }
          >
            <div>
              <FaPenNib className="serviceIcon" />
              <h1>Branding</h1>
            </div>
            {activeShowcase4 && (
              <p>
                We can build your responsive web solution your businees needs to
                make perfect first impression.
              </p>
            )}
            {activeShowcase4 ? (
              <BiUpArrow className="serviceArrow" />
            ) : (
              <BiDownArrow className="serviceArrow" />
            )}
          </div>
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="pictureCase"
          >
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
            <Link to="/">
              <img src={homeBanner} alt="" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
