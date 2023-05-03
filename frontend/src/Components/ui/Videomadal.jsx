import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { BsFillPlayFill } from "react-icons/bs";

const Videomodal = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video-popup">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <BsFillPlayFill
        className="play"
        onClick={() => setOpen(true)}
      ></BsFillPlayFill>
    </div>
  );
};

export default Videomodal;
