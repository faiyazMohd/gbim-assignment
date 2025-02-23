import React from "react";
import "./CompetitorAds.css";
import CustomTooltip from "../../Common/Tooltip/Tooltip";
import adsPromotionImage from "../../../assets/images/adsImage.png";
import adsPromotionfbIconImage from "../../../assets/icons/body/fbIcon.svg";
import googleIcon from "../../../assets/icons/body/googleIcon.svg";
import instaIcon from "../../../assets/icons/body/instaIcon.svg";
import shareIcon from "../../../assets/icons/body/shareIcon.svg";

const adsData = [
  {
    platform: "Facebook Ad",
    icon: adsPromotionfbIconImage,
    image: adsPromotionImage, // Replace with actual image
    title: "Digital marketing agency ser...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    platform: "Google Ad",
    icon: googleIcon,
    image: adsPromotionImage,
    title: "Digital marketing agency ser...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    platform: "Instagram Ad",
    icon: instaIcon,
    image: adsPromotionImage,
    title: "Digital marketing agency ser...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
];

const CompetitorAds = ({icon, title}) => {
  return (
    <div className="organic-keywords-container">
      <div className="organic-keywords-header">
        <div className="header-left">
          <img
            src={icon}
            alt="icon"
            className="chart-icon"
            style={{ width: "35px", height: "35px" }}
          />

          <span className="title">{title}</span>
          <CustomTooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
      </div>
      <div className="ads-container">
        {adsData.map((ad, index) => (
          <div key={index} className="ad-card">
            <div className="ad-header">
              <div className="ad-platform">
                {/* <i className={ad.icon}></i> */}
                <img src={ad.icon}/>
                <span>{ad.platform}</span>
                <span className="new-badge">New</span>
              </div>
              {/* <i className="ri-external-link-line"></i> */}
              <img src={shareIcon} />
            </div>
            <img src={ad.image} alt={ad.platform} className="ad-image" />
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitorAds;
