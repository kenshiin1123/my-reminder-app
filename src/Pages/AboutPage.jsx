import { FaReact } from "react-icons/fa6";
import { BsListStars } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import FeaturesBoxes from "../components/AboutPageComponents/FeaturesBoxes";
function AboutPage() {
  const [showFeaturesInfo, setShowFeaturesInfo] = useState(true);

  const toggleShowFeaturesInfo = () => {
    setShowFeaturesInfo(!showFeaturesInfo);
  };

  return (
    <div className="settingsPageDiv">
      <section>
        <FaReact className="info-logo" />
        <p className="info-description">
          This Reminder Tracker app is a simple and efficient tool designed to
          help users organize and manage their tasks effectively. Built with
          React JS and styled using SCSS, the application ensures a smooth user
          experience with a clean and minimalistic design.
        </p>
        <button
          className="feature-name-container"
          onClick={() => {
            toggleShowFeaturesInfo();
          }}
        >
          <BsListStars />
          <p>Features</p>
          <RiArrowDropDownLine
            style={{
              transform: showFeaturesInfo ? "rotate(0deg)" : "rotate(-180deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      </section>
      <FeaturesBoxes showFeaturesInfo={showFeaturesInfo} />
    </div>
  );
}

export default AboutPage;
