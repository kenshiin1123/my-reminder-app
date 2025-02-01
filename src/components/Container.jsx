import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
