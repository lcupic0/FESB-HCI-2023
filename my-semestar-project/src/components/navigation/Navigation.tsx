"use client"
import { useState } from "react";
import React from "react";
import navigation from "./navigation.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation";
import {Page} from "@/config";

interface navigationProps {
  pages: Page[];
}

const Navigation: React.FC<navigationProps> = ({ pages }) => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const pathname = usePathname();
  console.log(pathname)
  console.log(isNavExpanded);

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
                      <Link href={href} className={`${navigation.link} ${pathname === href ? navigation.active : ''}`} onClick={() => setIsNavExpanded(!isNavExpanded)}>
                        {title}
                      </Link>
                    </li>
                ))}
          </ul>
        </nav>
        <Link href="/kontakt">
          <button className={navigation["contact-button"]}>
            Kontakt
          </button>
        </Link>
        <div className={`${navigation["mobile-toggle"]} ${isNavExpanded ? `${navigation.change}` : ""}`} onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
          <div className={navigation.bar1}></div>
          <div className={navigation.bar2}></div>
          <div className={navigation.bar3}></div>
        </div>
      </div>
    </div>
  )
}

export default Navigation