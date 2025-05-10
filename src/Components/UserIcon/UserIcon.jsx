import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./userIcon.css"

const UserIcon = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation()

  const handleClick = () => {
    navigate(`/${lang}/account`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer", display: location.pathname.includes("account")  ? "none" : "flex"  }}>
      <FaUserCircle size={25} color="#ccb18a" />
    </div>
  );
};

export default UserIcon;
