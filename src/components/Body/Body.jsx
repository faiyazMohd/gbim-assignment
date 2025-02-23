import React, { useState } from "react";
import "./Body.css";
import FourSqaure from "../.././assets/icons/four-squares.svg";
import Adsense from "../.././assets/icons/adsense.svg";
import Analytics from "../.././assets/icons/analytics.svg";
import Attach from "../.././assets/icons/attach.svg";
import Seo from "../.././assets/icons/seo.svg";
import ContentSearch from "../.././assets/icons/content-search.svg";
import Meta from "../.././assets/icons/meta.svg";
import PowerOff from "../.././assets/icons/power-off.svg";
import SocialMedia from "../.././assets/icons/social-media.svg";
import Robot from "../.././assets/icons/robot.svg";
import Search from "../.././assets/icons/search.svg";
import StarBars from "../.././assets/icons/star-bars.svg";
import Wallet from "../.././assets/icons/wallet.svg";
import BarImage from "../.././assets/icons/bars.svg";
import Logout from "../.././assets/icons/logout.svg";
import planeIcon from "../.././assets/icons/Body/planeIcon.svg";
import rocketIcon from "../.././assets/icons/Body/rocketIcon.svg";
import greenPlaneIcon from "../.././assets/icons/Body/greenPlaneIcon.svg";
import organicTrafficIcon from "../.././assets/icons/Body/organicTrafficIcon.svg";
import paidTrafficIcon from "../.././assets/icons/Body/paidTrafficIcon.svg";
import organickeywordsIcon from "../.././assets/icons/Body/organickeywordsIcon.svg";
import organicCostIcon from "../.././assets/icons/Body/organicCostIcon.svg";
import domainIcon from "../.././assets/icons/Body/domainIcon.svg";
import backlinkIcon from "../.././assets/icons/Body/backlinkIcon.svg";
import refDomainIcon from "../.././assets/icons/Body/refDomainIcon.svg";
import organicPieChartIcon from "../.././assets/icons/Body/organicPieChartIcon.svg";
import paidPieChartIcon from "../.././assets/icons/Body/paidPieChartIcon.svg";
import organickeywordsBlueIcon from "../.././assets/icons/Body/organickeywordsBlueIcon.svg";
import brandedIcon from "../.././assets/icons/Body/brandedIcon.svg";
import competitorIcon from "../.././assets/icons/Body/competitorIcon.svg";
import keywordRankingIcon from "../.././assets/icons/Body/keywordRankingIcon.svg";
import topPageIcon from "../.././assets/icons/Body/topPageIcon.svg";
import topPaidPagesIcon from "../.././assets/icons/Body/topPaidPagesIcon.svg";
import adsPromotionIcon from "../.././assets/icons/Body/adsPromotionIcon.svg";
import MenuDrop from "../Common/MenuDrop/MenuDrop";
// import LeftDoughnut from '../Common/Doughnut/LeftDougnut';
import Bars from "../Common/Bars/Bars";
import { Line } from "react-chartjs-2";
import Tab from "../Common/Tab/Tab";
import Button from "../Common/Button/Button";
import Dropdown from "../Common/Dropdown/Dropdown";
import DateRangePicker from "../Common/DateRangePicker/DateRangePicker";
import DisplayCard from "../Common/Cards/DisplayCards/DisplayCard";
import ChartCard from "./ChartCards/ChartCard";
import PieChart from "../Charts/PieChart/PieChart";
import Table from "./Tables/Table";
import DonutChart from "../Charts/Doughnut/Doughnut";
import BarChart from "../Charts/BarChart/BarChart";
import { checkIfPaid } from "../../utils/commonFunctions";
import CompetitorAds from "./AdsCards/CompetitorAds";
// import { Bar, Doughnut, Line } from 'react-chartjs-2';

const Body = () => {
  const [activeTab, setActiveTab] = useState("organic");
  const iconsArr = [
    Search,
    FourSqaure,
    StarBars,
    Seo,
    Adsense,
    Meta,
    BarImage,
    ContentSearch,
    SocialMedia,
    Analytics,
    Attach,
    Wallet,
    Robot,
    PowerOff,
  ];

  const menuLinks = [
    {
      title: "SEO",
      links: ["Keyword Ranking", "Onpage", "Website Audit", "Backlink"],
    },
    {
      title: "Social",
      links: ["Facebook", "Instagram", "Planning"],
    },
    {
      title: "Paid Media",
      links: ["Google Ads", "Meta Ads"],
    },
    {
      title: "Analytics & Traffic",
      links: ["Google Analytics", "GSC"],
    },
    {
      title: "Tools",
      links: ["Competitive Research"],
    },
  ];

  const domainOptions = [
    "🌐*.Domain.com/*",
    "www.google.com/",
    "www.facebook.com/",
  ];
  const [selectedDomain, setSelectedDomain] = useState("🌐*.Domain.com/*");

  const countryOptions = ["🇮🇳 India", "🇺🇸 USA"];
  const [selectedCountry, setSelectedCountry] = useState("🇮🇳 India");

  const currencyOptions = ["$ USD", "₹ INR"];
  const [selectedCurrency, setSelectedCurrency] = useState("$ USD");

  const displayCards = [
    {
      title: checkIfPaid(activeTab) ? "Paid Traffic" : "Organic Traffic",
      value: "51,268",
      percentage: "32",
      icon: checkIfPaid(activeTab) ? paidTrafficIcon : organicTrafficIcon,
      borderColor: "#46C2D3",
    },
    {
      title: checkIfPaid(activeTab) ? "Paid Keywords" : "Organic Keywords",
      value: "29,383",
      percentage: "32",
      icon: organickeywordsIcon,
      borderColor: "#484ADF",
    },
    {
      title: checkIfPaid(activeTab)
        ? "Paid Traffic Cost"
        : "Organic Traffic Cost",
      value: checkIfPaid(activeTab) ? "$51,268" : "51,268",
      percentage: "32",
      icon: organicCostIcon,
      borderColor: "#F3931B",
    },
    {
      title: "Domain Trust",
      value: "213",
      percentage: "32",
      icon: domainIcon,
      borderColor: "#46D34D",
    },
    {
      title: "Total Backlinks",
      value: "543",
      percentage: "32",
      icon: backlinkIcon,
      borderColor: "#F79A9C",
    },
    {
      title: "Referring Domain",
      value: "282",
      percentage: "32",
      icon: refDomainIcon,
      borderColor: "#05ECC2",
    },
  ];

  const keywordData = [
    {
      0: "Social Media Marketing",
      1: 10,
      2: 1,
      3: 2,
      4: null,
    },
    {
      0: "seo company",
      1: 10,
      2: 5,
      3: 0,
      4: null,
    },
    {
      0: "website design service",
      1: 420,
      2: 3,
      3: 0,
      4: checkIfPaid(activeTab) ? "$ 1.26" : 1.26,
    },
    {
      0: "website seo",
      1: 10,
      2: 1,
      3: 1,
      4: checkIfPaid(activeTab) ? "$ 78.2" : 78.2,
    },
  ];

  const headers = [
    "Keyword",
    "Search Volume",
    "Position",
    "Competition",
    "CPC",
  ];

  const competitorDataHeaders = [
    "Competitor Domain",
    "Organic Keywords",
    "Organic Traffic",
    "Authenticity Score",
    "Referring Domain",
  ];
  const competitorData = [
    {
      0: "ebay.com",
      1: "40.6m",
      2: "145.2m",
      3: "92%",
      4: "452.5k",
    },
    {
      0: "amazon.com",
      1: "55.9m",
      2: "125.2m",
      3: "95%",
      4: "3.2m",
    },
    {
      0: "myntra.com",
      1: "20.1m",
      2: "30.2m",
      3: "82%",
      4: "2.2m",
    },
    {
      0: "Semrush.com",
      1: "9.1m",
      2: "2.1m",
      3: "71%",
      4: "2.4m",
    },
  ];

  const urlTrafficData = [
    {
      0: "https://gbim.com/blog",
      1: "198,928",
      2: "13,928",
      3: "digital marketing agency",
    },
    {
      0: "https://gbim.com/Pricing",
      1: "172,982",
      2: "9,298",
      3: "SEO service",
    },
    {
      0: "https://gbim.com/home",
      1: "166,287",
      2: "8,298",
      3: "ads service agency",
    },
    {
      0: "https://gbim.com/contact",
      1: "112,827",
      2: "5,827",
      3: "website service agency",
    },
  ];

  const topPagesHeaders = [
    "URL",
    "Organic Traffic",
    "Total Keywords",
    "Top Keyword",
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="left-dashboard-content" style={{ position: "sticky" }}>
        <div className="menu-icons-wrapper">
          <i className={`ri-arrow-right-s-line chev-right`}></i>
          {iconsArr?.map((data) => (
            <img src={data} alt="menu-icon" className="menu-icon" />
          ))}
        </div>
        <div className="menu-drop-wrapper">
          <i className={`ri-arrow-right-s-line chev-right`}></i>
          {menuLinks?.map((item) => (
            <MenuDrop title={item?.title} items={item?.links} />
          ))}
        </div>
      </div>
      <div className="right-dashboard-content">
        <div className="breadcrumb">
          <div className="">Competitive Research</div>
          <i class="ri-arrow-right-s-line"></i>
          <div className="semibold">Dashboard</div>
        </div>
        <div
          className="bold text-2xl"
          style={{ color: "#2D023D", marginTop: "16px", marginBottom: "16px" }}
        >
          Domain Overview
        </div>
        {/* custom tabs */}
        <div className="flex justify-between items-center">
          <div className="tabs-container">
            <div className="tabs">
              <div
                className={`tab no-wrap ${
                  activeTab === "organic" ? "active" : ""
                }`}
                onClick={() => setActiveTab("organic")}
              >
                Organic Research
              </div>
              <div
                className={`tab no-wrap ${
                  activeTab === "paid" ? "active" : ""
                }`}
                onClick={() => setActiveTab("paid")}
              >
                Paid Research
              </div>
            </div>
            <div className="underline">
              <div className={`slider ${activeTab}`} />
              {/* <span className="airplane-icon">✈️</span> */}
              <span className="airplane-icon">
                <img src={planeIcon} />
              </span>
            </div>
          </div>
          <div className="right-actions-wrapper">
            <Button
              text="Export PDF"
              variant="outlined"
              iconClass="download-2-line"
              textClass=" semibold"
            />
            <Button
              icon={<i class="ri-filter-fill text-xl"></i>}
              variant="primary"
            />
          </div>
        </div>

        <div className="tab-view-actions-wrapper ">
          <div className="border-r-2 h-full">
            <Dropdown
              options={domainOptions}
              selected={selectedDomain}
              onChange={setSelectedDomain}
            />
          </div>
          <div
            className="flex justify-between items-center w-full col-span-2 border-r-2 h-full"
            style={{ padding: "0 10px" }}
          >
            <div className="no-wrap">Gbim.com/blog/dummyblog</div>
            <Button
              //   icon={<i class="ri-filter-fill text-xl"></i>}
              text={"Launch"}
              svgIcon={rocketIcon}
              variant="primary rounded-50px"
            />
          </div>
          <div className="border-r-2 h-full">
            <Dropdown
              options={countryOptions}
              selected={selectedCountry}
              onChange={setSelectedCountry}
            />
          </div>
          <div className="border-r-2 h-full">
            <Dropdown
              options={currencyOptions}
              selected={selectedCurrency}
              onChange={setSelectedCurrency}
            />
          </div>
          <div className="h-full">
            <DateRangePicker />
          </div>
        </div>

        <div className="card-container">
          {displayCards.map((card, index) => (
            <DisplayCard
              key={index}
              title={card.title}
              value={card.value}
              percentage={card.percentage}
              icon={card.icon}
              borderColor={card.borderColor}
            />
          ))}
        </div>

        <div className="chart-container">
          <ChartCard
            title="Organic Traffic"
            dropdownOptions={["Traffic Share", "Engagement"]}
            chartIcon={
              checkIfPaid(activeTab) ? paidPieChartIcon : organicPieChartIcon
            }
            activeTab={activeTab}
            pieChartData={[
              { name: "Australia", y: 30, color: "#7086FD" },
              { name: "France", y: 20, color: "#6FD195" },
              { name: "Canada", y: 10, color: "#FFAE4C" },
              { name: "Other", y: 5, color: "#07DBFA" },
            ]}
          />

          <ChartCard
            title="Organic Keywords"
            dropdownOptions={["Search Volume", "Competition"]}
            chartIcon={organicPieChartIcon}
            activeTab={activeTab}
            pieChartData={[
              { name: "Australia", y: 30, color: "#46C2D3" },
              { name: "France", y: 20, color: "#484ADF" },
              { name: "Canada", y: 10, color: "#F3931B" },
              { name: "Other", y: 5, color: "#FF99C8" },
            ]}
          />
        </div>
        {/*organic keywords table */}
        <div className="w-full">
          <Table
            icon={organickeywordsBlueIcon}
            title={
              checkIfPaid(activeTab) ? "Paid Keywords" : "Organic Keywords"
            }
            headers={headers}
            data={keywordData}
            activeTab={activeTab}
          />
        </div>

        {/*paid competitor table */}
        {checkIfPaid(activeTab) && (
          <div className="w-full mt-16px">
            <Table
              icon={competitorIcon}
              title="Paid competitor"
              headers={competitorDataHeaders}
              data={competitorData}
              activeTab={activeTab}
            />
          </div>
        )}
        <div className="mt-16px">
          <DonutChart
            icon={brandedIcon}
            title="Branded vs. Non-Branded Traffic"
          />
        </div>

        {/*organic competitor table */}
        {!checkIfPaid(activeTab) && (
          <div className="w-full mt-16px">
            <Table
              icon={competitorIcon}
              title="Organic competitor"
              headers={competitorDataHeaders}
              data={competitorData}
              activeTab={activeTab}
            />
          </div>
        )}
        {/*bar chart */}
        {!checkIfPaid(activeTab) && (
          <div className="w-full mt-16px">
            <BarChart
              icon={keywordRankingIcon}
              title="Organic Competitors by Keyword Ranking"
            />
          </div>
        )}
        {/*organic competitor table */}
        <div className="w-full mt-16px">
          <Table
            icon={checkIfPaid(activeTab) ? topPaidPagesIcon : topPageIcon}
            title={
              checkIfPaid(activeTab)
                ? "Top Pages in Paid Search"
                : "Top Pages in Organic Search"
            }
            headers={topPagesHeaders}
            data={urlTrafficData}
            activeTab={activeTab}
          />
        </div>

        {checkIfPaid(activeTab) && (
          <div className="mt-16px">
            <CompetitorAds
              icon={adsPromotionIcon}
              title={"Competitor Ad Copies"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
