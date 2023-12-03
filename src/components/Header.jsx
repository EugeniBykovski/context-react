import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { Navbar } from "./Navbar";
import { Button } from "./Button";
import clsx from "clsx";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={clsx(
        "header",
        theme === "light" ? "header__sun" : "header__moon"
      )}
    >
      <Link to="/" className="logo">
        <Icon name="Twitter" />
      </Link>

      <Navbar />

      <div>
        <Button>
          {theme === "light" ? (
            <Icon name="MoonStar" />
          ) : (
            <Icon name="SunMoon" />
          )}
        </Button>
      </div>
    </header>
  );
};
