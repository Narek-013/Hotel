import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./accountModals.css";

const PrivacySecurityModal = ({ content, closeModal }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setAnimate(true), 10);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(closeModal, 300);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("PrivacySecurityModal")) {
      handleClose();
    }
  };

  return (
    <div
      className={`PrivacySecurityModal modalAccount-content ${
        animate ? "fade-in" : "fade-out"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modalAccount-container ${animate ? "zoom-in" : "zoom-out"}`}
      >
        <IoMdClose className="modalAccount-close" onClick={handleClose} />
        <h1>{content.content}</h1>
        <p>This is the settings for {content.content}.</p>
      </div>
    </div>
  );
};

export default PrivacySecurityModal;
