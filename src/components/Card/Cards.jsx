import Card from "./Card.jsx";
import NoRemindersFound from "../NoRemindersFound.jsx";
import reminderStore from "../../store/reminderStore.js";
import { useEffect } from "react";

function Cards() {
  const { reminders, getReminders, deleteReminder } = reminderStore();

  useEffect(() => {
    getReminders();
  }, [getReminders]);

  useEffect(() => {
    const interval = setInterval(() => {
      getReminders();
    }, 1000); // Update every second (1 seconds)
    return () => clearInterval(interval);
  }, [getReminders]);

  const cards = reminders.map((reminder) => (
    <Card
      key={reminder.id}
      id={reminder.id}
      title={reminder.title}
      description={reminder.description}
      time={reminder.time}
      date={reminder.date}
      isFinished={reminder.isFinished}
      deleteReminder={deleteReminder}
    />
  ));

  return reminders.length ? (
    <div className="cards">{cards}</div>
  ) : (
    <NoRemindersFound />
  );
}

export default Cards;
