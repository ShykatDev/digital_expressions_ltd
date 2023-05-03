import React from "react";
import { grad1, grad2, grad3 } from "../../Assets/index";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiAirplay } from "react-icons/fi";

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-title">
        <div className="heading">
          <motion.h1
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ duration: 0.75 }}
          >
            Our <span>Projects</span>
          </motion.h1>
          <div className="line"></div>
        </div>

        <motion.p
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.75 }}
        >
          We built engaging user experience by connecting the dots between users
          needs and the client;s business model.
        </motion.p>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1], yn: [100, 0] }}
        transition={{ duration: 0.75 }}
        className="projects-section"
      >
        <div className="leftCol">
          <div className="projectCont">
            <img src={grad1} alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="hoveredSec"
            >
              <h1>01</h1>
              <FiAirplay className="ico" />
              <h2>Project Name</h2>
              <small>project short description to catch attention.</small>
              <Link to="/projects" className="singleProject">
                View project
              </Link>
            </motion.div>
          </div>
          <div className="projectCont">
            <img src={grad3} alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="hoveredSec"
            >
              <h1>02</h1>
              <FiAirplay className="ico" />
              <h2>Project Name</h2>
              <small>project short description to catch attention.</small>
              <Link to="/projects" className="singleProject">
                View project
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="rightCol">
          <div className="bigCont">
            <img src={grad3} alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="hoveredSec"
            >
              <h1>03</h1>
              <FiAirplay className="ico" />
              <h2>Project Name</h2>
              <small>project short description to catch attention.</small>
              <Link to="/projects" className="singleProject">
                View project
              </Link>
            </motion.div>
          </div>
          <div className="smallCont">
            <div className="smallProjectCont">
              <img src={grad2} alt="" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="hoveredSec"
              >
                <h1>04</h1>
                <FiAirplay className="ico" />
                <h2>Project Name</h2>
                <small>project short description to catch attention.</small>
                <Link to="/projects" className="singleProject">
                  View project
                </Link>
              </motion.div>
            </div>

            <div className="smallProjectCont">
              <img src={grad1} alt="" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="hoveredSec"
              >
                <h1>05</h1>
                <FiAirplay className="ico" />
                <h2>Project Name</h2>
                <small>project short description to catch attention.</small>
                <Link to="/projects" className="singleProject">
                  View project
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
