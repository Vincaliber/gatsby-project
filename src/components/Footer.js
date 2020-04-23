import React from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import styles from "../css/footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
