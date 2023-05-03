import React from "react";
import { motion } from "framer-motion";
import { homeBanner } from "../../Assets";
import { BsCheckSquareFill } from "react-icons/bs";

const SingleProject = () => {
  return (
    <motion.div className="single-project">
      <div className="title">
        <h1>IFIC Bank Campaign</h1>
        <small>February 2019 - Present</small>
      </div>
      <div className="banner">
        <img src={homeBanner} alt="" />
      </div>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa commodi
          qui expedita consequatur quibusdam doloribus illum in. Unde
          repudiandae officia recusandae voluptate magnam. Facilis eligendi
          aliquid non, iure odit molestias reprehenderit eveniet deleniti
          recusandae magnam temporibus dignissimos nihil unde quis impedit culpa
          atque? Aliquam enim laborum suscipit dolorum, quasi distinctio.
        </p>

        <div className="objectiveMark">
          <div className="mark">
            <BsCheckSquareFill className="check" />
            <p>OBJECTIVE</p>
          </div>
          <div className="mark">
            <BsCheckSquareFill className="check" />
            <p>TECHNOLOGY</p>
          </div>
          <div className="mark">
            <BsCheckSquareFill className="check" />
            <p>STRATEGY</p>
          </div>
          <div className="mark">
            <BsCheckSquareFill className="check" />
            <p>ANALYTICS</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
