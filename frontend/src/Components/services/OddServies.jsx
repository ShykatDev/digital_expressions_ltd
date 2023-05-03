import React from "react";
import { logo, grad1, grad2 } from "../../Assets";
import { motion } from "framer-motion";

const OddServies = () => {
  return (
    <motion.div className="service odd-services">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="details"
      >
        <h1>Website Design and Development</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tempore facere accusamus voluptatibus ratione non dolores aperiam
          quasi aut repellat? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quae nam hic unde deleniti perspiciatis quos eos
          illo asperiores deserunt? Facere nisi velit minima iste reiciendis
          nihil ipsam magni dolorem aliquid.
        </p>

        <small>Our Clients</small>
        <div className="img-clients">
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </div>
      </motion.div>
      <div className="banners">
        <motion.img
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          src={grad1}
          alt=""
        />
        <motion.img
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.5 }}
          src={grad2}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default OddServies;
