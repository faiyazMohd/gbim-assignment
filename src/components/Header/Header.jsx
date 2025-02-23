import React from "react";
import Tab from "../Common/Tab/Tab";
import Button from "../Common/Button/Button";
import ProfileCard from "../Common/ProfileCard/ProfileCard";
import "./Header.css";
import AllProjectsIcon from "../.././assets/icons/Header/allProjectsIcon.svg";
import keyIcon from "../.././assets/icons/Header/keyIcon.svg";
import CRICon from "../.././assets/icons/Header/CRICon.svg";
import websiteAuditIcon from "../.././assets/icons/Header/websiteAuditIcon.svg";
import magnifierIcon from "../.././assets/icons/Header/magnifierIcon.svg";
import alertIcon from "../.././assets/icons/Header/alertIcon.svg";
import notificationIcon from "../.././assets/icons/Header/notificationIcon.svg";
import settingsIcon from "../.././assets/icons/Header/settingsIcon.svg";
import helpCircleIcon from "../.././assets/icons/Header/help-circle-Icon.svg";

const Header = () => {
  const tabs = [
    { name: "All Projects", icon: AllProjectsIcon },
    { name: "Keyword Research", icon: keyIcon },
    { name: "Competitive Research", icon: CRICon },
    { name: "Website Audit", icon: websiteAuditIcon },
  ];
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-first-div">
          <img
            src="https://www.dmcockpit.com/_next/image?url=%2Fimages%2Fdark-logo.png&w=640&q=75"
            alt="logo"
            className="header-logo"
          />
          <Tab variant="dark" tabs={tabs} />
        </div>

        <div className="header-second-div">
          {/* <Button text="My Plan" variant="success" iconClass="vip-crown-fill" />
           */}
          <div className="searchIconsContainer">
            <div className="iconsContainer">
              <img src={magnifierIcon} className="w-full h-full" />
            </div>
            <div className="iconsContainer">
            <div className="redDot"></div>
              <img src={alertIcon} className="w-full h-full" />
            </div>
            <div className="iconsContainer">
            <div className="redDot"></div>
              <img src={notificationIcon} className="w-full h-full" />
            </div>
            <div className="iconsContainer">
              <img src={settingsIcon} className="w-full h-full" />
            </div>
            <div className="iconsContainer">
              <img src={helpCircleIcon} className="w-full h-full" />
            </div>
          </div>
          <ProfileCard name="John Doe" role="Project Manager" avatar={null} />
        </div>
      </div>
    </header>
  );
};

export default Header;
