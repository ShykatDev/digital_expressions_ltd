import React from "react";
import { motion } from "framer-motion";
import {
  homeBanner,
  leaser,
  samurai,
  ific,
  obj1,
  obj2,
  obj3,
  obj4,
  obj5,
} from "../../Assets";
import { BsBoxes } from "react-icons/bs";
import { CiFolderOn } from "react-icons/ci";
import SingleProject from "../../Components/projects/SingleProject";

const ProjectsAll = () => {
  return (
    <section className="projectPage">
      <div className="section-intro">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="banner-sec"
        >
          <img src={homeBanner} alt="" />
        </motion.div>

        <div className="info-sec">
          <motion.h1
            whileInView={{ opacity: [0, 1], y: [-100, 0] }}
            transition={{ duration: 0.7 }}
          >
            Digital <br /> <span>Expressions</span>
          </motion.h1>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [60, 0] }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae laborum doloribus tempore dolorum quo accusamus
            voluptatem cum error porro unde!
          </motion.p>

          <motion.div
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="section-title"
          >
            <h2>
              <BsBoxes className="ico" /> Our Projects
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="project-map">
        <div className="leftPage">
          <div className="right-rings">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div>

          <h2>
            On going
            <br />
            Project
          </h2>

          <div className="demo">
            <div className="topBox">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
            <div className="bottomBox">
              <div className="circle"></div>
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </div>

        <div className="middlePage">
          <div className="left-rings">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div>
          <div className="right-rings">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div>

          <h2>
            Featured
            <br />
            Project
          </h2>

          <div className="box"></div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="rightPage">
          <div className="left-rings">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div>

          <h2>
            Completed
            <br />
            Projects
          </h2>

          <div className="sec">
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="box"></div>
            <div className="lines2">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="sec sec2">
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="box"></div>
            <div className="lines2">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="sec sec3">
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="box"></div>
            <div className="lines2">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.7 }}
        className="running-project"
      >
        <div className="titleBar">
          <CiFolderOn className="folderIco" />
          <h3>On going Project</h3>
        </div>

        <div className="onGoingProject">
          <div className="first">
            <div>
              <h2 className="projectTitle">
                Laser Treat Website Design & Develop
              </h2>
              <p className="sub-title">
                We are digital expressions. Digital Expressions is a creative
                digital agency with sevaral services which focused on quality
                and innovations for your company.
              </p>
            </div>
            <img src={leaser} alt="leaser" />
          </div>
          <div className="project-img">
            <img src={homeBanner} alt="homebanner" />
          </div>
          <div>
            <small className="date">March 2023 - Present</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur laudantium labore cum exercitationem deserunt.
              Consequatur quasi perferendis nulla! Molestias officia non
              quisquam enim dicta quas dolor tenetur maxime officiis ullam
              molestiae modi eligendi sint, soluta consectetur quae temporibus,
              qui dolorum? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consectetur laudantium labore cum exercitationem deserunt.
              Consequatur quasi perferendis nulla! Molestias officia non
              quisquam enim dicta quas dolor tenetur maxime officiis ullam
              molestiae modi eligendi sint, soluta consectetur quae temporibus,
              qui dolorum?
            </p>
          </div>
          <div className="third">
            <div className="keyPoint-img">
              <img src={samurai} alt="keypoint" />
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quia autem esse.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quia autem esse.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quia autem esse.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quia autem esse.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quia autem esse.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quia autem esse.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quia autem esse.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.7 }}
        className="featured-project"
      >
        <div className="titleBar">
          <CiFolderOn className="folderIco" />
          <h3>Featured Project</h3>
        </div>

        <div className="featured">
          <img className="ft-img" src={homeBanner} alt="" />
          <div className="first">
            <div>
              <h1>IFIC Bank Campaign</h1>
              <small>February 2019 - Present</small>
            </div>
            <img src={ific} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            nulla hic distinctio dolores, quasi ipsum possimus atque quae soluta
            perspiciatis, doloribus officiis nemo quidem voluptatem! Deserunt,
            ad! Deleniti voluptatem ut quibusdam quia atque aliquam quam fuga,
            eveniet doloremque, accusantium veniam aperiam porro quo ex placeat
            ab numquam! Ratione, at minus?
          </p>

          <div className="objectives">
            <div className="obj">
              <img src={obj1} alt="" />
              <h3>5.3 M</h3>
              <small>Organic views on youtube</small>
            </div>
            <div className="obj">
              <img src={obj2} alt="" />
              <h3>59.06M Min</h3>
              <small>WATCHED HIGHEST TOTALWATCH TIME</small>
            </div>
            <div className="obj">
              <img src={obj3} alt="" />
              <h3>70%</h3>
              <small>Reach in Facebook</small>
            </div>
            <div className="obj">
              <img src={obj4} alt="" />
              <h3>5X</h3>
              <small>Google CTA</small>
            </div>
            <div className="obj">
              <img src={obj5} alt="" />
              <h3>5%</h3>
              <small>Higher order Click</small>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.7 }}
        className="all-projects"
      >
        <div className="titleBar">
          <CiFolderOn className="folderIco" />
          <h3>All Projects</h3>
        </div>
        <div className="singleProjects">
          <SingleProject />
          <SingleProject />
          <SingleProject />
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsAll;
