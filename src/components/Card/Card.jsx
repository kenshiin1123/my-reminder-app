import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Reminder from "../../../classes/reminder.model.js";
import reminderStore from "../../store/reminderStore";
import calculateTimeLeft from "../../utils/calculateTimeLeft.js";

function Card({
  id,
  title,
  description,
  time,
  date,
  isFinished: defaultIsFinished,
  deleteReminder,
}) {
  const [cardOption, setCardOption] = useState(false);
  const [isFinished, setIsFinished] = useState(defaultIsFinished);

  const goalTime = new Date(`${date}T${time}`);
  const calculatedTimeLeft = calculateTimeLeft(goalTime);

  const {
    selectReminder,
    setOpenEditDialog,
    getReminders,
    toast,
    setActivateTimer,
  } = reminderStore();

  useEffect(() => {
    if (calculatedTimeLeft === "No time left" && isFinished === false) {
      setActivateTimer(true);
    }
  }, [calculatedTimeLeft, setActivateTimer, isFinished]);

  const toggleCardOption = () => {
    setCardOption(!cardOption);
  };

  const toggleIsFinishedReminder = () => {
    setIsFinished(!isFinished);
    Reminder.toggleFinish(id);
    getReminders();
  };

  return (
    <div
      className="card"
      style={isFinished ? { backgroundColor: "#ef233c" } : {}}
    >
      {cardOption && (
        <span>
          <section>
            <button onClick={toggleCardOption}>
              <IoMdClose />
            </button>
          </section>
          <section className="buttonsSection">
            <button
              onClick={() => {
                selectReminder(Reminder.getReminder(id));
                toggleCardOption();
                setOpenEditDialog(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteReminder(id);
                toast(3);
              }}
            >
              Delete
            </button>
          </section>
        </span>
      )}
      <section>
        <input
          type="checkbox"
          id={"checkbox " + id}
          style={{ width: "1.5rem", height: "1.5rem" }}
          checked={isFinished}
          onChange={toggleIsFinishedReminder}
        />
        <label
          htmlFor={"checkbox " + id}
          style={isFinished ? { textDecoration: "line-through" } : {}}
        >
          {title}
        </label>
        {!cardOption && (
          <button className="cardOption" onClick={toggleCardOption}>
            <BsThreeDots />
          </button>
        )}
      </section>
      <p style={!description ? { display: "none" } : { display: "inherit" }}>
        {description}
      </p>
      <section
        className="dateTimeSection"
        style={!description ? { marginTop: "2rem" } : { marginTop: "0" }}
      >
        <input disabled type="time" value={time} />
        <input disabled type="date" value={date} />
      </section>
      <section
        className="timeLeftDisplay"
        style={isFinished ? { display: "none" } : { display: "inherit" }}
      >
        <p>{calculatedTimeLeft}</p>
      </section>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired, // "id" should be required
  title: PropTypes.string.isRequired, // "title" should be required
  description: PropTypes.string, // "description" should be required
  time: PropTypes.string, // Use "string" for "time"
  date: PropTypes.string, // Use "string" for "date"
  isFinished: PropTypes.bool, // Boolean is correct
  deleteReminder: PropTypes.func,
};

export default Card;
