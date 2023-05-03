import React from "react";
import {
  BsArrowDown,
  BsFacebook,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

import { map } from "../../Assets";

const Contact = () => {
  return (
    <section className="contactPage">
      <div className="map">
        <img src={map} alt="" />
      </div>
      <h1 className="title">Contact Us</h1>
      <div className="arrowBox">
        <BsArrowDown className="downArrow" />
      </div>
      <p className="subtitle">
        We value your feedback and are always happy to assist you with any
        questions or concerns you may have. Our customer service team is
        available to help you in any way possible. If you need to contact us,
        please don't hesitate to reach out through any of the channels listed
        above. We strive to respond to all inquiries as quickly as possible, and
        we appreciate your patience while we work to address your needs. Thank
        you for your interest in our company, and we look forward to hearing
        from you soon.
      </p>

      <div className="details">
        <div className="email">
          <h1>Email</h1>
          <p>contact.dexp@gmail.com</p>
        </div>
        <div className="phone">
          <h1>Phone</h1>
          <p>+880 123456789</p>
        </div>
        <div className="office">
          <h1>Office</h1>
          <p>
            House 10A | Road 25A | Block A Banani | Dhaka 1213 | Bangladesh,
            1213
          </p>
        </div>
        <div className="socials">
          <h1>Socials</h1>

          <div className="ico">
            <a href="#">
              <BsFacebook className="io" />
            </a>
            <a href="#">
              <BsInstagram className="io" />
            </a>
            <a href="#">
              <BsYoutube className="io" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
