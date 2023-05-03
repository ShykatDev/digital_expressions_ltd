import React from "react";
import SingleJob from "../../Components/career/SingleJob";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";

const Career = () => {
  return (
    <section className="career">
      <div className="title-section">
        <div className="big-title">
          <motion.h1
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.7 }}
          >
            Digital <br /> <span>Expressions</span>
          </motion.h1>
        </div>
        <div className="intro-title">
          <motion.p
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ut ad
            dignissimos asperiores veniam. Cumque eum nemo, totam autem sapiente
            distinctio laudantium. Odio, vel corrupti.
          </motion.p>
          <motion.h2
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <BsBriefcase /> Career Opportunities
          </motion.h2>
        </div>
      </div>

      <div className="jobs-section">
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="filter-jobs"
        >
          <h3>Job Types</h3>
          <p className="filter-active">
            <div className="all-box f-box"></div>
            All Jobs
          </p>
          <p>
            <div className="intern-box f-box"></div>
            Internships
          </p>
          <p>
            <div className="full-box f-box"></div>
            Full Time
          </p>
          <p>
            <div className="part-box f-box"></div>
            Part Time
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="open-jobs"
        >
          <h3>Open Positions</h3>

          <div className="jobs">
            <SingleJob job_type="full-box f-box" />
            <SingleJob job_type="part-box f-box" />
          </div>
        </motion.div>
      </div>

      <div className="drop-cv">
        <motion.h1
          whileInView={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ duration: 0.7 }}
        >
          Looking for other position?
        </motion.h1>
        <motion.p
          whileInView={{ opacity: [0, 1], x: [-80, 0] }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Drop your Resume here, we will contact you if there any such position.
        </motion.p>

        <motion.button
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="send-resume"
        >
          Send Resume <BsArrowRight className="arrow" />
        </motion.button>
      </div>
    </section>
  );
};

export default Career;
