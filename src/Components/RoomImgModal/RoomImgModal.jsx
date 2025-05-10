import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./roomImgModal.css";

const RoomImgModal = ({ activeImg, closeModal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(true), 10);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(closeModal, 300);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("RoomImgModal")) {
      handleClose();
    }
  };

  return (
    <div
      className={`RoomImgModal ${visible ? "fade-in" : "fade-out"}`}
      onClick={handleOverlayClick}
    >
      <div className={`imgModalDiv ${visible ? "zoom-in" : "zoom-out"}`}>
        <IoMdClose className="modalImg-close" onClick={handleClose} />
        <div
          className="imgModal"
          style={{
            backgroundImage: `url(${activeImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default RoomImgModal;
