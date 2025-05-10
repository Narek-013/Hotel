import React, { useEffect, useState } from "react";
import { FaUserEdit, FaLock, FaBell, FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineUserAdd } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { requireAuth } from "../../HOC/requireAuth_NotAuth";
import { BiSolidUserCircle } from "react-icons/bi";
import { TiUserDelete } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Redux/Slices/UserSlice/userSliceThunk";
import EditProfilModal from "../../Components/AccountModals/EditProfilModal";
import PrivacySecurityModal from "../../Components/AccountModals/PrivacySecurityModal";
import NotificationsModal from "../../Components/AccountModals/NotificationsModal";
import HelpSupportModal from "../../Components/AccountModals/HelpSupportModal";
import AddAccountModal from "../../Components/AccountModals/AddAccountModal";
import DeleteAccountModal from "../../Components/AccountModals/DeleteAccountModal";
import LogOutModal from "../../Components/AccountModals/LogOutModal";
import "./accountPage.css";

const AccountPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((state) => state.userData);
  
  const accountMenu = [
    {
      id: 1,
      name: t("accountPage.menu.0"),
      icon: "FaUserEdit",
    },
    {
      id: 2,
      name: t("accountPage.menu.1"),
      icon: "FaLock",
    },
    {
      id: 3,
      name: t("accountPage.menu.2"),
      icon: "FaBell",
    },
    {
      id: 4,
      name: t("accountPage.menu.3"),
      icon: "BiHelpCircle",
    },
    {
      id: 5,
      name: t("accountPage.menu.4"),
      icon: "HiOutlineUserAdd",
    },
    {
      id: 6,
      name: t("accountPage.menu.5"),
      icon: "TiUserDelete",
    },
    {
      id: 7,
      name: t("accountPage.menu.6"),
      icon: "FaSignOutAlt",
    },
  ];

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const openModal = ({ content }) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <div className="AccountPage">
      <div className="container">
        {user && (
          <div className="accountPageDiv">
            <h2 className="account-title">{t("accountPage.title")}</h2>
            <div className="account-container">
              <div className="user-profile">
                <BiSolidUserCircle />
                <div className="user-info">
                  <h3>{user.firstName}</h3>
                  <p>{user.email}</p>
                </div>
              </div>
              <hr />
              <div className="account-settings">
                {accountMenu.map((item) => (
                  <div
                    key={item.id}
                    className="settings-item"
                    onClick={() => openModal({ content: item.name })}
                  >
                    <div className="spanMenuAccount">
                      {item.icon === "FaUserEdit" ? (
                        <FaUserEdit className="settings-icon" />
                      ) : item.icon === "FaLock" ? (
                        <FaLock className="settings-icon" />
                      ) : item.icon === "FaBell" ? (
                        <FaBell className="settings-icon" />
                      ) : item.icon === "BiHelpCircle" ? (
                        <BiHelpCircle className="settings-icon" />
                      ) : item.icon === "HiOutlineUserAdd" ? (
                        <HiOutlineUserAdd className="settings-icon" />
                      ) : item.icon === "TiUserDelete" ? (
                        <TiUserDelete className="settings-icon" />
                      ) : (
                        <FaSignOutAlt className="logout" />
                      )}
                      <span>{item.name}</span>
                    </div>
                    <IoIosArrowForward className="arrow-icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {isModalOpen &&
          (modalContent === t("accountPage.menu.0") ? (
            <EditProfilModal
              content={{ content: t("accountPage.menu.0") }}
              closeModal={() => setIsModalOpen(false)}
            />
          ) : modalContent === t("accountPage.menu.1") ? (
            <PrivacySecurityModal
              content={{ content: t("accountPage.menu.1") }}
              closeModal={() => setIsModalOpen(false)}
            />
          ) : modalContent === t("accountPage.menu.2") ? (
            <NotificationsModal
              content={{ content: t("accountPage.menu.2") }}
              closeModal={() => setIsModalOpen(false)}
            />
          ) : modalContent === t("accountPage.menu.3") ? (
            <HelpSupportModal
              content={{ content: t("accountPage.menu.3") }}
              closeModal={() => setIsModalOpen(false)}
            />
          ) : modalContent === t("accountPage.menu.4") ? (
            <AddAccountModal
              content={{ content: t("accountPage.menu.4") }}
              closeModal={() => setIsModalOpen(false)}
            />
          ) : modalContent === t("accountPage.menu.5") ? (
            <DeleteAccountModal
              content={{
                content: t("accountPage.menu.5"),
                email: user.email,
                user_id: user._id,
              }}
              closeModal={() => setIsModalOpen(false)}
            />
          ) : (
            <LogOutModal
              content={{ content: t("accountPage.menu.6"), email: user.email }}
              closeModal={() => setIsModalOpen(false)}
            />
          ))}
      </div>
    </div>
  );
};

export default requireAuth(AccountPage);
