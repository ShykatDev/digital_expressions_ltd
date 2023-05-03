import React from "react";
import { BiMoney } from "react-icons/bi";
import { BsClockHistory, BsCalendar3 } from "react-icons/bs";
import { GiWarBonnet } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const SingleJob = ({ job_type }) => {
  console.log(job_type);
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], x: [100, 0] }}
      transition={{ duration: 0.75 }}
      className="singleJob"
    >
      <h2 className="job-title">
        <div className={job_type}></div>
        Job Title
      </h2>
      <div className="cols">
        <div className="left-col">
          <h3>About the job</h3>
          <p className="about-job">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            id fugit dolor magni, minima deleniti veritatis dolorum fuga nostrum
            explicabo porro sed repellat eveniet enim odit cum incidunt
            voluptatibus nemo pariatur architecto, doloremque vitae? At libero
            impedit eos laborum quas sequi ipsam voluptatibus rem, nostrum saepe
            iure quidem vero eum.
          </p>
          <h3>Responsiblities</h3>
          <p className="responsiblities">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, dolor.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, dolor.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, dolor.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, dolor.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, dolor.
              </li>
            </ul>
          </p>
        </div>
        <div className="right-col">
          <ul>
            <li>
              <BiMoney /> Salary - <span> Negotiable </span>
            </li>
            <li>
              <BsCalendar3 /> Work Day -{" "}
              <span> Saturday to Thursday ( 5 days ) </span>
            </li>
            <li>
              <BsClockHistory /> Office time - <span> 10.00 am to 6.30 pm</span>
            </li>
            <li>
              <GiWarBonnet /> Festival bonus - <span> 02 </span>
            </li>
            <li>
              <CiLocationOn /> Location - <span> Banani, Dhaka </span>
            </li>
          </ul>
        </div>
      </div>
      <button>Apply here</button>
    </motion.div>
  );
};

export default SingleJob;
