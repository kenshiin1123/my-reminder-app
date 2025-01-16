import { useForm } from "react-hook-form";
import { ToastContainer, toast, Slide } from "react-toastify";
import Reminder from "../../classes/reminder.model.js";
import { useEffect } from "react";

export default function AddReminderForm() {
  // Initialize the useForm hook with defaultValues
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const setDefault = () => {
    // Calculate the current date and time
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.toTimeString().split(":").slice(0, 2).join(":");

    // Set the default values for date and time inputs
    setValue("date", formattedDate);
    setValue("time", formattedTime);
  };

  useEffect(() => {
    setDefault();
  });

  // Handle form submission
  const onFormSubmit = (data) => {
    console.log("Form Data:", data);
    const newReminder = new Reminder(
      data.title,
      data.description,
      data.time,
      data.date
    );
    Reminder.addReminder(newReminder);
    toast.success("New Reminder Added!");
    reset(); // Reset the form to default values
    setDefault();
  };

  return (
    <>
      <form className="addReminderForm" onSubmit={handleSubmit(onFormSubmit)}>
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
              min={new Date().toISOString().split("T")[0]} // Restrict to today or later
            />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </section>
        </div>

        {/* Submit Button */}
        <button type="submit">Confirm Reminder</button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
}
