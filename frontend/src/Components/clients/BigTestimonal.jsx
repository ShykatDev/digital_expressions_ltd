import React from "react";
import { motion } from "framer-motion";

const BigTestimonal = ({ slides }) => {
  return (
    <div className="bigTestimonialSec">
      <div className="profilePic">
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.75 }}
          src={slides.pp}
          alt=""
        />
      </div>
      <div className="review-sec">
        <motion.p
          whileInView={{ opacity: [0, 1], y: [-50, 0] }}
          transition={{ duration: 0.75 }}
        >
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          nihil quaerat minima quasi hic dolore. Perspiciatis commodi error
          sequi voluptatum?"
        </motion.p>
        <div className="profile">
          <motion.p
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.75 }}
          >
            {slides.name} - {slides.company}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default BigTestimonal;
