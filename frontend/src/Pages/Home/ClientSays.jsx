import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Testimonial from "../../Components/clients/Testimonial";
import BigTestimonal from "../../Components/clients/BigTestimonal";
import { motion } from "framer-motion";

const ClientSays = () => {
  const sliderOptions1 = [
    {
      pp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "A",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
    {
      pp: "https://images.pexels.com/photos/15804967/pexels-photo-15804967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "B",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
    {
      pp: "https://images.pexels.com/photos/5220075/pexels-photo-5220075.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "C",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
  ];
  const sliderOptions2 = [
    {
      pp: "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Shykat Raha",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
    {
      pp: "https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Shimanto",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
    {
      pp: "https://images.pexels.com/photos/5588216/pexels-photo-5588216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Puja",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
  ];
  const sliderOptions3 = [
    {
      pp: "https://images.pexels.com/photos/15656117/pexels-photo-15656117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Jibon",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
    {
      pp: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Nodi",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
    {
      pp: "https://images.pexels.com/photos/12251317/pexels-photo-12251317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Isha",
      company: "Digital Expressions",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas",
    },
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const goPrev = () => {
    const isFirst1 = currentIndex1 === 0;
    const isFirst2 = currentIndex1 === 0;
    const isFirst3 = currentIndex1 === 0;

    const newIndex1 = isFirst1 ? sliderOptions1.length - 1 : currentIndex1 - 1;
    const newIndex2 = isFirst2 ? sliderOptions1.length - 1 : currentIndex2 - 1;
    const newIndex3 = isFirst3 ? sliderOptions1.length - 1 : currentIndex3 - 1;

    setCurrentIndex1(newIndex1);
    setCurrentIndex2(newIndex2);
    setCurrentIndex3(newIndex3);
  };

  const goNext = () => {
    const isLast1 = currentIndex1 === sliderOptions1.length - 1;
    const isLast2 = currentIndex2 === sliderOptions2.length - 1;
    const isLast3 = currentIndex3 === sliderOptions3.length - 1;

    const newIndex1 = isLast1 ? 0 : currentIndex1 + 1;
    const newIndex2 = isLast2 ? 0 : currentIndex2 + 1;
    const newIndex3 = isLast3 ? 0 : currentIndex3 + 1;

    setCurrentIndex1(newIndex1);
    setCurrentIndex2(newIndex2);
    setCurrentIndex3(newIndex3);
  };

  return (
    <div id="client">
      <div className="section-title">
        <div className="heading">
          <motion.h1
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{ duration: 0.75 }}
          >
            Client <span>Says</span>
          </motion.h1>
          <div className="line"></div>
        </div>

        <motion.p
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.75 }}
        >
          Let's see what our clients says about our service which is website
          design, app design, development and branding.
        </motion.p>
      </div>

      <div className="testimonials">
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.75 }}
          className="leftColumn"
        >
          <Testimonial slides={sliderOptions1[currentIndex1]} />
          <Testimonial slides={sliderOptions2[currentIndex2]} />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ duration: 0.75 }}
          className="rightColumn"
        >
          <BigTestimonal slides={sliderOptions3[currentIndex3]} />
          <div>
            <motion.div
              whileInView={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ duration: 0.75 }}
              className="subTestimonial"
              onClick={goPrev}
            >
              <IoIosArrowBack className="prev" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ duration: 0.75 }}
              className="subTestimonial"
              onClick={goNext}
            >
              <IoIosArrowForward className="next" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientSays;
