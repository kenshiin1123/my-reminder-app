import PropTypes from "prop-types";

function FeaturesBox({ icon, title, description }) {
  return (
    <div className="feature-container">
      {icon}
      <p>
        <b>{title}:</b> {description}
      </p>
    </div>
  );
}

FeaturesBox.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeaturesBox;
