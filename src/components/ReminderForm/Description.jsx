import PropTypes from "prop-types";
export function Description({ register, errors }) {
  return (
    <section>
      <label htmlFor="description">Description</label>
      <textarea id="description" {...register("description")}></textarea>
      {errors.description && (
        <p className="error">{errors.description.message}</p>
      )}
    </section>
  );
}

Description.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
