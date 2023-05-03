import React from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div id="footer">
      <motion.div
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.75 }}
        className="footerGrid"
      >
        <div className="topItem">
          <h1>
            Let's <span>build</span> and <span>scale</span> it!
          </h1>
        </div>
        <div className="bottomItem">
          <div className="mail">
            <h2>mail1223@gmail.com</h2>
            <div className="line"></div>
          </div>
          <div className="footerCTA">
            <a
              href="https://mail.google.com/"
              target="blank"
              className="footerLink"
            >
              <button>
                Get in touch <BsArrowRight className="arrowRight" />
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="footer-nav"
      >
        <NavLink className="footerNavLink" to="/">
          {" "}
          Home
        </NavLink>
        <NavLink className="footerNavLink" to="/about">
          About
        </NavLink>
        <NavLink className="footerNavLink" to="/services">
          Services
        </NavLink>
        <NavLink className="footerNavLink" to="/projects">
          Projects
        </NavLink>
        <NavLink className="footerNavLink" to="/contact">
          Contact
        </NavLink>
        <NavLink className="footerNavLink" to="/career">
          Career
        </NavLink>
      </motion.div>

      <motion.div
        className="footerNav"
        whileInView={{ opacity: [0, 1], x: [100, 0] }}
        transition={{ duration: 0.75, delay: 0.6 }}
      >
        <p>
          Digital Expressions LTD. <span>@All rights reserved</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
