import React from "react";
import { logo, grad1, grad2 } from "../../Assets";
import { motion } from "framer-motion";

const EvenServices = () => {
  return (
    <div className="service even-services">
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
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="details"
      >
        <h1>Website Design and Development</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tempore facere accusamus voluptatibus ratione non dolores aperiam
          quasi aut repellat?Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Rem incidunt nulla, eaque aut quidem asperiores unde pariatur
          nisi corrupti debitis. Blanditiis atque recusandae commodi, cum
          quisquam culpa odio, sit et expedita beatae consequuntur tenetur
          adipisci, autem architecto itaque voluptas quo!
        </p>

        <small>Our Clients</small>
        <div className="img-clients">
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default EvenServices;
