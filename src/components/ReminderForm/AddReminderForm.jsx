import { useForm } from "react-hook-form";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useEffect } from "react";

import Reminder from "../../../classes/reminder.model.js";
import { Description } from "./Description.jsx";
import { Title } from "./Title.jsx";
import { TimeAndDate } from "./TimeAndDate.jsx";

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
        <Title register={register} errors={errors} />
        <Description register={register} errors={errors} />
        <TimeAndDate register={register} errors={errors} />
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
