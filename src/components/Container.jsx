import { element } from "prop-types";

function Container({ children }) {
  return <div className="container">{children}</div>;
}

Container.propTypes = {
  children: element,
};

export default Container;
