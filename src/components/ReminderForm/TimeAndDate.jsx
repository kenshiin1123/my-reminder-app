import PropTypes from "prop-types";

export function TimeAndDate({ register, errors }) {
  return (
    <div>
      <section>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          {...register("time", {
            required: "*Time is required",
          })}
        />
        {errors.time && <p className="error">{errors.time.message}</p>}
      </section>
      <section>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          {...register("date", {
            required: "*Date is required",
          })}
          min={new Date().toISOString().split("T")[0]} // Restrict to today or later
        />
        {errors.date && <p className="error">{errors.date.message}</p>}
      </section>
    </div>
  );
}

TimeAndDate.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
