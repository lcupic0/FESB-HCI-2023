"use client"
import { useState } from "react";
import navigation from "./navigation.module.css"

export type Page = {
    href: string,
    title: string
}

const pages: Page[] = [
    { href: "/", title: "Početna" },
    { href: "/vina", title: "Vina" },
    { href: "/gastronomija", title: "Gastronomija" },
    { href: "/onama", title: "O nama" },
];

function Navigation() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={navigation.wrap}>
      <div className={navigation.wrapper}>
        <span className={navigation.logo}>Vina Reljanović</span>
        <nav className={`${navigation["primary"]} ${isNavExpanded ? navigation["data-visible"] : ""}`}>
          <ul className={navigation.list}>
                {pages.map(({href, title}) => (
                    <li className={`${navigation.link} ${navigation.active}`} key={href}>{title}</li>
                ))}
          </ul>
        </nav>
        <button className={navigation["contact-button"]}>Kontakt</button>
        <div className={`${navigation["mobile-toggle"]} ${isNavExpanded ? "change" : ""}`} onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
            <div className={navigation.bar1}></div>
            <div className={navigation.bar2}></div>
            <div className={navigation.bar3}></div>
        </div>
      </div>
    </div>
  )
}

export default Navigation