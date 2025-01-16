import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBars } from "react-icons/fa6";

export default function NavBar() {
  const [hideBigNav, setHideBigNav] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setHideBigNav(width <= 770);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/reminders", label: "Reminders" },
    { to: "/reminders/new", label: "Add Reminder" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      <div
        className="banner"
        style={{ paddingBottom: hideBigNav ? "1rem" : "0rem" }}
      >
        <Link to={"/reminders"}>My Reminders</Link>
      </div>

      {!hideBigNav && (
        <nav className="navBar">
          <nav className="navBar">
            {links.map((link) => (
              <Link to={link.to} key={link.to} draggable="false">
                {link.label}
              </Link>
            ))}
          </nav>
        </nav>
      )}

      {hideBigNav && (
        <nav className={"navBarSmall " + (showNav && "navBarSmallToggled")}>
          <button onClick={toggleShowNav}>
            {showNav ? <FaBarsStaggered /> : <FaBars />}
          </button>

          {showNav && (
            <nav>
              {links.map((link) => (
                <Link to={link.to} key={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </nav>
      )}
    </>
  );
}
