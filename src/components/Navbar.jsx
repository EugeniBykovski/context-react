import React from "react";
import { routes } from "../constants/mockData";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul>
        {routes.map(({ id, name, route }) => (
          <li key={id} onClick={() => navigate(`${route}`)}>
            {/* <Link to={`${route}`}>{name}</Link> */}
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
