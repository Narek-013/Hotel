import React from "react";
import { FaBath, FaShower, FaTv, FaWifi } from "react-icons/fa";
import { TbAirConditioning, TbToolsKitchen2 } from "react-icons/tb";
import { GiWineBottle } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { PiTowel } from "react-icons/pi";
import { BsPersonWorkspace, BsSafe2 } from "react-icons/bs";
import "./roomFacilities.css";

const RoomFacilities = ({ fac }) => {
  const facilityIcons = {
    "001": TbAirConditioning,
    "002": FaWifi,
    "003": FaTv,
    "004": GiWineBottle,
    "005": TbToolsKitchen2,
    "006": BsSafe2,
    "007": FiPhone,
    "008": PiTowel,
    "009": FaShower,
    "010": FaBath,
    "011": BsPersonWorkspace,
  };

  const IconComponent = facilityIcons[fac.key];

  return (
    <div className="RoomFacility">
      {IconComponent && <IconComponent key={fac.key} />}
      <span>{fac.item}</span>
    </div>
  );
};

export default RoomFacilities;
