import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Container = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <main className={`container container-${theme}`}>{children}</main>;
};
