import React, { useState } from "react";
import Videomodal from "../../Components/ui/Videomadal";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [detailsActive1, setDetailsActive1] = useState(true);
  const [detailsActive2, setDetailsActive2] = useState(false);
  const [detailsActive3, setDetailsActive3] = useState(false);
  const [detailsActive4, setDetailsActive4] = useState(false);

  const handleActive = (act, inAct1, inAct2, inAct3) => {
    act(true);
    inAct1(false);
    inAct2(false);
    inAct3(false);
  };

  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.75 }}
      id="about"
      className="aboutSec"
    >
      <div className="section-title">
        <div className="heading">
          <motion.h1
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ duration: 0.75 }}
          >
            About <span>Us</span>
          </motion.h1>
          <div className="line"></div>
        </div>

        <motion.p
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.75 }}
        >
          We are a branding agency team lead Shyad Apon Ahsan. We have a
          talented web developer, UI-UX Design and Branding.
        </motion.p>
      </div>

      <div className="about-details">
        <motion.div
          className="videoBanner"
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.75 }}
        >
          <Videomodal />
        </motion.div>
        <motion.div
          className="details"
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ duration: 0.75 }}
        >
          <div
            className={detailsActive1 ? "aboutDetails active" : "aboutDetails"}
            onClick={(e) =>
              handleActive(
                setDetailsActive1,
                setDetailsActive2,
                setDetailsActive3,
                setDetailsActive4
              )
            }
          >
            <div className="topRow">
              <div>
                <h1>07</h1>
                <h2>
                  Years of <br />
                  experience
                </h2>
              </div>
              {detailsActive1 ? (
                <BiUpArrow className="upArrow" />
              ) : (
                <BiDownArrow className="downArrow" />
              )}
            </div>
            {detailsActive1 && (
              <motion.div
                className="bottomRow"
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit nulla expedita maiores hic, quidem aliquam
                  possimus nisi eum at quas omnis nostrum tempora, nobis eveniet
                  qui esse dolorem dolores temporibus.
                </p>
              </motion.div>
            )}
          </div>
          <div
            className={detailsActive2 ? "aboutDetails active" : "aboutDetails"}
            onClick={(e) =>
              handleActive(
                setDetailsActive2,
                setDetailsActive1,
                setDetailsActive3,
                setDetailsActive4
              )
            }
          >
            <div className="topRow">
              <div>
                <h1>56</h1>
                <h2>
                  Projects <br />
                  complete
                </h2>
              </div>
              {detailsActive2 ? (
                <BiUpArrow className="upArrow" />
              ) : (
                <BiDownArrow className="downArrow" />
              )}
            </div>
            {detailsActive2 && (
              <motion.div
                className="bottomRow"
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit nulla expedita maiores hic, quidem aliquam
                  possimus nisi eum at quas omnis nostrum tempora, nobis eveniet
                  qui esse dolorem dolores temporibus.
                </p>
              </motion.div>
            )}
          </div>
          <div
            className={detailsActive3 ? "aboutDetails active" : "aboutDetails"}
            onClick={(e) =>
              handleActive(
                setDetailsActive3,
                setDetailsActive2,
                setDetailsActive1,
                setDetailsActive4
              )
            }
          >
            <div className="topRow">
              <div>
                <h1>100</h1>
                <h2>
                  Happy <br />
                  customers
                </h2>
              </div>
              {detailsActive3 ? (
                <BiUpArrow className="upArrow" />
              ) : (
                <BiDownArrow className="downArrow" />
              )}
            </div>
            {detailsActive3 && (
              <motion.div
                className="bottomRow"
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit nulla expedita maiores hic, quidem aliquam
                  possimus nisi eum at quas omnis nostrum tempora, nobis eveniet
                  qui esse dolorem dolores temporibus.
                </p>
              </motion.div>
            )}
          </div>
          <div
            className={detailsActive4 ? "aboutDetails active" : "aboutDetails"}
            onClick={(e) =>
              handleActive(
                setDetailsActive4,
                setDetailsActive2,
                setDetailsActive3,
                setDetailsActive1
              )
            }
          >
            <div className="topRow">
              <div>
                <h1>12M</h1>
                <h2>
                  Total <br />
                  Revenue
                </h2>
              </div>
              {detailsActive4 ? (
                <BiUpArrow className="upArrow" />
              ) : (
                <BiDownArrow className="downArrow" />
              )}
            </div>
            {detailsActive4 && (
              <motion.div
                className="bottomRow"
                whileInView={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit nulla expedita maiores hic, quidem aliquam
                  possimus nisi eum at quas omnis nostrum tempora, nobis eveniet
                  qui esse dolorem dolores temporibus.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
