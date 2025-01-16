import { v4 as uuid } from "uuid";

class Reminder {
  constructor(title, description, time, date, isFinished = false) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.time = time;
    this.date = date;
    this.isFinished = isFinished;
  }

  static toggleFinish(id) {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    const reminder = reminders.find((reminder) => reminder.id === id);
    if (reminder) {
      reminder.isFinished = !reminder.isFinished; // Toggle the status
      localStorage.setItem("reminders", JSON.stringify(reminders)); // Save updated array
    } else {
      console.error(`Reminder with ID ${id} not found.`);
    }
  }

  static addReminder(reminder) {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }

  static getReminders() {
    return JSON.parse(localStorage.getItem("reminders"));
  }

  static getReminder(id) {
    const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    return reminders.filter((reminder) => reminder.id == id)[0];
  }

  static editReminder(id, updatedData) {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    reminders = reminders.map((reminder) => {
      if (reminder.id === id) {
        return {
          ...reminder,
          ...updatedData, // Merge updated data with the existing reminder
        };
      }
      return reminder;
    });
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }

  static deleteReminder(id) {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

    // Filter out the reminder with the specified id
    reminders = reminders.filter((reminder) => reminder.id != id);

    // Save the updated reminders array back to LocalStorage
    localStorage.setItem("reminders", JSON.stringify(reminders));

    return reminders; // Optionally return the updated reminders array
  }
}

export default Reminder;
