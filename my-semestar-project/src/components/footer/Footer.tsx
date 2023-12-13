"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import footer from "./footer.module.css"; 
import { Page } from "@/app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface footerProps {
  pages: Page[];
}

const Footer: React.FC<footerProps> = ({pages}) => {

  const pathName = usePathname();

  return (
    <div className={`${footer.wrapper} | bg-color-900`}>
        <h2 className={footer.title}>NAŠ KUTAK</h2>
        <p className={footer.quote}>100% domaći proizvod stvoren na obiteljskom poljoprivrednom gospodarstvu!</p>
        <div className={footer.izbornik}>
          {pages.map((page) => (
            <Link href={page.href} style={{textDecoration: 'none'}} key={page.href}>
              <span className={`${footer.link} ${pathName === page.href ? footer.active : ''}`}>{page.title}</span>
            </Link>
          ))}
        </div>
        <div className={footer.info}>
          <span className={footer.potpis}>&copy; 2023. HCI - Luka Čupić</span>
          <div className={footer["drustvene-mreze"]}>
            <FontAwesomeIcon icon={faInstagram} className={footer.icon}/>
            <FontAwesomeIcon icon={faFacebook} className={footer.icon} />
          </div>
        </div>
    </div>
  )
}

export default Footer
