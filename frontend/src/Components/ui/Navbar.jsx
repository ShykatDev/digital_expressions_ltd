import React, { useEffect, useState } from "react";
import { logo } from "../../Assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { GoHome } from "react-icons/go";
import { RiUser4Line } from "react-icons/ri";
import {
  BsBoundingBox,
  BsBoxes,
  BsEnvelopeAt,
  BsBriefcase,
} from "react-icons/bs";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { gsap, Power0 } from "gsap";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const tl = gsap.timeline({
    defaults: {
      duration: 0.3,
      ease: Power0.easeNone,
    },
  });

  useEffect(() => {
    tl.fromTo(".link", { opacity: 0 }, { opacity: 1, stagger: 0.3 });
    tl.fromTo(
      ".s-io",
      { opacity: 0, y: "100%" },
      { opacity: 1, y: 0, stagger: 0.2 },
      "<30%"
    );
  }, [tl]);

  return (
    <div id="navbar">
      <Link to='/' className="logoLink">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      {menuActive ? (
        <TfiClose
          onClick={() => setMenuActive(!menuActive)}
          className="menu-toggler close"
        />
      ) : (
        <RxHamburgerMenu
          onClick={() => setMenuActive(!menuActive)}
          className="menu-toggler"
        />
      )}
      {menuActive && (
        <motion.div
          className="menu"
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            <NavLink
              className="link"
              onClick={() => setMenuActive(!menuActive)}
              to="/"
            >
              <GoHome className="navIco" /> Home
            </NavLink>
            <NavLink
              className="link"
              onClick={() => setMenuActive(!menuActive)}
              to="/about"
            >
              <RiUser4Line className="navIco" />
              About Us
            </NavLink>
            <NavLink
              className="link"
              onClick={() => setMenuActive(!menuActive)}
              to="/services"
            >
              <BsBoundingBox className="navIco" />
              Services
            </NavLink>
            <NavLink
              className="link"
              onClick={() => setMenuActive(!menuActive)}
              to="/projects"
            >
              <BsBoxes className="navIco" />
              Projects
            </NavLink>

            <NavLink
              className="link cta"
              onClick={() => setMenuActive(!menuActive)}
              to="/contact"
            >
              <BsEnvelopeAt className="navIco" />
              Contact
            </NavLink>

            <NavLink
              className="link"
              onClick={() => setMenuActive(!menuActive)}
              to="/career"
            >
              <BsBriefcase className="navIco" />
              Career
            </NavLink>
          </ul>
          <div className="social-links">
            <FaFacebookSquare className="s-io" />
            <FaInstagramSquare className="s-io" />
            <FaYoutubeSquare className="s-io" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
