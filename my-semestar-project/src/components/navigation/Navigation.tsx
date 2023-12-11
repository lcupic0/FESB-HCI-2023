"use client"
import { useState } from "react";
import navigation from "./navigation.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  console.log(pathname)

  return (
    <div className={navigation.wrap}>
      <div className={navigation.wrapper}>
        <Link href="/" style={{textDecoration: 'none'}}>
          <span className={navigation.logo}>Naš kutak</span>
        </Link>
        <nav className={`${navigation["primary"]} ${isNavExpanded ? navigation["data-visible"] : ""}`}>
          <ul className={navigation.list}>
                {pages.map(({href, title}) => (
                    <li className={`${navigation.listitem}`} key={href}>
                      <Link href={href} className={`${navigation.link} ${pathname === href ? navigation.active : ''}`}>
                        {title}
                      </Link>
                    </li>
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