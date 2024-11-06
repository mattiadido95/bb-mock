import React from "react";
import Link from "next/link";

const links = [
  { path: "/", pathname: "Home" },
  { path: "/room", pathname: "Appartamenti" },
  { path: "/service", pathname: "Servizi" },
  { path: "/about", pathname: "La nostra Storia" },
  { path: "/contact", pathname: "Contatti" },
];

const Nav = ({ containerStyles, listStyle }) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyle}`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
