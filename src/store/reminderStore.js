import { create } from "zustand";
import Reminder from "../../classes/reminder.model.js";
import { toast } from "react-toastify";
const reminderStore = create((set) => ({
  reminders: [],
  selectedReminder: {},
  openEditDialog: false,
  activateTimer: false,

  setActivateTimer: (state) => {
    set(() => ({
      activateTimer: state,
    }));
  },
  selectReminder: (id) => {
    set(() => ({
      selectedReminder: id,
    }));
  },
  setOpenEditDialog: (state) => {
    set(() => ({
      openEditDialog: state,
    }));
  },

  getReminders: () => {
    const loadedReminders = Reminder.getReminders();

    if (loadedReminders) {
      // Sort reminders
      const sortedReminders = [...loadedReminders].sort((a, b) => {
        if (a.isFinished && !b.isFinished) return 1; // Place finished reminders at the end
        if (!a.isFinished && b.isFinished) return -1;

        // Compare by date first
        const dateComparison = new Date(a.date) - new Date(b.date);
        if (dateComparison !== 0) return dateComparison;

        // If dates are the same, compare by time
        return a.time.localeCompare(b.time);
      });

      set(() => ({
        reminders: sortedReminders,
      }));
    }
  },

  deleteReminder: (id) => {
    Reminder.deleteReminder(id);
    set((state) => ({
      reminders: state.reminders.filter((reminder) => reminder.id !== id),
    }));
  },

  editReminder: (id, newReminderInfo) => {
    Reminder.editReminder(id, newReminderInfo);
    const loadedReminders = Reminder.getReminders();
    set(() => ({
      reminders: [...loadedReminders],
    }));
  },

  toast: (type) => {
    //? 2 = edit & 3 = delete
    if (type == 2) {
      toast.success("Reminder Updated Successfully.");
    } else if (type == 3) {
      toast.success("Reminder Deleted Successfully.");
    } else {
      toast.error("An error has occured!");
    }
  },
}));

export default reminderStore;
