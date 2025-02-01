import PropTypes from "prop-types";
export function Title({ register, errors }) {
  return (
    <>
      <h1>Reminder Details</h1>
      <section>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: "*Title is required",
          })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </section>
    </>
  );
}

Title.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
