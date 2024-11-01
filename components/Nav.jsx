import React from "react";
import Link from "next/link";

const links = [
  { path: "/", pathname: "Home" },
  { path: "/", pathname: "About Us" },
  { path: "/", pathname: "Services" },
  { path: "/", pathname: "Contact" },
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
