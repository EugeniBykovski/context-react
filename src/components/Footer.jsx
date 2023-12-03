import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import clsx from "clsx";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={clsx(
        "footer",
        theme === "light" ? "footer__sun" : "footer__moon"
      )}
    >
      <Link to="/" className="logo">
        <Icon name="Twitter" />
      </Link>

      <Navbar />
    </footer>
  );
};
