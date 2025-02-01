import Reminder from "../../../classes/reminder.model.js";
import { useForm } from "react-hook-form";
import reminderStore from "../../store/reminderStore.js";
import { useEffect, useState } from "react";

export default function EditReminderDialog() {
  const {
    selectedReminder: reminder,
    openEditDialog: state,
    editReminder,
    setOpenEditDialog,
    toast,
  } = reminderStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Calculate and set the current date and time
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];

    setCurrentDate(formattedDate);
  }, []);

  // Update the form default values when `reminder` changes
  useEffect(() => {
    if (reminder) {
      reset({
        title: reminder.title || "",
        description: reminder.description || "",
        time: reminder.time || "",
        date: reminder.date || "",
      });
    }
  }, [reminder, reset]);

  // Handle form submission
  const onFormSubmit = (data) => {
    const newReminder = new Reminder(
      data.title,
      data.description,
      data.time,
      data.date
    );
    editReminder(reminder.id, newReminder);
    setOpenEditDialog(false);
    reset(); // Optionally reset the form
    toast(2);
  };

  return (
    <dialog open={state} className="editReminderDialog">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <h1>Reminder Details</h1>

        {/* Title Input */}
        <section>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "*Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </section>

        {/* Description Input */}
        <section>
          <label htmlFor="description">Description</label>
          <textarea id="description" {...register("description")}></textarea>
          {errors.description && (
            <p className="error">{errors.description.message}</p>
          )}
        </section>

        {/* Time and Date Inputs */}
        <div>
          <section>
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              {...register("time", { required: "*Time is required" })}
            />
            {errors.time && <p className="error">{errors.time.message}</p>}
          </section>
          <section>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              {...register("date", { required: "*Date is required" })}
              min={currentDate} // Restrict to today or later
            />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </section>
        </div>

        {/* Submit Button */}
        <section className="submitAndCancelSection">
          <button type="button" onClick={() => setOpenEditDialog(false)}>
            Cancel
          </button>
          <button type="submit">Confirm</button>
        </section>
      </form>
    </dialog>
  );
}
