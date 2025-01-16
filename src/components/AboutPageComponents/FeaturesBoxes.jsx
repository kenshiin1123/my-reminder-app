import { FaCheck } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";
import { SiDatabricks, SiCreatereactapp } from "react-icons/si";
import { TbDatabaseCog, TbSortAscending2 } from "react-icons/tb";
import { MdOutlineStorage } from "react-icons/md";
import PropTypes from "prop-types";
import FeaturesBox from "./FeaturesBox";

function FeaturesBoxes({ showFeaturesInfo }) {
  const features = [
    {
      icon: <FaCheck />,
      title: "Live Countdown Display",
      description:
        "Each reminder card shows a live countdown, helping users track how much time is left before a task is due.",
    },
    {
      icon: <RiTimerLine />,
      title: "Current Time Display",
      description:
        "Stay updated with the current time, prominently displayed on the main page.",
    },
    {
      icon: <SiDatabricks />,
      title: "Flexible Reminders",
      description:
        "Add any kind of reminder with attributes like title, description, time, and date.",
    },
    {
      icon: <TbDatabaseCog />,
      title: "CRUD Functionality",
      description: "Create, read, update, and delete reminders with ease.",
    },
    {
      icon: <MdOutlineStorage />,
      title: "LocalStorage Persistence",
      description:
        "Reminders are saved in the browser&lsquos localStorage, ensuring data remains intact between sessions.",
    },
    {
      icon: <TbSortAscending2 />,
      title: "Dynamic Sorting",
      description:
        "Newly created reminders appear at the top, while finished tasks are automatically moved to the end for better organization.",
    },
    {
      icon: <SiCreatereactapp />,
      title: "React Ecosystem",
      description:
        "The app leverages popular npm packages such as react-router-dom, zustand, prop-types, uuid, date-fns, react-icons, and react-toastify for seamless functionality.",
    },
  ];

  return (
    <section
      className="features-section style-1"
      style={{ display: showFeaturesInfo ? "grid" : "none" }}
    >
      {features.map((feature) => (
        <FeaturesBox
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

FeaturesBoxes.propTypes = {
  showFeaturesInfo: PropTypes.bool,
};

export default FeaturesBoxes;
